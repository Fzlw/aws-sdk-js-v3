import * as __aws_types from '@aws/types';

/**
 * GetBucketRequestPaymentOutput shape
 */
export interface GetBucketRequestPaymentOutput {
    /**
     * Specifies who pays for the download and request fees.
     */
    Payer?: 'Requester'|'BucketOwner'|string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}