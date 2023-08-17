// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { HttpRequestWithGreedyLabelInPathInput } from "../models/models_0";
import {
  de_HttpRequestWithGreedyLabelInPathCommand,
  se_HttpRequestWithGreedyLabelInPathCommand,
} from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link HttpRequestWithGreedyLabelInPathCommand}.
 */
export interface HttpRequestWithGreedyLabelInPathCommandInput extends HttpRequestWithGreedyLabelInPathInput {}
/**
 * @public
 *
 * The output of {@link HttpRequestWithGreedyLabelInPathCommand}.
 */
export interface HttpRequestWithGreedyLabelInPathCommandOutput extends __MetadataBearer {}

export class HttpRequestWithGreedyLabelInPathCommand extends $Command<
  HttpRequestWithGreedyLabelInPathCommandInput,
  HttpRequestWithGreedyLabelInPathCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: HttpRequestWithGreedyLabelInPathCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RestJsonProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<HttpRequestWithGreedyLabelInPathCommandInput, HttpRequestWithGreedyLabelInPathCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "HttpRequestWithGreedyLabelInPathCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: HttpRequestWithGreedyLabelInPathCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_HttpRequestWithGreedyLabelInPathCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<HttpRequestWithGreedyLabelInPathCommandOutput> {
    return de_HttpRequestWithGreedyLabelInPathCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
