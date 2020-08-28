import {
  BatchCreateVariableCommandInput,
  BatchCreateVariableCommandOutput,
} from "./commands/BatchCreateVariableCommand";
import { BatchGetVariableCommandInput, BatchGetVariableCommandOutput } from "./commands/BatchGetVariableCommand";
import {
  CreateDetectorVersionCommandInput,
  CreateDetectorVersionCommandOutput,
} from "./commands/CreateDetectorVersionCommand";
import { CreateModelCommandInput, CreateModelCommandOutput } from "./commands/CreateModelCommand";
import { CreateModelVersionCommandInput, CreateModelVersionCommandOutput } from "./commands/CreateModelVersionCommand";
import { CreateRuleCommandInput, CreateRuleCommandOutput } from "./commands/CreateRuleCommand";
import { CreateVariableCommandInput, CreateVariableCommandOutput } from "./commands/CreateVariableCommand";
import { DeleteDetectorCommandInput, DeleteDetectorCommandOutput } from "./commands/DeleteDetectorCommand";
import {
  DeleteDetectorVersionCommandInput,
  DeleteDetectorVersionCommandOutput,
} from "./commands/DeleteDetectorVersionCommand";
import { DeleteEventCommandInput, DeleteEventCommandOutput } from "./commands/DeleteEventCommand";
import { DeleteRuleCommandInput, DeleteRuleCommandOutput } from "./commands/DeleteRuleCommand";
import { DescribeDetectorCommandInput, DescribeDetectorCommandOutput } from "./commands/DescribeDetectorCommand";
import {
  DescribeModelVersionsCommandInput,
  DescribeModelVersionsCommandOutput,
} from "./commands/DescribeModelVersionsCommand";
import { GetDetectorVersionCommandInput, GetDetectorVersionCommandOutput } from "./commands/GetDetectorVersionCommand";
import { GetDetectorsCommandInput, GetDetectorsCommandOutput } from "./commands/GetDetectorsCommand";
import { GetEntityTypesCommandInput, GetEntityTypesCommandOutput } from "./commands/GetEntityTypesCommand";
import { GetEventPredictionCommandInput, GetEventPredictionCommandOutput } from "./commands/GetEventPredictionCommand";
import { GetEventTypesCommandInput, GetEventTypesCommandOutput } from "./commands/GetEventTypesCommand";
import { GetExternalModelsCommandInput, GetExternalModelsCommandOutput } from "./commands/GetExternalModelsCommand";
import {
  GetKMSEncryptionKeyCommandInput,
  GetKMSEncryptionKeyCommandOutput,
} from "./commands/GetKMSEncryptionKeyCommand";
import { GetLabelsCommandInput, GetLabelsCommandOutput } from "./commands/GetLabelsCommand";
import { GetModelVersionCommandInput, GetModelVersionCommandOutput } from "./commands/GetModelVersionCommand";
import { GetModelsCommandInput, GetModelsCommandOutput } from "./commands/GetModelsCommand";
import { GetOutcomesCommandInput, GetOutcomesCommandOutput } from "./commands/GetOutcomesCommand";
import { GetRulesCommandInput, GetRulesCommandOutput } from "./commands/GetRulesCommand";
import { GetVariablesCommandInput, GetVariablesCommandOutput } from "./commands/GetVariablesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { PutDetectorCommandInput, PutDetectorCommandOutput } from "./commands/PutDetectorCommand";
import { PutEntityTypeCommandInput, PutEntityTypeCommandOutput } from "./commands/PutEntityTypeCommand";
import { PutEventTypeCommandInput, PutEventTypeCommandOutput } from "./commands/PutEventTypeCommand";
import { PutExternalModelCommandInput, PutExternalModelCommandOutput } from "./commands/PutExternalModelCommand";
import {
  PutKMSEncryptionKeyCommandInput,
  PutKMSEncryptionKeyCommandOutput,
} from "./commands/PutKMSEncryptionKeyCommand";
import { PutLabelCommandInput, PutLabelCommandOutput } from "./commands/PutLabelCommand";
import { PutOutcomeCommandInput, PutOutcomeCommandOutput } from "./commands/PutOutcomeCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateDetectorVersionCommandInput,
  UpdateDetectorVersionCommandOutput,
} from "./commands/UpdateDetectorVersionCommand";
import {
  UpdateDetectorVersionMetadataCommandInput,
  UpdateDetectorVersionMetadataCommandOutput,
} from "./commands/UpdateDetectorVersionMetadataCommand";
import {
  UpdateDetectorVersionStatusCommandInput,
  UpdateDetectorVersionStatusCommandOutput,
} from "./commands/UpdateDetectorVersionStatusCommand";
import { UpdateModelCommandInput, UpdateModelCommandOutput } from "./commands/UpdateModelCommand";
import { UpdateModelVersionCommandInput, UpdateModelVersionCommandOutput } from "./commands/UpdateModelVersionCommand";
import {
  UpdateModelVersionStatusCommandInput,
  UpdateModelVersionStatusCommandOutput,
} from "./commands/UpdateModelVersionStatusCommand";
import { UpdateRuleMetadataCommandInput, UpdateRuleMetadataCommandOutput } from "./commands/UpdateRuleMetadataCommand";
import { UpdateRuleVersionCommandInput, UpdateRuleVersionCommandOutput } from "./commands/UpdateRuleVersionCommand";
import { UpdateVariableCommandInput, UpdateVariableCommandOutput } from "./commands/UpdateVariableCommand";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import {
  LoggerInputConfig,
  LoggerResolvedConfig,
  getLoggerPlugin,
  resolveLoggerConfig,
} from "@aws-sdk/middleware-logger";
import { RetryInputConfig, RetryResolvedConfig, getRetryPlugin, resolveRetryConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | BatchCreateVariableCommandInput
  | BatchGetVariableCommandInput
  | CreateDetectorVersionCommandInput
  | CreateModelCommandInput
  | CreateModelVersionCommandInput
  | CreateRuleCommandInput
  | CreateVariableCommandInput
  | DeleteDetectorCommandInput
  | DeleteDetectorVersionCommandInput
  | DeleteEventCommandInput
  | DeleteRuleCommandInput
  | DescribeDetectorCommandInput
  | DescribeModelVersionsCommandInput
  | GetDetectorVersionCommandInput
  | GetDetectorsCommandInput
  | GetEntityTypesCommandInput
  | GetEventPredictionCommandInput
  | GetEventTypesCommandInput
  | GetExternalModelsCommandInput
  | GetKMSEncryptionKeyCommandInput
  | GetLabelsCommandInput
  | GetModelVersionCommandInput
  | GetModelsCommandInput
  | GetOutcomesCommandInput
  | GetRulesCommandInput
  | GetVariablesCommandInput
  | ListTagsForResourceCommandInput
  | PutDetectorCommandInput
  | PutEntityTypeCommandInput
  | PutEventTypeCommandInput
  | PutExternalModelCommandInput
  | PutKMSEncryptionKeyCommandInput
  | PutLabelCommandInput
  | PutOutcomeCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateDetectorVersionCommandInput
  | UpdateDetectorVersionMetadataCommandInput
  | UpdateDetectorVersionStatusCommandInput
  | UpdateModelCommandInput
  | UpdateModelVersionCommandInput
  | UpdateModelVersionStatusCommandInput
  | UpdateRuleMetadataCommandInput
  | UpdateRuleVersionCommandInput
  | UpdateVariableCommandInput;

export type ServiceOutputTypes =
  | BatchCreateVariableCommandOutput
  | BatchGetVariableCommandOutput
  | CreateDetectorVersionCommandOutput
  | CreateModelCommandOutput
  | CreateModelVersionCommandOutput
  | CreateRuleCommandOutput
  | CreateVariableCommandOutput
  | DeleteDetectorCommandOutput
  | DeleteDetectorVersionCommandOutput
  | DeleteEventCommandOutput
  | DeleteRuleCommandOutput
  | DescribeDetectorCommandOutput
  | DescribeModelVersionsCommandOutput
  | GetDetectorVersionCommandOutput
  | GetDetectorsCommandOutput
  | GetEntityTypesCommandOutput
  | GetEventPredictionCommandOutput
  | GetEventTypesCommandOutput
  | GetExternalModelsCommandOutput
  | GetKMSEncryptionKeyCommandOutput
  | GetLabelsCommandOutput
  | GetModelVersionCommandOutput
  | GetModelsCommandOutput
  | GetOutcomesCommandOutput
  | GetRulesCommandOutput
  | GetVariablesCommandOutput
  | ListTagsForResourceCommandOutput
  | PutDetectorCommandOutput
  | PutEntityTypeCommandOutput
  | PutEventTypeCommandOutput
  | PutExternalModelCommandOutput
  | PutKMSEncryptionKeyCommandOutput
  | PutLabelCommandOutput
  | PutOutcomeCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateDetectorVersionCommandOutput
  | UpdateDetectorVersionMetadataCommandOutput
  | UpdateDetectorVersionStatusCommandOutput
  | UpdateModelCommandOutput
  | UpdateModelVersionCommandOutput
  | UpdateModelVersionStatusCommandOutput
  | UpdateRuleMetadataCommandOutput
  | UpdateRuleVersionCommandOutput
  | UpdateVariableCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string
   */
  utf8Encoder?: __Encoder;

  /**
   * The string that will be used to populate default value in 'User-Agent' header
   */
  defaultUserAgent?: string;

  /**
   * The runtime environment
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * The service name with which to sign requests.
   */
  signingName?: string;

  /**
   * Default credentials provider; Not available in browser runtime
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type FraudDetectorClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig &
  LoggerInputConfig;

export type FraudDetectorClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig &
  LoggerResolvedConfig;

/**
 * <p>This is the Amazon Fraud Detector API Reference. This guide is for developers who need
 *             detailed information about Amazon Fraud Detector API actions, data types, and errors. For
 *             more information about Amazon Fraud Detector features, see the <a href="https://docs.aws.amazon.com/frauddetector/latest/ug/">Amazon Fraud Detector User Guide</a>.</p>
 */
export class FraudDetectorClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  FraudDetectorClientResolvedConfig
> {
  readonly config: FraudDetectorClientResolvedConfig;

  constructor(configuration: FraudDetectorClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration,
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveAwsAuthConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    let _config_6 = resolveHostHeaderConfig(_config_5);
    let _config_7 = resolveLoggerConfig(_config_6);
    super(_config_7);
    this.config = _config_7;
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
  }

  destroy(): void {
    super.destroy();
  }
}
