import { HttpRequest } from "@aws-sdk/protocol-http";
import { SignatureV4 } from "@aws-sdk/signature-v4";
import {
  Credentials,
  Endpoint,
  HashConstructor,
  InitializeHandler,
  InitializeHandlerArguments,
  InitializeHandlerOptions,
  InitializeHandlerOutput,
  InitializeMiddleware,
  MetadataBearer,
  Pluggable,
  Provider,
} from "@aws-sdk/types";
import { formatUrl } from "@aws-sdk/util-format-url";
import { escapeUri } from "@aws-sdk/util-uri-escape";

const regARN = /arn:[\w+=/,.@-]+:[\w+=/,.@-]+:([\w+=/,.@-]*)?:[0-9]+:[\w+=/,.@-]+(:[\w+=/,.@-]+)?(:[\w+=/,.@-]+)?/;

const sourceIds: string[] = [
  "SourceDBSnapshotIdentifier",
  "SourceDBInstanceIdentifier",
  "ReplicationSourceIdentifier",
  "SourceDBClusterSnapshotIdentifier",
];

const sourceIdToCommandKeyMap: { [key: string]: string } = {
  SourceDBSnapshotIdentifier: "CopyDBSnapshot",
  SourceDBInstanceIdentifier: "CreateDBInstanceReadReplica",
  ReplicationSourceIdentifier: "CreateDBCluster",
  SourceDBClusterSnapshotIdentifier: "CopyDBClusterSnapshot",
};

const version = "2014-10-31";

interface PreviouslyResolved {
  credentials: Provider<Credentials>;
  endpoint: Provider<Endpoint>;
  region: Provider<string>;
  sha256: HashConstructor;
  signingEscapePath: boolean;
}

/**
 * Config of the middleware to automatically add presigned URL to request.
 * The presigned URL is generated by sigV4
 */

export function crossRegionPresignedUrlMiddleware(options: PreviouslyResolved): InitializeMiddleware<any, any> {
  return <Output extends MetadataBearer>(next: InitializeHandler<any, Output>): InitializeHandler<any, Output> =>
    async (args: InitializeHandlerArguments<any>): Promise<InitializeHandlerOutput<Output>> => {
      const { input } = args;
      const region = await options.region();
      let command, sourceId;
      for (const id of sourceIds) {
        if (input.hasOwnProperty(id)) {
          sourceId = id;
          command = sourceIdToCommandKeyMap[id];
        }
      }
      if (!sourceId) {
        throw new Error("Source identifier key not set");
      }
      if (!input.PreSignedUrl && isARN(input[sourceId]) && region !== getEndpointFromARN(input[sourceId])) {
        const sourceRegion = getEndpointFromARN(input[sourceId]);
        const resolvedEndpoint = await options.endpoint();
        resolvedEndpoint.hostname = `rds.${sourceRegion}.amazonaws.com`;
        const request = new HttpRequest({
          ...resolvedEndpoint,
          protocol: "https",
          headers: {
            host: resolvedEndpoint.hostname,
          },
          query: {
            Action: command,
            Version: version,
            KmsKeyId: input.KmsKeyId,
            DestinationRegion: region,
            [sourceId]: input[sourceId],
          },
        });
        const signer = new SignatureV4({
          credentials: options.credentials,
          region: sourceRegion,
          service: "rds",
          sha256: options.sha256,
          uriEscapePath: options.signingEscapePath,
        });
        const presignedRequest = await signer.presign(request, {
          expiresIn: 3600,
        });
        args = {
          ...args,
          input: {
            ...args.input,
            PreSignedUrl: escapeUri(formatUrl(presignedRequest)),
          },
        };
      }
      return next(args);
    };
}

export const crossRegionPresignedUrlMiddlewareOptions: InitializeHandlerOptions = {
  step: "initialize",
  tags: ["CROSS_REGION_PRESIGNED_URL"],
  name: "crossRegionPresignedUrlMiddleware",
  override: true,
};

export const getCrossRegionPresignedUrlPlugin = (config: PreviouslyResolved): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.add(crossRegionPresignedUrlMiddleware(config), crossRegionPresignedUrlMiddlewareOptions);
  },
});

function isARN(id: string | undefined): boolean {
  if (!id) return false;
  return regARN.test(id);
}

function getEndpointFromARN(arn: string): string {
  const arnArr = arn.split(":");
  if (arnArr.length < 4) {
    throw new Error(`Cannot infer endpoint from '${arn}'`);
  }
  return arnArr[3];
}
