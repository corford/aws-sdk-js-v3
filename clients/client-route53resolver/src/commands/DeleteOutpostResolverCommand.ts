// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
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

import { DeleteOutpostResolverRequest, DeleteOutpostResolverResponse } from "../models/models_0";
import { de_DeleteOutpostResolverCommand, se_DeleteOutpostResolverCommand } from "../protocols/Aws_json1_1";
import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteOutpostResolverCommand}.
 */
export interface DeleteOutpostResolverCommandInput extends DeleteOutpostResolverRequest {}
/**
 * @public
 *
 * The output of {@link DeleteOutpostResolverCommand}.
 */
export interface DeleteOutpostResolverCommandOutput extends DeleteOutpostResolverResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a Resolver on the Outpost.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, DeleteOutpostResolverCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, DeleteOutpostResolverCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const input = { // DeleteOutpostResolverRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DeleteOutpostResolverCommand(input);
 * const response = await client.send(command);
 * // { // DeleteOutpostResolverResponse
 * //   OutpostResolver: { // OutpostResolver
 * //     Arn: "STRING_VALUE",
 * //     CreationTime: "STRING_VALUE",
 * //     ModificationTime: "STRING_VALUE",
 * //     CreatorRequestId: "STRING_VALUE",
 * //     Id: "STRING_VALUE",
 * //     InstanceCount: Number("int"),
 * //     PreferredInstanceType: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Status: "CREATING" || "OPERATIONAL" || "UPDATING" || "DELETING" || "ACTION_NEEDED" || "FAILED_CREATION" || "FAILED_DELETION",
 * //     StatusMessage: "STRING_VALUE",
 * //     OutpostArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteOutpostResolverCommandInput - {@link DeleteOutpostResolverCommandInput}
 * @returns {@link DeleteOutpostResolverCommandOutput}
 * @see {@link DeleteOutpostResolverCommandInput} for command's `input` shape.
 * @see {@link DeleteOutpostResolverCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for Route53ResolverClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The current account doesn't have the IAM permissions required to perform the specified Resolver operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested state transition isn't valid. For example, you can't delete a firewall
 * 			domain list if it is in the process of being deleted, or you can't import domains into a
 * 			domain list that is in the process of being deleted.</p>
 *
 * @throws {@link InternalServiceErrorException} (client fault)
 *  <p>We encountered an unknown error. Try again in a few minutes.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled. Try again in a few minutes.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>You have provided an invalid command. Supported values are <code>ADD</code>,
 * 			<code>REMOVE</code>, or <code>REPLACE</code> a domain.</p>
 *
 * @throws {@link Route53ResolverServiceException}
 * <p>Base exception class for all service exceptions from Route53Resolver service.</p>
 *
 */
export class DeleteOutpostResolverCommand extends $Command<
  DeleteOutpostResolverCommandInput,
  DeleteOutpostResolverCommandOutput,
  Route53ResolverClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: DeleteOutpostResolverCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ResolverClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteOutpostResolverCommandInput, DeleteOutpostResolverCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteOutpostResolverCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "DeleteOutpostResolverCommand";
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
  private serialize(input: DeleteOutpostResolverCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteOutpostResolverCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteOutpostResolverCommandOutput> {
    return de_DeleteOutpostResolverCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
