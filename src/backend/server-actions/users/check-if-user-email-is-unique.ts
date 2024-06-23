import { db } from "@/backend/database/drizzle/db";
import { users } from "@/backend/database/schema/schema";
import { eq } from "drizzle-orm";

export type NewUserType = {
  name: string;
  email: string;
  password: string;
};

export const checkIfUserEmailIsUnique = async (newUserEmail: string) => {
  try {
    const isNewEmailUnique = await db.query.users.findFirst({
      where: eq(users.email, newUserEmail),
    });

    return !isNewEmailUnique;
  } catch (error) {
    console.error("Error occurred while checking email uniqueness:", error);
    return false;
  }
};
