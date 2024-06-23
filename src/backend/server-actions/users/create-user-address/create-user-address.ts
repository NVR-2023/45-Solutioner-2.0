"use server";
import { UserAddressType } from "@/types/general-types";
import { validateUserId } from "../validate-user-id";
import generateResponseObject from "@/utils/functions/generic-fetch/generate-response-object";
import { fetchNumberOfExistingUSerAddresses } from "./sub-functions/fetch-number-of-existing-user-addresses";
import { checkUserAddressObjectCompleteness } from "./sub-functions/check-user-address-completness";

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
