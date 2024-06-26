"use server";
import { db } from "@/backend/database/drizzle/db";
import { eq, and } from "drizzle-orm";
import { userAddresses } from "@/backend/database/schema/schema";

export const fetchUserAddressesIds = async (userId: string) => {
  let userAddressesIds: (number | null)[] = [null, null];

  try {
    const primaryUserAddress =
      (await db.query.userAddresses.findFirst({
        where: and(
          eq(userAddresses.userId, userId),
          eq(userAddresses.isPrimary, true),
        ),
        columns: {
          id: true,
        },
      })) ?? null;

    const secondaryUserAddress =
      (await db.query.userAddresses.findFirst({
        where: and(
          eq(userAddresses.userId, userId),
          eq(userAddresses.isPrimary, false),
        ),
        columns: {
          id: true,
        },
      })) ?? null;

    userAddressesIds[0] = primaryUserAddress?.id ?? null;
    userAddressesIds[1] = secondaryUserAddress?.id ?? null;

    return userAddressesIds;
  } catch (error) {
    console.error("Error fetching userAddresses I~Ds", error);
    throw new Error("Error fetching userAddresses IDs");
  }
};
