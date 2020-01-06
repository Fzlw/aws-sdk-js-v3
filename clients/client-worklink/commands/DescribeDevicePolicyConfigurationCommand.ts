import {
  ServiceInputTypes,
  ServiceOutputTypes,
  WorkLinkClientResolvedConfig
} from "../WorkLinkClient";
import {
  DescribeDevicePolicyConfigurationRequest,
  DescribeDevicePolicyConfigurationResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1DescribeDevicePolicyConfigurationCommand,
  serializeAws_restJson1_1DescribeDevicePolicyConfigurationCommand
} from "../protocols/Aws_restJson1_1";
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

export type DescribeDevicePolicyConfigurationCommandInput = DescribeDevicePolicyConfigurationRequest;
export type DescribeDevicePolicyConfigurationCommandOutput = DescribeDevicePolicyConfigurationResponse;

export class DescribeDevicePolicyConfigurationCommand extends $Command<
  DescribeDevicePolicyConfigurationCommandInput,
  DescribeDevicePolicyConfigurationCommandOutput,
  WorkLinkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDevicePolicyConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkLinkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeDevicePolicyConfigurationCommandInput,
    DescribeDevicePolicyConfigurationCommandOutput
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
    input: DescribeDevicePolicyConfigurationCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1DescribeDevicePolicyConfigurationCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<DescribeDevicePolicyConfigurationCommandOutput> {
    return deserializeAws_restJson1_1DescribeDevicePolicyConfigurationCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}