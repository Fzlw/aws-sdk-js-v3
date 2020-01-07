import {
  BatchCheckLayerAvailabilityCommandInput,
  BatchCheckLayerAvailabilityCommandOutput
} from "../commands/BatchCheckLayerAvailabilityCommand";
import {
  BatchDeleteImageCommandInput,
  BatchDeleteImageCommandOutput
} from "../commands/BatchDeleteImageCommand";
import {
  BatchGetImageCommandInput,
  BatchGetImageCommandOutput
} from "../commands/BatchGetImageCommand";
import {
  CompleteLayerUploadCommandInput,
  CompleteLayerUploadCommandOutput
} from "../commands/CompleteLayerUploadCommand";
import {
  CreateRepositoryCommandInput,
  CreateRepositoryCommandOutput
} from "../commands/CreateRepositoryCommand";
import {
  DeleteLifecyclePolicyCommandInput,
  DeleteLifecyclePolicyCommandOutput
} from "../commands/DeleteLifecyclePolicyCommand";
import {
  DeleteRepositoryCommandInput,
  DeleteRepositoryCommandOutput
} from "../commands/DeleteRepositoryCommand";
import {
  DeleteRepositoryPolicyCommandInput,
  DeleteRepositoryPolicyCommandOutput
} from "../commands/DeleteRepositoryPolicyCommand";
import {
  DescribeImageScanFindingsCommandInput,
  DescribeImageScanFindingsCommandOutput
} from "../commands/DescribeImageScanFindingsCommand";
import {
  DescribeImagesCommandInput,
  DescribeImagesCommandOutput
} from "../commands/DescribeImagesCommand";
import {
  DescribeRepositoriesCommandInput,
  DescribeRepositoriesCommandOutput
} from "../commands/DescribeRepositoriesCommand";
import {
  GetAuthorizationTokenCommandInput,
  GetAuthorizationTokenCommandOutput
} from "../commands/GetAuthorizationTokenCommand";
import {
  GetDownloadUrlForLayerCommandInput,
  GetDownloadUrlForLayerCommandOutput
} from "../commands/GetDownloadUrlForLayerCommand";
import {
  GetLifecyclePolicyCommandInput,
  GetLifecyclePolicyCommandOutput
} from "../commands/GetLifecyclePolicyCommand";
import {
  GetLifecyclePolicyPreviewCommandInput,
  GetLifecyclePolicyPreviewCommandOutput
} from "../commands/GetLifecyclePolicyPreviewCommand";
import {
  GetRepositoryPolicyCommandInput,
  GetRepositoryPolicyCommandOutput
} from "../commands/GetRepositoryPolicyCommand";
import {
  InitiateLayerUploadCommandInput,
  InitiateLayerUploadCommandOutput
} from "../commands/InitiateLayerUploadCommand";
import {
  ListImagesCommandInput,
  ListImagesCommandOutput
} from "../commands/ListImagesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  PutImageCommandInput,
  PutImageCommandOutput
} from "../commands/PutImageCommand";
import {
  PutImageScanningConfigurationCommandInput,
  PutImageScanningConfigurationCommandOutput
} from "../commands/PutImageScanningConfigurationCommand";
import {
  PutImageTagMutabilityCommandInput,
  PutImageTagMutabilityCommandOutput
} from "../commands/PutImageTagMutabilityCommand";
import {
  PutLifecyclePolicyCommandInput,
  PutLifecyclePolicyCommandOutput
} from "../commands/PutLifecyclePolicyCommand";
import {
  SetRepositoryPolicyCommandInput,
  SetRepositoryPolicyCommandOutput
} from "../commands/SetRepositoryPolicyCommand";
import {
  StartImageScanCommandInput,
  StartImageScanCommandOutput
} from "../commands/StartImageScanCommand";
import {
  StartLifecyclePolicyPreviewCommandInput,
  StartLifecyclePolicyPreviewCommandOutput
} from "../commands/StartLifecyclePolicyPreviewCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UploadLayerPartCommandInput,
  UploadLayerPartCommandOutput
} from "../commands/UploadLayerPartCommand";
import {
  Attribute,
  AuthorizationData,
  BatchCheckLayerAvailabilityRequest,
  BatchCheckLayerAvailabilityResponse,
  BatchDeleteImageRequest,
  BatchDeleteImageResponse,
  BatchGetImageRequest,
  BatchGetImageResponse,
  CompleteLayerUploadRequest,
  CompleteLayerUploadResponse,
  CreateRepositoryRequest,
  CreateRepositoryResponse,
  DeleteLifecyclePolicyRequest,
  DeleteLifecyclePolicyResponse,
  DeleteRepositoryPolicyRequest,
  DeleteRepositoryPolicyResponse,
  DeleteRepositoryRequest,
  DeleteRepositoryResponse,
  DescribeImageScanFindingsRequest,
  DescribeImageScanFindingsResponse,
  DescribeImagesFilter,
  DescribeImagesRequest,
  DescribeImagesResponse,
  DescribeRepositoriesRequest,
  DescribeRepositoriesResponse,
  EmptyUploadException,
  GetAuthorizationTokenRequest,
  GetAuthorizationTokenResponse,
  GetDownloadUrlForLayerRequest,
  GetDownloadUrlForLayerResponse,
  GetLifecyclePolicyPreviewRequest,
  GetLifecyclePolicyPreviewResponse,
  GetLifecyclePolicyRequest,
  GetLifecyclePolicyResponse,
  GetRepositoryPolicyRequest,
  GetRepositoryPolicyResponse,
  Image,
  ImageAlreadyExistsException,
  ImageDetail,
  ImageFailure,
  ImageIdentifier,
  ImageNotFoundException,
  ImageScanFinding,
  ImageScanFindings,
  ImageScanFindingsSummary,
  ImageScanStatus,
  ImageScanningConfiguration,
  ImageTagAlreadyExistsException,
  InitiateLayerUploadRequest,
  InitiateLayerUploadResponse,
  InvalidLayerException,
  InvalidLayerPartException,
  InvalidParameterException,
  InvalidTagParameterException,
  Layer,
  LayerAlreadyExistsException,
  LayerFailure,
  LayerInaccessibleException,
  LayerPartTooSmallException,
  LayersNotFoundException,
  LifecyclePolicyNotFoundException,
  LifecyclePolicyPreviewFilter,
  LifecyclePolicyPreviewInProgressException,
  LifecyclePolicyPreviewNotFoundException,
  LifecyclePolicyPreviewResult,
  LifecyclePolicyPreviewSummary,
  LifecyclePolicyRuleAction,
  LimitExceededException,
  ListImagesFilter,
  ListImagesRequest,
  ListImagesResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  PutImageRequest,
  PutImageResponse,
  PutImageScanningConfigurationRequest,
  PutImageScanningConfigurationResponse,
  PutImageTagMutabilityRequest,
  PutImageTagMutabilityResponse,
  PutLifecyclePolicyRequest,
  PutLifecyclePolicyResponse,
  Repository,
  RepositoryAlreadyExistsException,
  RepositoryNotEmptyException,
  RepositoryNotFoundException,
  RepositoryPolicyNotFoundException,
  ScanNotFoundException,
  ServerException,
  SetRepositoryPolicyRequest,
  SetRepositoryPolicyResponse,
  StartImageScanRequest,
  StartImageScanResponse,
  StartLifecyclePolicyPreviewRequest,
  StartLifecyclePolicyPreviewResponse,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  TooManyTagsException,
  UntagResourceRequest,
  UntagResourceResponse,
  UploadLayerPartRequest,
  UploadLayerPartResponse,
  UploadNotFoundException
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_json1_1BatchCheckLayerAvailabilityCommand(
  input: BatchCheckLayerAvailabilityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerRegistry_V20150921.BatchCheckLayerAvailability";
  let body: any = {};
  const wrappedBody: any = {
    BatchCheckLayerAvailabilityRequest: serializeAws_json1_1BatchCheckLayerAvailabilityRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/BatchCheckLayerAvailability",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1BatchDeleteImageCommand(
  input: BatchDeleteImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerRegistry_V20150921.BatchDeleteImage";
  let body: any = {};
  const wrappedBody: any = {
    BatchDeleteImageRequest: serializeAws_json1_1BatchDeleteImageRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/BatchDeleteImage",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1BatchGetImageCommand(
  input: BatchGetImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerRegistry_V20150921.BatchGetImage";
  let body: any = {};
  const wrappedBody: any = {
    BatchGetImageRequest: serializeAws_json1_1BatchGetImageRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/BatchGetImage",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CompleteLayerUploadCommand(
  input: CompleteLayerUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerRegistry_V20150921.CompleteLayerUpload";
  let body: any = {};
  const wrappedBody: any = {
    CompleteLayerUploadRequest: serializeAws_json1_1CompleteLayerUploadRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CompleteLayerUpload",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateRepositoryCommand(
  input: CreateRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerRegistry_V20150921.CreateRepository";
  let body: any = {};
  const wrappedBody: any = {
    CreateRepositoryRequest: serializeAws_json1_1CreateRepositoryRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateRepository",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteLifecyclePolicyCommand(
  input: DeleteLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerRegistry_V20150921.DeleteLifecyclePolicy";
  let body: any = {};
  const wrappedBody: any = {
    DeleteLifecyclePolicyRequest: serializeAws_json1_1DeleteLifecyclePolicyRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteLifecyclePolicy",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteRepositoryCommand(
  input: DeleteRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerRegistry_V20150921.DeleteRepository";
  let body: any = {};
  const wrappedBody: any = {
    DeleteRepositoryRequest: serializeAws_json1_1DeleteRepositoryRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteRepository",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteRepositoryPolicyCommand(
  input: DeleteRepositoryPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerRegistry_V20150921.DeleteRepositoryPolicy";
  let body: any = {};
  const wrappedBody: any = {
    DeleteRepositoryPolicyRequest: serializeAws_json1_1DeleteRepositoryPolicyRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteRepositoryPolicy",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeImageScanFindingsCommand(
  input: DescribeImageScanFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerRegistry_V20150921.DescribeImageScanFindings";
  let body: any = {};
  const wrappedBody: any = {
    DescribeImageScanFindingsRequest: serializeAws_json1_1DescribeImageScanFindingsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeImageScanFindings",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeImagesCommand(
  input: DescribeImagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerRegistry_V20150921.DescribeImages";
  let body: any = {};
  const wrappedBody: any = {
    DescribeImagesRequest: serializeAws_json1_1DescribeImagesRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeImages",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeRepositoriesCommand(
  input: DescribeRepositoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerRegistry_V20150921.DescribeRepositories";
  let body: any = {};
  const wrappedBody: any = {
    DescribeRepositoriesRequest: serializeAws_json1_1DescribeRepositoriesRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeRepositories",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetAuthorizationTokenCommand(
  input: GetAuthorizationTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerRegistry_V20150921.GetAuthorizationToken";
  let body: any = {};
  const wrappedBody: any = {
    GetAuthorizationTokenRequest: serializeAws_json1_1GetAuthorizationTokenRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetAuthorizationToken",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetDownloadUrlForLayerCommand(
  input: GetDownloadUrlForLayerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerRegistry_V20150921.GetDownloadUrlForLayer";
  let body: any = {};
  const wrappedBody: any = {
    GetDownloadUrlForLayerRequest: serializeAws_json1_1GetDownloadUrlForLayerRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetDownloadUrlForLayer",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetLifecyclePolicyCommand(
  input: GetLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicy";
  let body: any = {};
  const wrappedBody: any = {
    GetLifecyclePolicyRequest: serializeAws_json1_1GetLifecyclePolicyRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetLifecyclePolicy",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetLifecyclePolicyPreviewCommand(
  input: GetLifecyclePolicyPreviewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicyPreview";
  let body: any = {};
  const wrappedBody: any = {
    GetLifecyclePolicyPreviewRequest: serializeAws_json1_1GetLifecyclePolicyPreviewRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetLifecyclePolicyPreview",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetRepositoryPolicyCommand(
  input: GetRepositoryPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerRegistry_V20150921.GetRepositoryPolicy";
  let body: any = {};
  const wrappedBody: any = {
    GetRepositoryPolicyRequest: serializeAws_json1_1GetRepositoryPolicyRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetRepositoryPolicy",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1InitiateLayerUploadCommand(
  input: InitiateLayerUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerRegistry_V20150921.InitiateLayerUpload";
  let body: any = {};
  const wrappedBody: any = {
    InitiateLayerUploadRequest: serializeAws_json1_1InitiateLayerUploadRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/InitiateLayerUpload",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListImagesCommand(
  input: ListImagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonEC2ContainerRegistry_V20150921.ListImages";
  let body: any = {};
  const wrappedBody: any = {
    ListImagesRequest: serializeAws_json1_1ListImagesRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListImages",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerRegistry_V20150921.ListTagsForResource";
  let body: any = {};
  const wrappedBody: any = {
    ListTagsForResourceRequest: serializeAws_json1_1ListTagsForResourceRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListTagsForResource",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1PutImageCommand(
  input: PutImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonEC2ContainerRegistry_V20150921.PutImage";
  let body: any = {};
  const wrappedBody: any = {
    PutImageRequest: serializeAws_json1_1PutImageRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/PutImage",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1PutImageScanningConfigurationCommand(
  input: PutImageScanningConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerRegistry_V20150921.PutImageScanningConfiguration";
  let body: any = {};
  const wrappedBody: any = {
    PutImageScanningConfigurationRequest: serializeAws_json1_1PutImageScanningConfigurationRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/PutImageScanningConfiguration",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1PutImageTagMutabilityCommand(
  input: PutImageTagMutabilityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerRegistry_V20150921.PutImageTagMutability";
  let body: any = {};
  const wrappedBody: any = {
    PutImageTagMutabilityRequest: serializeAws_json1_1PutImageTagMutabilityRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/PutImageTagMutability",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1PutLifecyclePolicyCommand(
  input: PutLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerRegistry_V20150921.PutLifecyclePolicy";
  let body: any = {};
  const wrappedBody: any = {
    PutLifecyclePolicyRequest: serializeAws_json1_1PutLifecyclePolicyRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/PutLifecyclePolicy",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1SetRepositoryPolicyCommand(
  input: SetRepositoryPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerRegistry_V20150921.SetRepositoryPolicy";
  let body: any = {};
  const wrappedBody: any = {
    SetRepositoryPolicyRequest: serializeAws_json1_1SetRepositoryPolicyRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/SetRepositoryPolicy",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1StartImageScanCommand(
  input: StartImageScanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerRegistry_V20150921.StartImageScan";
  let body: any = {};
  const wrappedBody: any = {
    StartImageScanRequest: serializeAws_json1_1StartImageScanRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/StartImageScan",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1StartLifecyclePolicyPreviewCommand(
  input: StartLifecyclePolicyPreviewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerRegistry_V20150921.StartLifecyclePolicyPreview";
  let body: any = {};
  const wrappedBody: any = {
    StartLifecyclePolicyPreviewRequest: serializeAws_json1_1StartLifecyclePolicyPreviewRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/StartLifecyclePolicyPreview",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonEC2ContainerRegistry_V20150921.TagResource";
  let body: any = {};
  const wrappedBody: any = {
    TagResourceRequest: serializeAws_json1_1TagResourceRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/TagResource",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerRegistry_V20150921.UntagResource";
  let body: any = {};
  const wrappedBody: any = {
    UntagResourceRequest: serializeAws_json1_1UntagResourceRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UntagResource",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UploadLayerPartCommand(
  input: UploadLayerPartCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerRegistry_V20150921.UploadLayerPart";
  let body: any = {};
  const wrappedBody: any = {
    UploadLayerPartRequest: serializeAws_json1_1UploadLayerPartRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UploadLayerPart",
    headers: headers,
    body: body
  });
}

export async function deserializeAws_json1_1BatchCheckLayerAvailabilityCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCheckLayerAvailabilityCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1BatchCheckLayerAvailabilityCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchCheckLayerAvailabilityResponse(
    data.BatchCheckLayerAvailabilityResponse,
    context
  );
  const response: BatchCheckLayerAvailabilityCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchCheckLayerAvailabilityResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1BatchCheckLayerAvailabilityCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCheckLayerAvailabilityCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.starport.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1BatchDeleteImageCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteImageCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1BatchDeleteImageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchDeleteImageResponse(
    data.BatchDeleteImageResponse,
    context
  );
  const response: BatchDeleteImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchDeleteImageResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1BatchDeleteImageCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteImageCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.starport.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1BatchGetImageCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetImageCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1BatchGetImageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetImageResponse(
    data.BatchGetImageResponse,
    context
  );
  const response: BatchGetImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchGetImageResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1BatchGetImageCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetImageCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.starport.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1CompleteLayerUploadCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteLayerUploadCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CompleteLayerUploadCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CompleteLayerUploadResponse(
    data.CompleteLayerUploadResponse,
    context
  );
  const response: CompleteLayerUploadCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CompleteLayerUploadResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CompleteLayerUploadCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteLayerUploadCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "EmptyUploadException":
    case "com.amazonaws.starport.frontend#EmptyUploadException":
      response = await deserializeAws_json1_1EmptyUploadExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidLayerException":
    case "com.amazonaws.starport.frontend#InvalidLayerException":
      response = await deserializeAws_json1_1InvalidLayerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LayerAlreadyExistsException":
    case "com.amazonaws.starport.frontend#LayerAlreadyExistsException":
      response = await deserializeAws_json1_1LayerAlreadyExistsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LayerPartTooSmallException":
    case "com.amazonaws.starport.frontend#LayerPartTooSmallException":
      response = await deserializeAws_json1_1LayerPartTooSmallExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UploadNotFoundException":
    case "com.amazonaws.starport.frontend#UploadNotFoundException":
      response = await deserializeAws_json1_1UploadNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.starport.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1CreateRepositoryCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRepositoryCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateRepositoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateRepositoryResponse(
    data.CreateRepositoryResponse,
    context
  );
  const response: CreateRepositoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateRepositoryResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateRepositoryCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRepositoryCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidTagParameterException":
    case "com.amazonaws.starport.frontend#InvalidTagParameterException":
      response = await deserializeAws_json1_1InvalidTagParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.starport.frontend#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RepositoryAlreadyExistsException":
    case "com.amazonaws.starport.frontend#RepositoryAlreadyExistsException":
      response = await deserializeAws_json1_1RepositoryAlreadyExistsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyTagsException":
    case "com.amazonaws.starport.frontend#TooManyTagsException":
      response = await deserializeAws_json1_1TooManyTagsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.starport.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteLifecyclePolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLifecyclePolicyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteLifecyclePolicyCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteLifecyclePolicyResponse(
    data.DeleteLifecyclePolicyResponse,
    context
  );
  const response: DeleteLifecyclePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteLifecyclePolicyResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteLifecyclePolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLifecyclePolicyCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LifecyclePolicyNotFoundException":
    case "com.amazonaws.starport.frontend#LifecyclePolicyNotFoundException":
      response = await deserializeAws_json1_1LifecyclePolicyNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.starport.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteRepositoryCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRepositoryCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteRepositoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteRepositoryResponse(
    data.DeleteRepositoryResponse,
    context
  );
  const response: DeleteRepositoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteRepositoryResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteRepositoryCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRepositoryCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RepositoryNotEmptyException":
    case "com.amazonaws.starport.frontend#RepositoryNotEmptyException":
      response = await deserializeAws_json1_1RepositoryNotEmptyExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.starport.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteRepositoryPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRepositoryPolicyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteRepositoryPolicyCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteRepositoryPolicyResponse(
    data.DeleteRepositoryPolicyResponse,
    context
  );
  const response: DeleteRepositoryPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteRepositoryPolicyResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteRepositoryPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRepositoryPolicyCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RepositoryPolicyNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryPolicyNotFoundException":
      response = await deserializeAws_json1_1RepositoryPolicyNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.starport.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeImageScanFindingsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImageScanFindingsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeImageScanFindingsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeImageScanFindingsResponse(
    data.DescribeImageScanFindingsResponse,
    context
  );
  const response: DescribeImageScanFindingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeImageScanFindingsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeImageScanFindingsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImageScanFindingsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ImageNotFoundException":
    case "com.amazonaws.starport.frontend#ImageNotFoundException":
      response = await deserializeAws_json1_1ImageNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ScanNotFoundException":
    case "com.amazonaws.starport.frontend#ScanNotFoundException":
      response = await deserializeAws_json1_1ScanNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.starport.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeImagesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImagesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeImagesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeImagesResponse(
    data.DescribeImagesResponse,
    context
  );
  const response: DescribeImagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeImagesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeImagesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImagesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ImageNotFoundException":
    case "com.amazonaws.starport.frontend#ImageNotFoundException":
      response = await deserializeAws_json1_1ImageNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.starport.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeRepositoriesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRepositoriesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeRepositoriesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeRepositoriesResponse(
    data.DescribeRepositoriesResponse,
    context
  );
  const response: DescribeRepositoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeRepositoriesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeRepositoriesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRepositoriesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.starport.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetAuthorizationTokenCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAuthorizationTokenCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetAuthorizationTokenCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetAuthorizationTokenResponse(
    data.GetAuthorizationTokenResponse,
    context
  );
  const response: GetAuthorizationTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetAuthorizationTokenResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetAuthorizationTokenCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAuthorizationTokenCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.starport.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetDownloadUrlForLayerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDownloadUrlForLayerCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetDownloadUrlForLayerCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDownloadUrlForLayerResponse(
    data.GetDownloadUrlForLayerResponse,
    context
  );
  const response: GetDownloadUrlForLayerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDownloadUrlForLayerResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetDownloadUrlForLayerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDownloadUrlForLayerCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LayerInaccessibleException":
    case "com.amazonaws.starport.frontend#LayerInaccessibleException":
      response = await deserializeAws_json1_1LayerInaccessibleExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LayersNotFoundException":
    case "com.amazonaws.starport.frontend#LayersNotFoundException":
      response = await deserializeAws_json1_1LayersNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.starport.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetLifecyclePolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLifecyclePolicyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetLifecyclePolicyCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetLifecyclePolicyResponse(
    data.GetLifecyclePolicyResponse,
    context
  );
  const response: GetLifecyclePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetLifecyclePolicyResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetLifecyclePolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLifecyclePolicyCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LifecyclePolicyNotFoundException":
    case "com.amazonaws.starport.frontend#LifecyclePolicyNotFoundException":
      response = await deserializeAws_json1_1LifecyclePolicyNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.starport.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetLifecyclePolicyPreviewCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLifecyclePolicyPreviewCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetLifecyclePolicyPreviewCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetLifecyclePolicyPreviewResponse(
    data.GetLifecyclePolicyPreviewResponse,
    context
  );
  const response: GetLifecyclePolicyPreviewCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetLifecyclePolicyPreviewResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetLifecyclePolicyPreviewCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLifecyclePolicyPreviewCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LifecyclePolicyPreviewNotFoundException":
    case "com.amazonaws.starport.frontend#LifecyclePolicyPreviewNotFoundException":
      response = await deserializeAws_json1_1LifecyclePolicyPreviewNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.starport.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetRepositoryPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRepositoryPolicyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetRepositoryPolicyCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRepositoryPolicyResponse(
    data.GetRepositoryPolicyResponse,
    context
  );
  const response: GetRepositoryPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRepositoryPolicyResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetRepositoryPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRepositoryPolicyCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RepositoryPolicyNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryPolicyNotFoundException":
      response = await deserializeAws_json1_1RepositoryPolicyNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.starport.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1InitiateLayerUploadCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitiateLayerUploadCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1InitiateLayerUploadCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1InitiateLayerUploadResponse(
    data.InitiateLayerUploadResponse,
    context
  );
  const response: InitiateLayerUploadCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "InitiateLayerUploadResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1InitiateLayerUploadCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitiateLayerUploadCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.starport.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ListImagesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImagesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListImagesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListImagesResponse(
    data.ListImagesResponse,
    context
  );
  const response: ListImagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListImagesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListImagesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImagesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.starport.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ListTagsForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(
    data.ListTagsForResourceResponse,
    context
  );
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.starport.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1PutImageCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutImageCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutImageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutImageResponse(
    data.PutImageResponse,
    context
  );
  const response: PutImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutImageResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1PutImageCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutImageCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ImageAlreadyExistsException":
    case "com.amazonaws.starport.frontend#ImageAlreadyExistsException":
      response = await deserializeAws_json1_1ImageAlreadyExistsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ImageTagAlreadyExistsException":
    case "com.amazonaws.starport.frontend#ImageTagAlreadyExistsException":
      response = await deserializeAws_json1_1ImageTagAlreadyExistsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LayersNotFoundException":
    case "com.amazonaws.starport.frontend#LayersNotFoundException":
      response = await deserializeAws_json1_1LayersNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.starport.frontend#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.starport.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1PutImageScanningConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutImageScanningConfigurationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutImageScanningConfigurationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutImageScanningConfigurationResponse(
    data.PutImageScanningConfigurationResponse,
    context
  );
  const response: PutImageScanningConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutImageScanningConfigurationResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1PutImageScanningConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutImageScanningConfigurationCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.starport.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1PutImageTagMutabilityCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutImageTagMutabilityCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutImageTagMutabilityCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutImageTagMutabilityResponse(
    data.PutImageTagMutabilityResponse,
    context
  );
  const response: PutImageTagMutabilityCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutImageTagMutabilityResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1PutImageTagMutabilityCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutImageTagMutabilityCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.starport.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1PutLifecyclePolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLifecyclePolicyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutLifecyclePolicyCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutLifecyclePolicyResponse(
    data.PutLifecyclePolicyResponse,
    context
  );
  const response: PutLifecyclePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutLifecyclePolicyResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1PutLifecyclePolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLifecyclePolicyCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.starport.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1SetRepositoryPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetRepositoryPolicyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1SetRepositoryPolicyCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SetRepositoryPolicyResponse(
    data.SetRepositoryPolicyResponse,
    context
  );
  const response: SetRepositoryPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SetRepositoryPolicyResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1SetRepositoryPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetRepositoryPolicyCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.starport.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1StartImageScanCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImageScanCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartImageScanCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartImageScanResponse(
    data.StartImageScanResponse,
    context
  );
  const response: StartImageScanCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartImageScanResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StartImageScanCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImageScanCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ImageNotFoundException":
    case "com.amazonaws.starport.frontend#ImageNotFoundException":
      response = await deserializeAws_json1_1ImageNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.starport.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1StartLifecyclePolicyPreviewCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartLifecyclePolicyPreviewCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartLifecyclePolicyPreviewCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartLifecyclePolicyPreviewResponse(
    data.StartLifecyclePolicyPreviewResponse,
    context
  );
  const response: StartLifecyclePolicyPreviewCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartLifecyclePolicyPreviewResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StartLifecyclePolicyPreviewCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartLifecyclePolicyPreviewCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LifecyclePolicyNotFoundException":
    case "com.amazonaws.starport.frontend#LifecyclePolicyNotFoundException":
      response = await deserializeAws_json1_1LifecyclePolicyNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LifecyclePolicyPreviewInProgressException":
    case "com.amazonaws.starport.frontend#LifecyclePolicyPreviewInProgressException":
      response = await deserializeAws_json1_1LifecyclePolicyPreviewInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.starport.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1TagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResponse(
    data.TagResourceResponse,
    context
  );
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidTagParameterException":
    case "com.amazonaws.starport.frontend#InvalidTagParameterException":
      response = await deserializeAws_json1_1InvalidTagParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyTagsException":
    case "com.amazonaws.starport.frontend#TooManyTagsException":
      response = await deserializeAws_json1_1TooManyTagsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.starport.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1UntagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResponse(
    data.UntagResourceResponse,
    context
  );
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidTagParameterException":
    case "com.amazonaws.starport.frontend#InvalidTagParameterException":
      response = await deserializeAws_json1_1InvalidTagParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyTagsException":
    case "com.amazonaws.starport.frontend#TooManyTagsException":
      response = await deserializeAws_json1_1TooManyTagsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.starport.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1UploadLayerPartCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadLayerPartCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UploadLayerPartCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UploadLayerPartResponse(
    data.UploadLayerPartResponse,
    context
  );
  const response: UploadLayerPartCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UploadLayerPartResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UploadLayerPartCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadLayerPartCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidLayerPartException":
    case "com.amazonaws.starport.frontend#InvalidLayerPartException":
      response = await deserializeAws_json1_1InvalidLayerPartExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.starport.frontend#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UploadNotFoundException":
    case "com.amazonaws.starport.frontend#UploadNotFoundException":
      response = await deserializeAws_json1_1UploadNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.starport.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_json1_1EmptyUploadExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<EmptyUploadException> => {
  const deserialized: any = deserializeAws_json1_1EmptyUploadException(
    output.body,
    context
  );
  const contents: EmptyUploadException = {
    __type: "EmptyUploadException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ImageAlreadyExistsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ImageAlreadyExistsException> => {
  const deserialized: any = deserializeAws_json1_1ImageAlreadyExistsException(
    output.body,
    context
  );
  const contents: ImageAlreadyExistsException = {
    __type: "ImageAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ImageNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ImageNotFoundException> => {
  const deserialized: any = deserializeAws_json1_1ImageNotFoundException(
    output.body,
    context
  );
  const contents: ImageNotFoundException = {
    __type: "ImageNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ImageTagAlreadyExistsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ImageTagAlreadyExistsException> => {
  const deserialized: any = deserializeAws_json1_1ImageTagAlreadyExistsException(
    output.body,
    context
  );
  const contents: ImageTagAlreadyExistsException = {
    __type: "ImageTagAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidLayerExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidLayerException> => {
  const deserialized: any = deserializeAws_json1_1InvalidLayerException(
    output.body,
    context
  );
  const contents: InvalidLayerException = {
    __type: "InvalidLayerException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidLayerPartExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidLayerPartException> => {
  const deserialized: any = deserializeAws_json1_1InvalidLayerPartException(
    output.body,
    context
  );
  const contents: InvalidLayerPartException = {
    __type: "InvalidLayerPartException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidParameterExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const deserialized: any = deserializeAws_json1_1InvalidParameterException(
    output.body,
    context
  );
  const contents: InvalidParameterException = {
    __type: "InvalidParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidTagParameterExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidTagParameterException> => {
  const deserialized: any = deserializeAws_json1_1InvalidTagParameterException(
    output.body,
    context
  );
  const contents: InvalidTagParameterException = {
    __type: "InvalidTagParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LayerAlreadyExistsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LayerAlreadyExistsException> => {
  const deserialized: any = deserializeAws_json1_1LayerAlreadyExistsException(
    output.body,
    context
  );
  const contents: LayerAlreadyExistsException = {
    __type: "LayerAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LayerInaccessibleExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LayerInaccessibleException> => {
  const deserialized: any = deserializeAws_json1_1LayerInaccessibleException(
    output.body,
    context
  );
  const contents: LayerInaccessibleException = {
    __type: "LayerInaccessibleException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LayerPartTooSmallExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LayerPartTooSmallException> => {
  const deserialized: any = deserializeAws_json1_1LayerPartTooSmallException(
    output.body,
    context
  );
  const contents: LayerPartTooSmallException = {
    __type: "LayerPartTooSmallException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LayersNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LayersNotFoundException> => {
  const deserialized: any = deserializeAws_json1_1LayersNotFoundException(
    output.body,
    context
  );
  const contents: LayersNotFoundException = {
    __type: "LayersNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LifecyclePolicyNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LifecyclePolicyNotFoundException> => {
  const deserialized: any = deserializeAws_json1_1LifecyclePolicyNotFoundException(
    output.body,
    context
  );
  const contents: LifecyclePolicyNotFoundException = {
    __type: "LifecyclePolicyNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LifecyclePolicyPreviewInProgressExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LifecyclePolicyPreviewInProgressException> => {
  const deserialized: any = deserializeAws_json1_1LifecyclePolicyPreviewInProgressException(
    output.body,
    context
  );
  const contents: LifecyclePolicyPreviewInProgressException = {
    __type: "LifecyclePolicyPreviewInProgressException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LifecyclePolicyPreviewNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LifecyclePolicyPreviewNotFoundException> => {
  const deserialized: any = deserializeAws_json1_1LifecyclePolicyPreviewNotFoundException(
    output.body,
    context
  );
  const contents: LifecyclePolicyPreviewNotFoundException = {
    __type: "LifecyclePolicyPreviewNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const deserialized: any = deserializeAws_json1_1LimitExceededException(
    output.body,
    context
  );
  const contents: LimitExceededException = {
    __type: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1RepositoryAlreadyExistsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<RepositoryAlreadyExistsException> => {
  const deserialized: any = deserializeAws_json1_1RepositoryAlreadyExistsException(
    output.body,
    context
  );
  const contents: RepositoryAlreadyExistsException = {
    __type: "RepositoryAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1RepositoryNotEmptyExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<RepositoryNotEmptyException> => {
  const deserialized: any = deserializeAws_json1_1RepositoryNotEmptyException(
    output.body,
    context
  );
  const contents: RepositoryNotEmptyException = {
    __type: "RepositoryNotEmptyException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1RepositoryNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<RepositoryNotFoundException> => {
  const deserialized: any = deserializeAws_json1_1RepositoryNotFoundException(
    output.body,
    context
  );
  const contents: RepositoryNotFoundException = {
    __type: "RepositoryNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1RepositoryPolicyNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<RepositoryPolicyNotFoundException> => {
  const deserialized: any = deserializeAws_json1_1RepositoryPolicyNotFoundException(
    output.body,
    context
  );
  const contents: RepositoryPolicyNotFoundException = {
    __type: "RepositoryPolicyNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ScanNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ScanNotFoundException> => {
  const deserialized: any = deserializeAws_json1_1ScanNotFoundException(
    output.body,
    context
  );
  const contents: ScanNotFoundException = {
    __type: "ScanNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ServerExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ServerException> => {
  const deserialized: any = deserializeAws_json1_1ServerException(
    output.body,
    context
  );
  const contents: ServerException = {
    __type: "ServerException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TooManyTagsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const deserialized: any = deserializeAws_json1_1TooManyTagsException(
    output.body,
    context
  );
  const contents: TooManyTagsException = {
    __type: "TooManyTagsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1UploadNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<UploadNotFoundException> => {
  const deserialized: any = deserializeAws_json1_1UploadNotFoundException(
    output.body,
    context
  );
  const contents: UploadNotFoundException = {
    __type: "UploadNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1BatchCheckLayerAvailabilityRequest = (
  input: BatchCheckLayerAvailabilityRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.layerDigests !== undefined) {
    bodyParams[
      "layerDigests"
    ] = serializeAws_json1_1BatchedOperationLayerDigestList(
      input.layerDigests,
      context
    );
  }
  if (input.registryId !== undefined) {
    bodyParams["registryId"] = input.registryId;
  }
  if (input.repositoryName !== undefined) {
    bodyParams["repositoryName"] = input.repositoryName;
  }
  return bodyParams;
};

const serializeAws_json1_1BatchDeleteImageRequest = (
  input: BatchDeleteImageRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.imageIds !== undefined) {
    bodyParams["imageIds"] = serializeAws_json1_1ImageIdentifierList(
      input.imageIds,
      context
    );
  }
  if (input.registryId !== undefined) {
    bodyParams["registryId"] = input.registryId;
  }
  if (input.repositoryName !== undefined) {
    bodyParams["repositoryName"] = input.repositoryName;
  }
  return bodyParams;
};

const serializeAws_json1_1BatchGetImageRequest = (
  input: BatchGetImageRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.acceptedMediaTypes !== undefined) {
    bodyParams["acceptedMediaTypes"] = serializeAws_json1_1MediaTypeList(
      input.acceptedMediaTypes,
      context
    );
  }
  if (input.imageIds !== undefined) {
    bodyParams["imageIds"] = serializeAws_json1_1ImageIdentifierList(
      input.imageIds,
      context
    );
  }
  if (input.registryId !== undefined) {
    bodyParams["registryId"] = input.registryId;
  }
  if (input.repositoryName !== undefined) {
    bodyParams["repositoryName"] = input.repositoryName;
  }
  return bodyParams;
};

const serializeAws_json1_1BatchedOperationLayerDigestList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1CompleteLayerUploadRequest = (
  input: CompleteLayerUploadRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.layerDigests !== undefined) {
    bodyParams["layerDigests"] = serializeAws_json1_1LayerDigestList(
      input.layerDigests,
      context
    );
  }
  if (input.registryId !== undefined) {
    bodyParams["registryId"] = input.registryId;
  }
  if (input.repositoryName !== undefined) {
    bodyParams["repositoryName"] = input.repositoryName;
  }
  if (input.uploadId !== undefined) {
    bodyParams["uploadId"] = input.uploadId;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateRepositoryRequest = (
  input: CreateRepositoryRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.imageScanningConfiguration !== undefined) {
    bodyParams[
      "imageScanningConfiguration"
    ] = serializeAws_json1_1ImageScanningConfiguration(
      input.imageScanningConfiguration,
      context
    );
  }
  if (input.imageTagMutability !== undefined) {
    bodyParams["imageTagMutability"] = input.imageTagMutability;
  }
  if (input.repositoryName !== undefined) {
    bodyParams["repositoryName"] = input.repositoryName;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteLifecyclePolicyRequest = (
  input: DeleteLifecyclePolicyRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.registryId !== undefined) {
    bodyParams["registryId"] = input.registryId;
  }
  if (input.repositoryName !== undefined) {
    bodyParams["repositoryName"] = input.repositoryName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteRepositoryPolicyRequest = (
  input: DeleteRepositoryPolicyRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.registryId !== undefined) {
    bodyParams["registryId"] = input.registryId;
  }
  if (input.repositoryName !== undefined) {
    bodyParams["repositoryName"] = input.repositoryName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteRepositoryRequest = (
  input: DeleteRepositoryRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.force !== undefined) {
    bodyParams["force"] = input.force;
  }
  if (input.registryId !== undefined) {
    bodyParams["registryId"] = input.registryId;
  }
  if (input.repositoryName !== undefined) {
    bodyParams["repositoryName"] = input.repositoryName;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeImageScanFindingsRequest = (
  input: DescribeImageScanFindingsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.imageId !== undefined) {
    bodyParams["imageId"] = serializeAws_json1_1ImageIdentifier(
      input.imageId,
      context
    );
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.registryId !== undefined) {
    bodyParams["registryId"] = input.registryId;
  }
  if (input.repositoryName !== undefined) {
    bodyParams["repositoryName"] = input.repositoryName;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeImagesFilter = (
  input: DescribeImagesFilter,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.tagStatus !== undefined) {
    bodyParams["tagStatus"] = input.tagStatus;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeImagesRequest = (
  input: DescribeImagesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.filter !== undefined) {
    bodyParams["filter"] = serializeAws_json1_1DescribeImagesFilter(
      input.filter,
      context
    );
  }
  if (input.imageIds !== undefined) {
    bodyParams["imageIds"] = serializeAws_json1_1ImageIdentifierList(
      input.imageIds,
      context
    );
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.registryId !== undefined) {
    bodyParams["registryId"] = input.registryId;
  }
  if (input.repositoryName !== undefined) {
    bodyParams["repositoryName"] = input.repositoryName;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeRepositoriesRequest = (
  input: DescribeRepositoriesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.registryId !== undefined) {
    bodyParams["registryId"] = input.registryId;
  }
  if (input.repositoryNames !== undefined) {
    bodyParams["repositoryNames"] = serializeAws_json1_1RepositoryNameList(
      input.repositoryNames,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1GetAuthorizationTokenRegistryIdList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1GetAuthorizationTokenRequest = (
  input: GetAuthorizationTokenRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.registryIds !== undefined) {
    bodyParams[
      "registryIds"
    ] = serializeAws_json1_1GetAuthorizationTokenRegistryIdList(
      input.registryIds,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1GetDownloadUrlForLayerRequest = (
  input: GetDownloadUrlForLayerRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.layerDigest !== undefined) {
    bodyParams["layerDigest"] = input.layerDigest;
  }
  if (input.registryId !== undefined) {
    bodyParams["registryId"] = input.registryId;
  }
  if (input.repositoryName !== undefined) {
    bodyParams["repositoryName"] = input.repositoryName;
  }
  return bodyParams;
};

const serializeAws_json1_1GetLifecyclePolicyPreviewRequest = (
  input: GetLifecyclePolicyPreviewRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.filter !== undefined) {
    bodyParams["filter"] = serializeAws_json1_1LifecyclePolicyPreviewFilter(
      input.filter,
      context
    );
  }
  if (input.imageIds !== undefined) {
    bodyParams["imageIds"] = serializeAws_json1_1ImageIdentifierList(
      input.imageIds,
      context
    );
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.registryId !== undefined) {
    bodyParams["registryId"] = input.registryId;
  }
  if (input.repositoryName !== undefined) {
    bodyParams["repositoryName"] = input.repositoryName;
  }
  return bodyParams;
};

const serializeAws_json1_1GetLifecyclePolicyRequest = (
  input: GetLifecyclePolicyRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.registryId !== undefined) {
    bodyParams["registryId"] = input.registryId;
  }
  if (input.repositoryName !== undefined) {
    bodyParams["repositoryName"] = input.repositoryName;
  }
  return bodyParams;
};

const serializeAws_json1_1GetRepositoryPolicyRequest = (
  input: GetRepositoryPolicyRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.registryId !== undefined) {
    bodyParams["registryId"] = input.registryId;
  }
  if (input.repositoryName !== undefined) {
    bodyParams["repositoryName"] = input.repositoryName;
  }
  return bodyParams;
};

const serializeAws_json1_1ImageIdentifier = (
  input: ImageIdentifier,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.imageDigest !== undefined) {
    bodyParams["imageDigest"] = input.imageDigest;
  }
  if (input.imageTag !== undefined) {
    bodyParams["imageTag"] = input.imageTag;
  }
  return bodyParams;
};

const serializeAws_json1_1ImageIdentifierList = (
  input: Array<ImageIdentifier>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1ImageIdentifier(entry, context)
  );
};

const serializeAws_json1_1ImageScanningConfiguration = (
  input: ImageScanningConfiguration,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.scanOnPush !== undefined) {
    bodyParams["scanOnPush"] = input.scanOnPush;
  }
  return bodyParams;
};

const serializeAws_json1_1InitiateLayerUploadRequest = (
  input: InitiateLayerUploadRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.registryId !== undefined) {
    bodyParams["registryId"] = input.registryId;
  }
  if (input.repositoryName !== undefined) {
    bodyParams["repositoryName"] = input.repositoryName;
  }
  return bodyParams;
};

const serializeAws_json1_1LayerDigestList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1LifecyclePolicyPreviewFilter = (
  input: LifecyclePolicyPreviewFilter,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.tagStatus !== undefined) {
    bodyParams["tagStatus"] = input.tagStatus;
  }
  return bodyParams;
};

const serializeAws_json1_1ListImagesFilter = (
  input: ListImagesFilter,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.tagStatus !== undefined) {
    bodyParams["tagStatus"] = input.tagStatus;
  }
  return bodyParams;
};

const serializeAws_json1_1ListImagesRequest = (
  input: ListImagesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.filter !== undefined) {
    bodyParams["filter"] = serializeAws_json1_1ListImagesFilter(
      input.filter,
      context
    );
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.registryId !== undefined) {
    bodyParams["registryId"] = input.registryId;
  }
  if (input.repositoryName !== undefined) {
    bodyParams["repositoryName"] = input.repositoryName;
  }
  return bodyParams;
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.resourceArn !== undefined) {
    bodyParams["resourceArn"] = input.resourceArn;
  }
  return bodyParams;
};

const serializeAws_json1_1MediaTypeList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1PutImageRequest = (
  input: PutImageRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.imageManifest !== undefined) {
    bodyParams["imageManifest"] = input.imageManifest;
  }
  if (input.imageTag !== undefined) {
    bodyParams["imageTag"] = input.imageTag;
  }
  if (input.registryId !== undefined) {
    bodyParams["registryId"] = input.registryId;
  }
  if (input.repositoryName !== undefined) {
    bodyParams["repositoryName"] = input.repositoryName;
  }
  return bodyParams;
};

const serializeAws_json1_1PutImageScanningConfigurationRequest = (
  input: PutImageScanningConfigurationRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.imageScanningConfiguration !== undefined) {
    bodyParams[
      "imageScanningConfiguration"
    ] = serializeAws_json1_1ImageScanningConfiguration(
      input.imageScanningConfiguration,
      context
    );
  }
  if (input.registryId !== undefined) {
    bodyParams["registryId"] = input.registryId;
  }
  if (input.repositoryName !== undefined) {
    bodyParams["repositoryName"] = input.repositoryName;
  }
  return bodyParams;
};

const serializeAws_json1_1PutImageTagMutabilityRequest = (
  input: PutImageTagMutabilityRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.imageTagMutability !== undefined) {
    bodyParams["imageTagMutability"] = input.imageTagMutability;
  }
  if (input.registryId !== undefined) {
    bodyParams["registryId"] = input.registryId;
  }
  if (input.repositoryName !== undefined) {
    bodyParams["repositoryName"] = input.repositoryName;
  }
  return bodyParams;
};

const serializeAws_json1_1PutLifecyclePolicyRequest = (
  input: PutLifecyclePolicyRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.lifecyclePolicyText !== undefined) {
    bodyParams["lifecyclePolicyText"] = input.lifecyclePolicyText;
  }
  if (input.registryId !== undefined) {
    bodyParams["registryId"] = input.registryId;
  }
  if (input.repositoryName !== undefined) {
    bodyParams["repositoryName"] = input.repositoryName;
  }
  return bodyParams;
};

const serializeAws_json1_1RepositoryNameList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1SetRepositoryPolicyRequest = (
  input: SetRepositoryPolicyRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.force !== undefined) {
    bodyParams["force"] = input.force;
  }
  if (input.policyText !== undefined) {
    bodyParams["policyText"] = input.policyText;
  }
  if (input.registryId !== undefined) {
    bodyParams["registryId"] = input.registryId;
  }
  if (input.repositoryName !== undefined) {
    bodyParams["repositoryName"] = input.repositoryName;
  }
  return bodyParams;
};

const serializeAws_json1_1StartImageScanRequest = (
  input: StartImageScanRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.imageId !== undefined) {
    bodyParams["imageId"] = serializeAws_json1_1ImageIdentifier(
      input.imageId,
      context
    );
  }
  if (input.registryId !== undefined) {
    bodyParams["registryId"] = input.registryId;
  }
  if (input.repositoryName !== undefined) {
    bodyParams["repositoryName"] = input.repositoryName;
  }
  return bodyParams;
};

const serializeAws_json1_1StartLifecyclePolicyPreviewRequest = (
  input: StartLifecyclePolicyPreviewRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.lifecyclePolicyText !== undefined) {
    bodyParams["lifecyclePolicyText"] = input.lifecyclePolicyText;
  }
  if (input.registryId !== undefined) {
    bodyParams["registryId"] = input.registryId;
  }
  if (input.repositoryName !== undefined) {
    bodyParams["repositoryName"] = input.repositoryName;
  }
  return bodyParams;
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  let bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_json1_1TagKeyList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1TagList = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => serializeAws_json1_1Tag(entry, context));
};

const serializeAws_json1_1TagResourceRequest = (
  input: TagResourceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.resourceArn !== undefined) {
    bodyParams["resourceArn"] = input.resourceArn;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1UntagResourceRequest = (
  input: UntagResourceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.resourceArn !== undefined) {
    bodyParams["resourceArn"] = input.resourceArn;
  }
  if (input.tagKeys !== undefined) {
    bodyParams["tagKeys"] = serializeAws_json1_1TagKeyList(
      input.tagKeys,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1UploadLayerPartRequest = (
  input: UploadLayerPartRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.layerPartBlob !== undefined) {
    bodyParams["layerPartBlob"] = context.base64Encoder(input.layerPartBlob);
  }
  if (input.partFirstByte !== undefined) {
    bodyParams["partFirstByte"] = input.partFirstByte;
  }
  if (input.partLastByte !== undefined) {
    bodyParams["partLastByte"] = input.partLastByte;
  }
  if (input.registryId !== undefined) {
    bodyParams["registryId"] = input.registryId;
  }
  if (input.repositoryName !== undefined) {
    bodyParams["repositoryName"] = input.repositoryName;
  }
  if (input.uploadId !== undefined) {
    bodyParams["uploadId"] = input.uploadId;
  }
  return bodyParams;
};

const deserializeAws_json1_1Attribute = (
  output: any,
  context: __SerdeContext
): Attribute => {
  let contents: any = {
    __type: "Attribute",
    key: undefined,
    value: undefined
  };
  if (output.key !== undefined) {
    contents.key = output.key;
  }
  if (output.value !== undefined) {
    contents.value = output.value;
  }
  return contents;
};

const deserializeAws_json1_1AttributeList = (
  output: any,
  context: __SerdeContext
): Array<Attribute> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Attribute(entry, context)
  );
};

const deserializeAws_json1_1AuthorizationData = (
  output: any,
  context: __SerdeContext
): AuthorizationData => {
  let contents: any = {
    __type: "AuthorizationData",
    authorizationToken: undefined,
    expiresAt: undefined,
    proxyEndpoint: undefined
  };
  if (output.authorizationToken !== undefined) {
    contents.authorizationToken = output.authorizationToken;
  }
  if (output.expiresAt !== undefined) {
    contents.expiresAt = new Date(
      output.expiresAt % 1 != 0
        ? Math.round(output.expiresAt * 1000)
        : output.expiresAt
    );
  }
  if (output.proxyEndpoint !== undefined) {
    contents.proxyEndpoint = output.proxyEndpoint;
  }
  return contents;
};

const deserializeAws_json1_1AuthorizationDataList = (
  output: any,
  context: __SerdeContext
): Array<AuthorizationData> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1AuthorizationData(entry, context)
  );
};

const deserializeAws_json1_1BatchCheckLayerAvailabilityResponse = (
  output: any,
  context: __SerdeContext
): BatchCheckLayerAvailabilityResponse => {
  let contents: any = {
    __type: "BatchCheckLayerAvailabilityResponse",
    failures: undefined,
    layers: undefined
  };
  if (output.failures !== undefined) {
    contents.failures = deserializeAws_json1_1LayerFailureList(
      output.failures,
      context
    );
  }
  if (output.layers !== undefined) {
    contents.layers = deserializeAws_json1_1LayerList(output.layers, context);
  }
  return contents;
};

const deserializeAws_json1_1BatchDeleteImageResponse = (
  output: any,
  context: __SerdeContext
): BatchDeleteImageResponse => {
  let contents: any = {
    __type: "BatchDeleteImageResponse",
    failures: undefined,
    imageIds: undefined
  };
  if (output.failures !== undefined) {
    contents.failures = deserializeAws_json1_1ImageFailureList(
      output.failures,
      context
    );
  }
  if (output.imageIds !== undefined) {
    contents.imageIds = deserializeAws_json1_1ImageIdentifierList(
      output.imageIds,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1BatchGetImageResponse = (
  output: any,
  context: __SerdeContext
): BatchGetImageResponse => {
  let contents: any = {
    __type: "BatchGetImageResponse",
    failures: undefined,
    images: undefined
  };
  if (output.failures !== undefined) {
    contents.failures = deserializeAws_json1_1ImageFailureList(
      output.failures,
      context
    );
  }
  if (output.images !== undefined) {
    contents.images = deserializeAws_json1_1ImageList(output.images, context);
  }
  return contents;
};

const deserializeAws_json1_1CompleteLayerUploadResponse = (
  output: any,
  context: __SerdeContext
): CompleteLayerUploadResponse => {
  let contents: any = {
    __type: "CompleteLayerUploadResponse",
    layerDigest: undefined,
    registryId: undefined,
    repositoryName: undefined,
    uploadId: undefined
  };
  if (output.layerDigest !== undefined) {
    contents.layerDigest = output.layerDigest;
  }
  if (output.registryId !== undefined) {
    contents.registryId = output.registryId;
  }
  if (output.repositoryName !== undefined) {
    contents.repositoryName = output.repositoryName;
  }
  if (output.uploadId !== undefined) {
    contents.uploadId = output.uploadId;
  }
  return contents;
};

const deserializeAws_json1_1CreateRepositoryResponse = (
  output: any,
  context: __SerdeContext
): CreateRepositoryResponse => {
  let contents: any = {
    __type: "CreateRepositoryResponse",
    repository: undefined
  };
  if (output.repository !== undefined) {
    contents.repository = deserializeAws_json1_1Repository(
      output.repository,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DeleteLifecyclePolicyResponse = (
  output: any,
  context: __SerdeContext
): DeleteLifecyclePolicyResponse => {
  let contents: any = {
    __type: "DeleteLifecyclePolicyResponse",
    lastEvaluatedAt: undefined,
    lifecyclePolicyText: undefined,
    registryId: undefined,
    repositoryName: undefined
  };
  if (output.lastEvaluatedAt !== undefined) {
    contents.lastEvaluatedAt = new Date(
      output.lastEvaluatedAt % 1 != 0
        ? Math.round(output.lastEvaluatedAt * 1000)
        : output.lastEvaluatedAt
    );
  }
  if (output.lifecyclePolicyText !== undefined) {
    contents.lifecyclePolicyText = output.lifecyclePolicyText;
  }
  if (output.registryId !== undefined) {
    contents.registryId = output.registryId;
  }
  if (output.repositoryName !== undefined) {
    contents.repositoryName = output.repositoryName;
  }
  return contents;
};

const deserializeAws_json1_1DeleteRepositoryPolicyResponse = (
  output: any,
  context: __SerdeContext
): DeleteRepositoryPolicyResponse => {
  let contents: any = {
    __type: "DeleteRepositoryPolicyResponse",
    policyText: undefined,
    registryId: undefined,
    repositoryName: undefined
  };
  if (output.policyText !== undefined) {
    contents.policyText = output.policyText;
  }
  if (output.registryId !== undefined) {
    contents.registryId = output.registryId;
  }
  if (output.repositoryName !== undefined) {
    contents.repositoryName = output.repositoryName;
  }
  return contents;
};

const deserializeAws_json1_1DeleteRepositoryResponse = (
  output: any,
  context: __SerdeContext
): DeleteRepositoryResponse => {
  let contents: any = {
    __type: "DeleteRepositoryResponse",
    repository: undefined
  };
  if (output.repository !== undefined) {
    contents.repository = deserializeAws_json1_1Repository(
      output.repository,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeImageScanFindingsResponse = (
  output: any,
  context: __SerdeContext
): DescribeImageScanFindingsResponse => {
  let contents: any = {
    __type: "DescribeImageScanFindingsResponse",
    imageId: undefined,
    imageScanFindings: undefined,
    imageScanStatus: undefined,
    nextToken: undefined,
    registryId: undefined,
    repositoryName: undefined
  };
  if (output.imageId !== undefined) {
    contents.imageId = deserializeAws_json1_1ImageIdentifier(
      output.imageId,
      context
    );
  }
  if (output.imageScanFindings !== undefined) {
    contents.imageScanFindings = deserializeAws_json1_1ImageScanFindings(
      output.imageScanFindings,
      context
    );
  }
  if (output.imageScanStatus !== undefined) {
    contents.imageScanStatus = deserializeAws_json1_1ImageScanStatus(
      output.imageScanStatus,
      context
    );
  }
  if (output.nextToken !== undefined) {
    contents.nextToken = output.nextToken;
  }
  if (output.registryId !== undefined) {
    contents.registryId = output.registryId;
  }
  if (output.repositoryName !== undefined) {
    contents.repositoryName = output.repositoryName;
  }
  return contents;
};

const deserializeAws_json1_1DescribeImagesResponse = (
  output: any,
  context: __SerdeContext
): DescribeImagesResponse => {
  let contents: any = {
    __type: "DescribeImagesResponse",
    imageDetails: undefined,
    nextToken: undefined
  };
  if (output.imageDetails !== undefined) {
    contents.imageDetails = deserializeAws_json1_1ImageDetailList(
      output.imageDetails,
      context
    );
  }
  if (output.nextToken !== undefined) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1DescribeRepositoriesResponse = (
  output: any,
  context: __SerdeContext
): DescribeRepositoriesResponse => {
  let contents: any = {
    __type: "DescribeRepositoriesResponse",
    nextToken: undefined,
    repositories: undefined
  };
  if (output.nextToken !== undefined) {
    contents.nextToken = output.nextToken;
  }
  if (output.repositories !== undefined) {
    contents.repositories = deserializeAws_json1_1RepositoryList(
      output.repositories,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1EmptyUploadException = (
  output: any,
  context: __SerdeContext
): EmptyUploadException => {
  let contents: any = {
    __type: "EmptyUploadException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1FindingSeverityCounts = (
  output: any,
  context: __SerdeContext
): { [key: string]: number } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1GetAuthorizationTokenResponse = (
  output: any,
  context: __SerdeContext
): GetAuthorizationTokenResponse => {
  let contents: any = {
    __type: "GetAuthorizationTokenResponse",
    authorizationData: undefined
  };
  if (output.authorizationData !== undefined) {
    contents.authorizationData = deserializeAws_json1_1AuthorizationDataList(
      output.authorizationData,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetDownloadUrlForLayerResponse = (
  output: any,
  context: __SerdeContext
): GetDownloadUrlForLayerResponse => {
  let contents: any = {
    __type: "GetDownloadUrlForLayerResponse",
    downloadUrl: undefined,
    layerDigest: undefined
  };
  if (output.downloadUrl !== undefined) {
    contents.downloadUrl = output.downloadUrl;
  }
  if (output.layerDigest !== undefined) {
    contents.layerDigest = output.layerDigest;
  }
  return contents;
};

const deserializeAws_json1_1GetLifecyclePolicyPreviewResponse = (
  output: any,
  context: __SerdeContext
): GetLifecyclePolicyPreviewResponse => {
  let contents: any = {
    __type: "GetLifecyclePolicyPreviewResponse",
    lifecyclePolicyText: undefined,
    nextToken: undefined,
    previewResults: undefined,
    registryId: undefined,
    repositoryName: undefined,
    status: undefined,
    summary: undefined
  };
  if (output.lifecyclePolicyText !== undefined) {
    contents.lifecyclePolicyText = output.lifecyclePolicyText;
  }
  if (output.nextToken !== undefined) {
    contents.nextToken = output.nextToken;
  }
  if (output.previewResults !== undefined) {
    contents.previewResults = deserializeAws_json1_1LifecyclePolicyPreviewResultList(
      output.previewResults,
      context
    );
  }
  if (output.registryId !== undefined) {
    contents.registryId = output.registryId;
  }
  if (output.repositoryName !== undefined) {
    contents.repositoryName = output.repositoryName;
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  if (output.summary !== undefined) {
    contents.summary = deserializeAws_json1_1LifecyclePolicyPreviewSummary(
      output.summary,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetLifecyclePolicyResponse = (
  output: any,
  context: __SerdeContext
): GetLifecyclePolicyResponse => {
  let contents: any = {
    __type: "GetLifecyclePolicyResponse",
    lastEvaluatedAt: undefined,
    lifecyclePolicyText: undefined,
    registryId: undefined,
    repositoryName: undefined
  };
  if (output.lastEvaluatedAt !== undefined) {
    contents.lastEvaluatedAt = new Date(
      output.lastEvaluatedAt % 1 != 0
        ? Math.round(output.lastEvaluatedAt * 1000)
        : output.lastEvaluatedAt
    );
  }
  if (output.lifecyclePolicyText !== undefined) {
    contents.lifecyclePolicyText = output.lifecyclePolicyText;
  }
  if (output.registryId !== undefined) {
    contents.registryId = output.registryId;
  }
  if (output.repositoryName !== undefined) {
    contents.repositoryName = output.repositoryName;
  }
  return contents;
};

const deserializeAws_json1_1GetRepositoryPolicyResponse = (
  output: any,
  context: __SerdeContext
): GetRepositoryPolicyResponse => {
  let contents: any = {
    __type: "GetRepositoryPolicyResponse",
    policyText: undefined,
    registryId: undefined,
    repositoryName: undefined
  };
  if (output.policyText !== undefined) {
    contents.policyText = output.policyText;
  }
  if (output.registryId !== undefined) {
    contents.registryId = output.registryId;
  }
  if (output.repositoryName !== undefined) {
    contents.repositoryName = output.repositoryName;
  }
  return contents;
};

const deserializeAws_json1_1Image = (
  output: any,
  context: __SerdeContext
): Image => {
  let contents: any = {
    __type: "Image",
    imageId: undefined,
    imageManifest: undefined,
    registryId: undefined,
    repositoryName: undefined
  };
  if (output.imageId !== undefined) {
    contents.imageId = deserializeAws_json1_1ImageIdentifier(
      output.imageId,
      context
    );
  }
  if (output.imageManifest !== undefined) {
    contents.imageManifest = output.imageManifest;
  }
  if (output.registryId !== undefined) {
    contents.registryId = output.registryId;
  }
  if (output.repositoryName !== undefined) {
    contents.repositoryName = output.repositoryName;
  }
  return contents;
};

const deserializeAws_json1_1ImageAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ImageAlreadyExistsException => {
  let contents: any = {
    __type: "ImageAlreadyExistsException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ImageDetail = (
  output: any,
  context: __SerdeContext
): ImageDetail => {
  let contents: any = {
    __type: "ImageDetail",
    imageDigest: undefined,
    imagePushedAt: undefined,
    imageScanFindingsSummary: undefined,
    imageScanStatus: undefined,
    imageSizeInBytes: undefined,
    imageTags: undefined,
    registryId: undefined,
    repositoryName: undefined
  };
  if (output.imageDigest !== undefined) {
    contents.imageDigest = output.imageDigest;
  }
  if (output.imagePushedAt !== undefined) {
    contents.imagePushedAt = new Date(
      output.imagePushedAt % 1 != 0
        ? Math.round(output.imagePushedAt * 1000)
        : output.imagePushedAt
    );
  }
  if (output.imageScanFindingsSummary !== undefined) {
    contents.imageScanFindingsSummary = deserializeAws_json1_1ImageScanFindingsSummary(
      output.imageScanFindingsSummary,
      context
    );
  }
  if (output.imageScanStatus !== undefined) {
    contents.imageScanStatus = deserializeAws_json1_1ImageScanStatus(
      output.imageScanStatus,
      context
    );
  }
  if (output.imageSizeInBytes !== undefined) {
    contents.imageSizeInBytes = output.imageSizeInBytes;
  }
  if (output.imageTags !== undefined) {
    contents.imageTags = deserializeAws_json1_1ImageTagList(
      output.imageTags,
      context
    );
  }
  if (output.registryId !== undefined) {
    contents.registryId = output.registryId;
  }
  if (output.repositoryName !== undefined) {
    contents.repositoryName = output.repositoryName;
  }
  return contents;
};

const deserializeAws_json1_1ImageDetailList = (
  output: any,
  context: __SerdeContext
): Array<ImageDetail> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ImageDetail(entry, context)
  );
};

const deserializeAws_json1_1ImageFailure = (
  output: any,
  context: __SerdeContext
): ImageFailure => {
  let contents: any = {
    __type: "ImageFailure",
    failureCode: undefined,
    failureReason: undefined,
    imageId: undefined
  };
  if (output.failureCode !== undefined) {
    contents.failureCode = output.failureCode;
  }
  if (output.failureReason !== undefined) {
    contents.failureReason = output.failureReason;
  }
  if (output.imageId !== undefined) {
    contents.imageId = deserializeAws_json1_1ImageIdentifier(
      output.imageId,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ImageFailureList = (
  output: any,
  context: __SerdeContext
): Array<ImageFailure> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ImageFailure(entry, context)
  );
};

const deserializeAws_json1_1ImageIdentifier = (
  output: any,
  context: __SerdeContext
): ImageIdentifier => {
  let contents: any = {
    __type: "ImageIdentifier",
    imageDigest: undefined,
    imageTag: undefined
  };
  if (output.imageDigest !== undefined) {
    contents.imageDigest = output.imageDigest;
  }
  if (output.imageTag !== undefined) {
    contents.imageTag = output.imageTag;
  }
  return contents;
};

const deserializeAws_json1_1ImageIdentifierList = (
  output: any,
  context: __SerdeContext
): Array<ImageIdentifier> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ImageIdentifier(entry, context)
  );
};

const deserializeAws_json1_1ImageList = (
  output: any,
  context: __SerdeContext
): Array<Image> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Image(entry, context)
  );
};

const deserializeAws_json1_1ImageNotFoundException = (
  output: any,
  context: __SerdeContext
): ImageNotFoundException => {
  let contents: any = {
    __type: "ImageNotFoundException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ImageScanFinding = (
  output: any,
  context: __SerdeContext
): ImageScanFinding => {
  let contents: any = {
    __type: "ImageScanFinding",
    attributes: undefined,
    description: undefined,
    name: undefined,
    severity: undefined,
    uri: undefined
  };
  if (output.attributes !== undefined) {
    contents.attributes = deserializeAws_json1_1AttributeList(
      output.attributes,
      context
    );
  }
  if (output.description !== undefined) {
    contents.description = output.description;
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.severity !== undefined) {
    contents.severity = output.severity;
  }
  if (output.uri !== undefined) {
    contents.uri = output.uri;
  }
  return contents;
};

const deserializeAws_json1_1ImageScanFindingList = (
  output: any,
  context: __SerdeContext
): Array<ImageScanFinding> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ImageScanFinding(entry, context)
  );
};

const deserializeAws_json1_1ImageScanFindings = (
  output: any,
  context: __SerdeContext
): ImageScanFindings => {
  let contents: any = {
    __type: "ImageScanFindings",
    findingSeverityCounts: undefined,
    findings: undefined,
    imageScanCompletedAt: undefined,
    vulnerabilitySourceUpdatedAt: undefined
  };
  if (output.findingSeverityCounts !== undefined) {
    contents.findingSeverityCounts = deserializeAws_json1_1FindingSeverityCounts(
      output.findingSeverityCounts,
      context
    );
  }
  if (output.findings !== undefined) {
    contents.findings = deserializeAws_json1_1ImageScanFindingList(
      output.findings,
      context
    );
  }
  if (output.imageScanCompletedAt !== undefined) {
    contents.imageScanCompletedAt = new Date(
      output.imageScanCompletedAt % 1 != 0
        ? Math.round(output.imageScanCompletedAt * 1000)
        : output.imageScanCompletedAt
    );
  }
  if (output.vulnerabilitySourceUpdatedAt !== undefined) {
    contents.vulnerabilitySourceUpdatedAt = new Date(
      output.vulnerabilitySourceUpdatedAt % 1 != 0
        ? Math.round(output.vulnerabilitySourceUpdatedAt * 1000)
        : output.vulnerabilitySourceUpdatedAt
    );
  }
  return contents;
};

const deserializeAws_json1_1ImageScanFindingsSummary = (
  output: any,
  context: __SerdeContext
): ImageScanFindingsSummary => {
  let contents: any = {
    __type: "ImageScanFindingsSummary",
    findingSeverityCounts: undefined,
    imageScanCompletedAt: undefined,
    vulnerabilitySourceUpdatedAt: undefined
  };
  if (output.findingSeverityCounts !== undefined) {
    contents.findingSeverityCounts = deserializeAws_json1_1FindingSeverityCounts(
      output.findingSeverityCounts,
      context
    );
  }
  if (output.imageScanCompletedAt !== undefined) {
    contents.imageScanCompletedAt = new Date(
      output.imageScanCompletedAt % 1 != 0
        ? Math.round(output.imageScanCompletedAt * 1000)
        : output.imageScanCompletedAt
    );
  }
  if (output.vulnerabilitySourceUpdatedAt !== undefined) {
    contents.vulnerabilitySourceUpdatedAt = new Date(
      output.vulnerabilitySourceUpdatedAt % 1 != 0
        ? Math.round(output.vulnerabilitySourceUpdatedAt * 1000)
        : output.vulnerabilitySourceUpdatedAt
    );
  }
  return contents;
};

const deserializeAws_json1_1ImageScanStatus = (
  output: any,
  context: __SerdeContext
): ImageScanStatus => {
  let contents: any = {
    __type: "ImageScanStatus",
    description: undefined,
    status: undefined
  };
  if (output.description !== undefined) {
    contents.description = output.description;
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_json1_1ImageScanningConfiguration = (
  output: any,
  context: __SerdeContext
): ImageScanningConfiguration => {
  let contents: any = {
    __type: "ImageScanningConfiguration",
    scanOnPush: undefined
  };
  if (output.scanOnPush !== undefined) {
    contents.scanOnPush = output.scanOnPush;
  }
  return contents;
};

const deserializeAws_json1_1ImageTagAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ImageTagAlreadyExistsException => {
  let contents: any = {
    __type: "ImageTagAlreadyExistsException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ImageTagList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1InitiateLayerUploadResponse = (
  output: any,
  context: __SerdeContext
): InitiateLayerUploadResponse => {
  let contents: any = {
    __type: "InitiateLayerUploadResponse",
    partSize: undefined,
    uploadId: undefined
  };
  if (output.partSize !== undefined) {
    contents.partSize = output.partSize;
  }
  if (output.uploadId !== undefined) {
    contents.uploadId = output.uploadId;
  }
  return contents;
};

const deserializeAws_json1_1InvalidLayerException = (
  output: any,
  context: __SerdeContext
): InvalidLayerException => {
  let contents: any = {
    __type: "InvalidLayerException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidLayerPartException = (
  output: any,
  context: __SerdeContext
): InvalidLayerPartException => {
  let contents: any = {
    __type: "InvalidLayerPartException",
    lastValidByteReceived: undefined,
    message: undefined,
    registryId: undefined,
    repositoryName: undefined,
    uploadId: undefined
  };
  if (output.lastValidByteReceived !== undefined) {
    contents.lastValidByteReceived = output.lastValidByteReceived;
  }
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  if (output.registryId !== undefined) {
    contents.registryId = output.registryId;
  }
  if (output.repositoryName !== undefined) {
    contents.repositoryName = output.repositoryName;
  }
  if (output.uploadId !== undefined) {
    contents.uploadId = output.uploadId;
  }
  return contents;
};

const deserializeAws_json1_1InvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  let contents: any = {
    __type: "InvalidParameterException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidTagParameterException = (
  output: any,
  context: __SerdeContext
): InvalidTagParameterException => {
  let contents: any = {
    __type: "InvalidTagParameterException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1Layer = (
  output: any,
  context: __SerdeContext
): Layer => {
  let contents: any = {
    __type: "Layer",
    layerAvailability: undefined,
    layerDigest: undefined,
    layerSize: undefined,
    mediaType: undefined
  };
  if (output.layerAvailability !== undefined) {
    contents.layerAvailability = output.layerAvailability;
  }
  if (output.layerDigest !== undefined) {
    contents.layerDigest = output.layerDigest;
  }
  if (output.layerSize !== undefined) {
    contents.layerSize = output.layerSize;
  }
  if (output.mediaType !== undefined) {
    contents.mediaType = output.mediaType;
  }
  return contents;
};

const deserializeAws_json1_1LayerAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): LayerAlreadyExistsException => {
  let contents: any = {
    __type: "LayerAlreadyExistsException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1LayerFailure = (
  output: any,
  context: __SerdeContext
): LayerFailure => {
  let contents: any = {
    __type: "LayerFailure",
    failureCode: undefined,
    failureReason: undefined,
    layerDigest: undefined
  };
  if (output.failureCode !== undefined) {
    contents.failureCode = output.failureCode;
  }
  if (output.failureReason !== undefined) {
    contents.failureReason = output.failureReason;
  }
  if (output.layerDigest !== undefined) {
    contents.layerDigest = output.layerDigest;
  }
  return contents;
};

const deserializeAws_json1_1LayerFailureList = (
  output: any,
  context: __SerdeContext
): Array<LayerFailure> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1LayerFailure(entry, context)
  );
};

const deserializeAws_json1_1LayerInaccessibleException = (
  output: any,
  context: __SerdeContext
): LayerInaccessibleException => {
  let contents: any = {
    __type: "LayerInaccessibleException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1LayerList = (
  output: any,
  context: __SerdeContext
): Array<Layer> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Layer(entry, context)
  );
};

const deserializeAws_json1_1LayerPartTooSmallException = (
  output: any,
  context: __SerdeContext
): LayerPartTooSmallException => {
  let contents: any = {
    __type: "LayerPartTooSmallException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1LayersNotFoundException = (
  output: any,
  context: __SerdeContext
): LayersNotFoundException => {
  let contents: any = {
    __type: "LayersNotFoundException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1LifecyclePolicyNotFoundException = (
  output: any,
  context: __SerdeContext
): LifecyclePolicyNotFoundException => {
  let contents: any = {
    __type: "LifecyclePolicyNotFoundException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1LifecyclePolicyPreviewInProgressException = (
  output: any,
  context: __SerdeContext
): LifecyclePolicyPreviewInProgressException => {
  let contents: any = {
    __type: "LifecyclePolicyPreviewInProgressException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1LifecyclePolicyPreviewNotFoundException = (
  output: any,
  context: __SerdeContext
): LifecyclePolicyPreviewNotFoundException => {
  let contents: any = {
    __type: "LifecyclePolicyPreviewNotFoundException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1LifecyclePolicyPreviewResult = (
  output: any,
  context: __SerdeContext
): LifecyclePolicyPreviewResult => {
  let contents: any = {
    __type: "LifecyclePolicyPreviewResult",
    action: undefined,
    appliedRulePriority: undefined,
    imageDigest: undefined,
    imagePushedAt: undefined,
    imageTags: undefined
  };
  if (output.action !== undefined) {
    contents.action = deserializeAws_json1_1LifecyclePolicyRuleAction(
      output.action,
      context
    );
  }
  if (output.appliedRulePriority !== undefined) {
    contents.appliedRulePriority = output.appliedRulePriority;
  }
  if (output.imageDigest !== undefined) {
    contents.imageDigest = output.imageDigest;
  }
  if (output.imagePushedAt !== undefined) {
    contents.imagePushedAt = new Date(
      output.imagePushedAt % 1 != 0
        ? Math.round(output.imagePushedAt * 1000)
        : output.imagePushedAt
    );
  }
  if (output.imageTags !== undefined) {
    contents.imageTags = deserializeAws_json1_1ImageTagList(
      output.imageTags,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1LifecyclePolicyPreviewResultList = (
  output: any,
  context: __SerdeContext
): Array<LifecyclePolicyPreviewResult> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1LifecyclePolicyPreviewResult(entry, context)
  );
};

const deserializeAws_json1_1LifecyclePolicyPreviewSummary = (
  output: any,
  context: __SerdeContext
): LifecyclePolicyPreviewSummary => {
  let contents: any = {
    __type: "LifecyclePolicyPreviewSummary",
    expiringImageTotalCount: undefined
  };
  if (output.expiringImageTotalCount !== undefined) {
    contents.expiringImageTotalCount = output.expiringImageTotalCount;
  }
  return contents;
};

const deserializeAws_json1_1LifecyclePolicyRuleAction = (
  output: any,
  context: __SerdeContext
): LifecyclePolicyRuleAction => {
  let contents: any = {
    __type: "LifecyclePolicyRuleAction",
    type: undefined
  };
  if (output.type !== undefined) {
    contents.type = output.type;
  }
  return contents;
};

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  let contents: any = {
    __type: "LimitExceededException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ListImagesResponse = (
  output: any,
  context: __SerdeContext
): ListImagesResponse => {
  let contents: any = {
    __type: "ListImagesResponse",
    imageIds: undefined,
    nextToken: undefined
  };
  if (output.imageIds !== undefined) {
    contents.imageIds = deserializeAws_json1_1ImageIdentifierList(
      output.imageIds,
      context
    );
  }
  if (output.nextToken !== undefined) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  let contents: any = {
    __type: "ListTagsForResourceResponse",
    tags: undefined
  };
  if (output.tags !== undefined) {
    contents.tags = deserializeAws_json1_1TagList(output.tags, context);
  }
  return contents;
};

const deserializeAws_json1_1PutImageResponse = (
  output: any,
  context: __SerdeContext
): PutImageResponse => {
  let contents: any = {
    __type: "PutImageResponse",
    image: undefined
  };
  if (output.image !== undefined) {
    contents.image = deserializeAws_json1_1Image(output.image, context);
  }
  return contents;
};

const deserializeAws_json1_1PutImageScanningConfigurationResponse = (
  output: any,
  context: __SerdeContext
): PutImageScanningConfigurationResponse => {
  let contents: any = {
    __type: "PutImageScanningConfigurationResponse",
    imageScanningConfiguration: undefined,
    registryId: undefined,
    repositoryName: undefined
  };
  if (output.imageScanningConfiguration !== undefined) {
    contents.imageScanningConfiguration = deserializeAws_json1_1ImageScanningConfiguration(
      output.imageScanningConfiguration,
      context
    );
  }
  if (output.registryId !== undefined) {
    contents.registryId = output.registryId;
  }
  if (output.repositoryName !== undefined) {
    contents.repositoryName = output.repositoryName;
  }
  return contents;
};

const deserializeAws_json1_1PutImageTagMutabilityResponse = (
  output: any,
  context: __SerdeContext
): PutImageTagMutabilityResponse => {
  let contents: any = {
    __type: "PutImageTagMutabilityResponse",
    imageTagMutability: undefined,
    registryId: undefined,
    repositoryName: undefined
  };
  if (output.imageTagMutability !== undefined) {
    contents.imageTagMutability = output.imageTagMutability;
  }
  if (output.registryId !== undefined) {
    contents.registryId = output.registryId;
  }
  if (output.repositoryName !== undefined) {
    contents.repositoryName = output.repositoryName;
  }
  return contents;
};

const deserializeAws_json1_1PutLifecyclePolicyResponse = (
  output: any,
  context: __SerdeContext
): PutLifecyclePolicyResponse => {
  let contents: any = {
    __type: "PutLifecyclePolicyResponse",
    lifecyclePolicyText: undefined,
    registryId: undefined,
    repositoryName: undefined
  };
  if (output.lifecyclePolicyText !== undefined) {
    contents.lifecyclePolicyText = output.lifecyclePolicyText;
  }
  if (output.registryId !== undefined) {
    contents.registryId = output.registryId;
  }
  if (output.repositoryName !== undefined) {
    contents.repositoryName = output.repositoryName;
  }
  return contents;
};

const deserializeAws_json1_1Repository = (
  output: any,
  context: __SerdeContext
): Repository => {
  let contents: any = {
    __type: "Repository",
    createdAt: undefined,
    imageScanningConfiguration: undefined,
    imageTagMutability: undefined,
    registryId: undefined,
    repositoryArn: undefined,
    repositoryName: undefined,
    repositoryUri: undefined
  };
  if (output.createdAt !== undefined) {
    contents.createdAt = new Date(
      output.createdAt % 1 != 0
        ? Math.round(output.createdAt * 1000)
        : output.createdAt
    );
  }
  if (output.imageScanningConfiguration !== undefined) {
    contents.imageScanningConfiguration = deserializeAws_json1_1ImageScanningConfiguration(
      output.imageScanningConfiguration,
      context
    );
  }
  if (output.imageTagMutability !== undefined) {
    contents.imageTagMutability = output.imageTagMutability;
  }
  if (output.registryId !== undefined) {
    contents.registryId = output.registryId;
  }
  if (output.repositoryArn !== undefined) {
    contents.repositoryArn = output.repositoryArn;
  }
  if (output.repositoryName !== undefined) {
    contents.repositoryName = output.repositoryName;
  }
  if (output.repositoryUri !== undefined) {
    contents.repositoryUri = output.repositoryUri;
  }
  return contents;
};

const deserializeAws_json1_1RepositoryAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): RepositoryAlreadyExistsException => {
  let contents: any = {
    __type: "RepositoryAlreadyExistsException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1RepositoryList = (
  output: any,
  context: __SerdeContext
): Array<Repository> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Repository(entry, context)
  );
};

const deserializeAws_json1_1RepositoryNotEmptyException = (
  output: any,
  context: __SerdeContext
): RepositoryNotEmptyException => {
  let contents: any = {
    __type: "RepositoryNotEmptyException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1RepositoryNotFoundException = (
  output: any,
  context: __SerdeContext
): RepositoryNotFoundException => {
  let contents: any = {
    __type: "RepositoryNotFoundException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1RepositoryPolicyNotFoundException = (
  output: any,
  context: __SerdeContext
): RepositoryPolicyNotFoundException => {
  let contents: any = {
    __type: "RepositoryPolicyNotFoundException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ScanNotFoundException = (
  output: any,
  context: __SerdeContext
): ScanNotFoundException => {
  let contents: any = {
    __type: "ScanNotFoundException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ServerException = (
  output: any,
  context: __SerdeContext
): ServerException => {
  let contents: any = {
    __type: "ServerException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1SetRepositoryPolicyResponse = (
  output: any,
  context: __SerdeContext
): SetRepositoryPolicyResponse => {
  let contents: any = {
    __type: "SetRepositoryPolicyResponse",
    policyText: undefined,
    registryId: undefined,
    repositoryName: undefined
  };
  if (output.policyText !== undefined) {
    contents.policyText = output.policyText;
  }
  if (output.registryId !== undefined) {
    contents.registryId = output.registryId;
  }
  if (output.repositoryName !== undefined) {
    contents.repositoryName = output.repositoryName;
  }
  return contents;
};

const deserializeAws_json1_1StartImageScanResponse = (
  output: any,
  context: __SerdeContext
): StartImageScanResponse => {
  let contents: any = {
    __type: "StartImageScanResponse",
    imageId: undefined,
    imageScanStatus: undefined,
    registryId: undefined,
    repositoryName: undefined
  };
  if (output.imageId !== undefined) {
    contents.imageId = deserializeAws_json1_1ImageIdentifier(
      output.imageId,
      context
    );
  }
  if (output.imageScanStatus !== undefined) {
    contents.imageScanStatus = deserializeAws_json1_1ImageScanStatus(
      output.imageScanStatus,
      context
    );
  }
  if (output.registryId !== undefined) {
    contents.registryId = output.registryId;
  }
  if (output.repositoryName !== undefined) {
    contents.repositoryName = output.repositoryName;
  }
  return contents;
};

const deserializeAws_json1_1StartLifecyclePolicyPreviewResponse = (
  output: any,
  context: __SerdeContext
): StartLifecyclePolicyPreviewResponse => {
  let contents: any = {
    __type: "StartLifecyclePolicyPreviewResponse",
    lifecyclePolicyText: undefined,
    registryId: undefined,
    repositoryName: undefined,
    status: undefined
  };
  if (output.lifecyclePolicyText !== undefined) {
    contents.lifecyclePolicyText = output.lifecyclePolicyText;
  }
  if (output.registryId !== undefined) {
    contents.registryId = output.registryId;
  }
  if (output.repositoryName !== undefined) {
    contents.repositoryName = output.repositoryName;
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_json1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  let contents: any = {
    __type: "Tag",
    Key: undefined,
    Value: undefined
  };
  if (output.Key !== undefined) {
    contents.Key = output.Key;
  }
  if (output.Value !== undefined) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1TagList = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1TagResourceResponse = (
  output: any,
  context: __SerdeContext
): TagResourceResponse => {
  let contents: any = {
    __type: "TagResourceResponse"
  };
  return contents;
};

const deserializeAws_json1_1TooManyTagsException = (
  output: any,
  context: __SerdeContext
): TooManyTagsException => {
  let contents: any = {
    __type: "TooManyTagsException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1UntagResourceResponse = (
  output: any,
  context: __SerdeContext
): UntagResourceResponse => {
  let contents: any = {
    __type: "UntagResourceResponse"
  };
  return contents;
};

const deserializeAws_json1_1UploadLayerPartResponse = (
  output: any,
  context: __SerdeContext
): UploadLayerPartResponse => {
  let contents: any = {
    __type: "UploadLayerPartResponse",
    lastByteReceived: undefined,
    registryId: undefined,
    repositoryName: undefined,
    uploadId: undefined
  };
  if (output.lastByteReceived !== undefined) {
    contents.lastByteReceived = output.lastByteReceived;
  }
  if (output.registryId !== undefined) {
    contents.registryId = output.registryId;
  }
  if (output.repositoryName !== undefined) {
    contents.repositoryName = output.repositoryName;
  }
  if (output.uploadId !== undefined) {
    contents.uploadId = output.uploadId;
  }
  return contents;
};

const deserializeAws_json1_1UploadNotFoundException = (
  output: any,
  context: __SerdeContext
): UploadNotFoundException => {
  let contents: any = {
    __type: "UploadNotFoundException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return context.streamCollector(streamBody).then((body: any) => {
    const encoded = context.utf8Encoder(body);
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};