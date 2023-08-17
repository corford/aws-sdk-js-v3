// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ARCZonalShiftClient } from "../ARCZonalShiftClient";
import {
  ListZonalShiftsCommand,
  ListZonalShiftsCommandInput,
  ListZonalShiftsCommandOutput,
} from "../commands/ListZonalShiftsCommand";
import { ARCZonalShiftPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ARCZonalShiftClient,
  input: ListZonalShiftsCommandInput,
  ...args: any
): Promise<ListZonalShiftsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListZonalShiftsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListZonalShifts(
  config: ARCZonalShiftPaginationConfiguration,
  input: ListZonalShiftsCommandInput,
  ...additionalArguments: any
): Paginator<ListZonalShiftsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListZonalShiftsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof ARCZonalShiftClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ARCZonalShift | ARCZonalShiftClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
