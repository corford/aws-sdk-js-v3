import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetIpamResourceCidrsRequest, GetIpamResourceCidrsResult } from "../models/models_5";
import {
  deserializeAws_ec2GetIpamResourceCidrsCommand,
  serializeAws_ec2GetIpamResourceCidrsCommand,
} from "../protocols/Aws_ec2";

export interface GetIpamResourceCidrsCommandInput extends GetIpamResourceCidrsRequest {}
export interface GetIpamResourceCidrsCommandOutput extends GetIpamResourceCidrsResult, __MetadataBearer {}

/**
 * <p>Get information about the resources in a scope.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetIpamResourceCidrsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetIpamResourceCidrsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetIpamResourceCidrsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetIpamResourceCidrsCommandInput} for command's `input` shape.
 * @see {@link GetIpamResourceCidrsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class GetIpamResourceCidrsCommand extends $Command<
  GetIpamResourceCidrsCommandInput,
  GetIpamResourceCidrsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetIpamResourceCidrsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetIpamResourceCidrsCommandInput, GetIpamResourceCidrsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetIpamResourceCidrsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetIpamResourceCidrsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetIpamResourceCidrsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetIpamResourceCidrsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2GetIpamResourceCidrsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetIpamResourceCidrsCommandOutput> {
    return deserializeAws_ec2GetIpamResourceCidrsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
