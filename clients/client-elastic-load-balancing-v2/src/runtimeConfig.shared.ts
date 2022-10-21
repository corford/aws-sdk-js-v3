// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { ElasticLoadBalancingV2ClientConfig } from "./ElasticLoadBalancingV2Client";
import { defaultEndpointResolver } from "./endpoint/endpointResolver";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ElasticLoadBalancingV2ClientConfig) => ({
  apiVersion: "2015-12-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Elastic Load Balancing v2",
  urlParser: config?.urlParser ?? parseUrl,
});
