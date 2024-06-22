"use server";
import { UserAddressType } from "@/types/general-types";
import { validateUserId } from "@/backend/database/drizzle/functions-and-queries/users/user-db-functions-and-queires";
import generateResponseObject from "@/utils/functions/fetch-data/generate-response-object";
import { fetchNumberOfExistingUSerAddresses } from "@/backend/database/drizzle/functions-and-queries/users/user-db-functions-and-queires";
import { checkUserAddressObjectCompleteness } from "@/backend/database/drizzle/functions-and-queries/users/user-db-functions-and-queires";

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
