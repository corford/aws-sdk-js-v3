// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import { DescribeControlPanelCommand, DescribeControlPanelCommandInput } from "../commands/DescribeControlPanelCommand";
import { Route53RecoveryControlConfigClient } from "../Route53RecoveryControlConfigClient";

const checkState = async (
  client: Route53RecoveryControlConfigClient,
  input: DescribeControlPanelCommandInput
): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeControlPanelCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.ControlPanel.Status;
      };
      if (returnComparator() === "PENDING_DELETION") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "ResourceNotFoundException") {
      return { state: WaiterState.SUCCESS, reason };
    }
    if (exception.name && exception.name == "InternalServerException") {
      return { state: WaiterState.RETRY, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a control panel is deleted
 *  @deprecated Use waitUntilControlPanelDeleted instead. waitForControlPanelDeleted does not throw error in non-success cases.
 */
export const waitForControlPanelDeleted = async (
  params: WaiterConfiguration<Route53RecoveryControlConfigClient>,
  input: DescribeControlPanelCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a control panel is deleted
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeControlPanelCommand for polling.
 */
export const waitUntilControlPanelDeleted = async (
  params: WaiterConfiguration<Route53RecoveryControlConfigClient>,
  input: DescribeControlPanelCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
