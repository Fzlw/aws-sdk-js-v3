import { Paginator } from "@aws-sdk/types";

import {
  ListCallAnalyticsJobsCommand,
  ListCallAnalyticsJobsCommandInput,
  ListCallAnalyticsJobsCommandOutput,
} from "../commands/ListCallAnalyticsJobsCommand";
import { Transcribe } from "../Transcribe";
import { TranscribeClient } from "../TranscribeClient";
import { TranscribePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: TranscribeClient,
  input: ListCallAnalyticsJobsCommandInput,
  ...args: any
): Promise<ListCallAnalyticsJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCallAnalyticsJobsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Transcribe,
  input: ListCallAnalyticsJobsCommandInput,
  ...args: any
): Promise<ListCallAnalyticsJobsCommandOutput> => {
  // @ts-ignore
  return await client.listCallAnalyticsJobs(input, ...args);
};
export async function* paginateListCallAnalyticsJobs(
  config: TranscribePaginationConfiguration,
  input: ListCallAnalyticsJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListCallAnalyticsJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCallAnalyticsJobsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Transcribe) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof TranscribeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Transcribe | TranscribeClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
