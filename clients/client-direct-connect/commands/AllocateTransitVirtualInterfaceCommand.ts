import {
  DirectConnectClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../DirectConnectClient";
import {
  AllocateTransitVirtualInterfaceRequest,
  AllocateTransitVirtualInterfaceResult
} from "../models/index";
import {
  deserializeAws_json1_1AllocateTransitVirtualInterfaceCommand,
  serializeAws_json1_1AllocateTransitVirtualInterfaceCommand
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type AllocateTransitVirtualInterfaceCommandInput = AllocateTransitVirtualInterfaceRequest;
export type AllocateTransitVirtualInterfaceCommandOutput = AllocateTransitVirtualInterfaceResult;

export class AllocateTransitVirtualInterfaceCommand extends $Command<
  AllocateTransitVirtualInterfaceCommandInput,
  AllocateTransitVirtualInterfaceCommandOutput,
  DirectConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AllocateTransitVirtualInterfaceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    AllocateTransitVirtualInterfaceCommandInput,
    AllocateTransitVirtualInterfaceCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AllocateTransitVirtualInterfaceCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1AllocateTransitVirtualInterfaceCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<AllocateTransitVirtualInterfaceCommandOutput> {
    return deserializeAws_json1_1AllocateTransitVirtualInterfaceCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}