import { db } from "../../db";
import { users } from "@/backend/database/schema/schema";
import { eq } from "drizzle-orm";

import { Argon2id } from "oslo/password";
import { createId } from "@paralleldrive/cuid2";
import { validateRequest } from "@/backend/lucia-auth/validate-request";

export type NewUserType = {
  name: string;
  email: string;
  password: string;
};

//

export const getUsers = async () => {
  const selectResult = await db.select().from(users);
  return selectResult;
};

export const getUsers2 = async () => {
  const result = await db.query.users.findMany();
  return result;
};

//

export const isEmailUnique = async (newUserEmail: string) => {
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

export const insertNewUserInDb = async (newUser: NewUserType) => {
  try {
    const { name, email, password } = newUser;
    const newUserObject = {
      id: createId(),
      name: name,
      email: email,
      hashedPassword: await new Argon2id().hash(password),
    };

    return db.insert(users).values(newUserObject).returning();
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

export const areUserCredentialsValid = async (
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

//

export const fetchUsername = async () => {
  let result;
  const { user } = await validateRequest();
  if (!user) return null;

  try {
    result = await db
      .select({ username: users.name })
      .from(users)
      .where(eq(users.id, user.id));
  } catch (error) {
    console.log("error fetching username: ", error);
  }

  return result;
};
