import { db } from "@/backend/database/drizzle/db";
import { users } from "@/backend/database/schema/schema";
import { eq } from "drizzle-orm";


export const validateUserId = async (userId: string) => {
  let isUserIdValid;
  try {
    isUserIdValid = await db.query.users.findFirst({
      where: eq(users.id, userId),
    });
  } catch (error) {
    console.log("Error checking if user exists");
  } finally {
    return !!isUserIdValid;
  }
};
