import { db } from "../../db";
import { users, userAddresses } from "@/backend/database/schema/schema";
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
  try {
    const { user } = await validateRequest();
    if (!user) return null;

    const result = await db
      .select({ username: users.name })
      .from(users)
      .where(eq(users.id, user.id))
      .limit(1);

    return result ? result[0].username : null;
  } catch (error) {
    console.log("error fetching username: ", error);
  }
};

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

export const checkUserAddressesExistence = async (userId: string) => {
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

export const checkUserAddressObjectCompleteness = (
  userAddress: Record<string, string | boolean>,
): boolean => {
  const REQUIRED_USER_ADDRESS_FIELDS = ["street", "apartment", "city", "country", "latitude", "longitude"] as const;
  return REQUIRED_USER_ADDRESS_FIELDS.every((field) => userAddress[field]);
};

