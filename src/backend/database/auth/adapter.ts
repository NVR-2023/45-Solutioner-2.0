import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";
import pg from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import { users, userSessions } from "../schema/schema";

const pool = new pg.Pool({connectionString: process.env.POSTGRES_URL});
export const luciaDb = drizzle(pool);
export const luciaAdapter = new DrizzlePostgreSQLAdapter(luciaDb, userSessions, users);
