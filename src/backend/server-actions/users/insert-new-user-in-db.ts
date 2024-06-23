import { db } from "@/backend/database/drizzle/db";
import { users } from "@/backend/database/schema/schema";

import { Argon2id } from "oslo/password";
import { createId } from "@paralleldrive/cuid2";

export type NewUserType = {
  name: string;
  email: string;
  password: string;
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

