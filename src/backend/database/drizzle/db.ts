import "./config";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import { users } from "../schema/schema";
import * as schema from "../schema/schema";

export const db = drizzle(sql, { schema });

export const getUsers = async () => {
  const selectResult = await db.select().from(users);
  console.log("Results", selectResult);
  return selectResult;
};

export const getUsers2 = async () => {
  const result = await db.query.users.findMany();
  return result;
};

export type NewUser = typeof users.$inferInsert;

export const insertUser = async (user: NewUser) => {
  return db.insert(users).values(user).returning();
};


