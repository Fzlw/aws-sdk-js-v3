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

import { GetVocabularyRequest, GetVocabularyResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetVocabularyCommand,
  serializeAws_json1_1GetVocabularyCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";

export interface GetVocabularyCommandInput extends GetVocabularyRequest {}
export interface GetVocabularyCommandOutput extends GetVocabularyResponse, __MetadataBearer {}

/**
 * <p>Gets information about a vocabulary. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, GetVocabularyCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, GetVocabularyCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new GetVocabularyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetVocabularyCommandInput} for command's `input` shape.
 * @see {@link GetVocabularyCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for TranscribeClient's `config` shape.
 *
 */
export class GetVocabularyCommand extends $Command<
  GetVocabularyCommandInput,
  GetVocabularyCommandOutput,
  TranscribeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetVocabularyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TranscribeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetVocabularyCommandInput, GetVocabularyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "GetVocabularyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetVocabularyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetVocabularyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetVocabularyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetVocabularyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetVocabularyCommandOutput> {
    return deserializeAws_json1_1GetVocabularyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
