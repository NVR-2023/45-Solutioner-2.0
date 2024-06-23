"use server";
import { UserAddressType } from "@/types/general-types";
import { validateUserId } from "../user-db-functions-and-queires";
import generateResponseObject from "@/utils/functions/generic-fetch/generate-response-object";
import { fetchNumberOfExistingUSerAddresses } from "../fetch-number-of-existing-user-addresses";
import { checkUserAddressObjectCompleteness } from "../user-db-functions-and-queires";

export async function createUserAddress(userAddress: UserAddressType) {
  const { userId } = userAddress;
  const isUserIdValid = await validateUserId(userId);
  if (!isUserIdValid) {
    return generateResponseObject({ status: 404 });
  }

  const isUserAddressComplete = checkUserAddressObjectCompleteness(userAddress);
  if (!isUserAddressComplete) {
    return generateResponseObject({ status: 400 });
  }

  const currentNUmberOfUSerAddresses =
    await fetchNumberOfExistingUSerAddresses(userId);
  if (currentNUmberOfUSerAddresses === 2) {
    return generateResponseObject({ status: 400 });
  }

  try {
  } catch (error) {
  } finally {
  }
}
