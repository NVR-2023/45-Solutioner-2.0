"use server";
import { UserAddressType } from "@/types/general-types";
import { validateUserId } from "@/backend/database/drizzle/functions-and-queries/users/user-db-functions-and-queires";
import generateResponseObject from "@/utils/functions/fetch-data/generate-response-object";
import { fetchNumberOfExistingUSerAddresses } from "@/backend/database/drizzle/functions-and-queries/users/user-db-functions-and-queires";
import { checkUserAddressObjectCompleteness } from "@/backend/database/drizzle/functions-and-queries/users/user-db-functions-and-queires";

import { db } from "@/backend/database/drizzle/db";
import { userAddresses } from "@/backend/database/schema/schema";

export const createUserAddress = async (newUserAddress: UserAddressType) => {
  console.log("entered function");
  console.log(newUserAddress);

  const { userId } = newUserAddress;
  const isUserIdValid = await validateUserId(userId);
  if (!isUserIdValid) {
    return generateResponseObject({ status: 404 });
  }

  console.log("userID checks");

/*   const isNewUserAddressComplete =
    checkUserAddressObjectCompleteness(newUserAddress);
  if (!isNewUserAddressComplete) {
    return generateResponseObject({ status: 400 });
  } */

  console.log("Address Complete");

  const numberOfExistingUserAddresses =
    await fetchNumberOfExistingUSerAddresses(userId);
  if (numberOfExistingUserAddresses === 2) {
    return generateResponseObject({ status: 400 });
  }

  console.log("available addresses");
  console.log("entered final stage");

  try {
    await db.insert(userAddresses).values(newUserAddress);
    return generateResponseObject({ status: 200 });
  } catch (error) {
    console.log("Error creating new user address", error);
    return generateResponseObject({ status: 400 });
  }
};