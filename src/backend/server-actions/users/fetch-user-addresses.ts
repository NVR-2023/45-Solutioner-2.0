import { db } from "@/backend/database/drizzle/db";
import { userAddresses } from "@/backend/database/schema/schema";
import { eq } from "drizzle-orm";

export const fetchUserAddresses = async (userId: string) => {
  try {
    const existingUserAddresses = await db.query.userAddresses.findMany({
      where: eq(userAddresses.userId, userId),
    });
    return existingUserAddresses;
  } catch (error) {
    console.error("Error fetching userAddresses:", error);
    throw new Error("Error fetching userAddresses");
  }
};
