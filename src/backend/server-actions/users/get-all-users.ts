import { db } from "@/backend/database/drizzle/db";
import { users } from "@/backend/database/schema/schema";

export type NewUserType = {
  name: string;
  email: string;
  password: string;
};

export const getUsers = async () => {
  const selectResult = await db.select().from(users);
  return selectResult;
};

export const getUsers2 = async () => {
  const result = await db.query.users.findMany();
  return result;
};
