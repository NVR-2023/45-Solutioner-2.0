import "./config.ts";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/backend/database/schema/schema.ts",
  out: "./src/backend/database/drizzle/migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.POSTGRES_URL! + "?sslmode=require",
  },
  verbose: true,
  strict: true,
});
