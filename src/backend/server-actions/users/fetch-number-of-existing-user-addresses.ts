import { db } from "@/backend/database/drizzle/db";
import { userAddresses } from "@/backend/database/schema/schema";
import { eq } from "drizzle-orm";

export const fetchNumberOfExistingUSerAddresses = async (userId: string) => {
  try {
    const existingUserAddresses = await db.query.userAddresses.findMany({
      where: eq(userAddresses.userId, userId),
    });

    const existingAddressesArrayLength = existingUserAddresses.length;
    const hasPrimaryAddress = existingUserAddresses.some(
      (address) => address.isPrimary,
    );
    const hasSecondaryAddress = existingUserAddresses.some(
      (address) => !address.isPrimary,
    );
    if (existingAddressesArrayLength === 0) {
      return 0;
    }
    if (existingAddressesArrayLength === 1 && hasPrimaryAddress) {
      return 1;
    }
    if (
      existingAddressesArrayLength === 2 &&
      hasPrimaryAddress &&
      hasSecondaryAddress
    ) {
      return 2;
    }
    return null;
  } catch (error) {
    console.log("Error checking if user addresses exist:", error);
    throw error;
  }
};
