import { db } from "@/backend/database/drizzle/db";
import { users } from "@/backend/database/schema/schema";
import { eq } from "drizzle-orm";

import { Argon2id } from "oslo/password";

export type NewUserType = {
  name: string;
  email: string;
  password: string;
};


export const checkIfUserCredentialsAreValid = async (
  userEmail: string,
  userPassword: string,
) => {
  try {
    const getUserWithCorrespondingEmail = await db.query.users.findFirst({
      where: eq(users.email, userEmail),
    });
    const doesEnteredPasswordCheck = await new Argon2id().verify(
      getUserWithCorrespondingEmail?.hashedPassword!,
      userPassword,
    );

    if (!getUserWithCorrespondingEmail || !doesEnteredPasswordCheck) {
      return "";
    } else {
      const userId = getUserWithCorrespondingEmail.id;
      return userId;
    }
  } catch (error) {
    console.error("An error occurred", error);
    return "";
  }
};

