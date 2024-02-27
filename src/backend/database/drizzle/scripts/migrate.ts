import { migrate } from "drizzle-orm/vercel-postgres/migrator";
import { db } from "../db";

async function main() {
  try {
    await migrate(db, { migrationsFolder: "./src/backend/database/drizzle/migrations" });
    console.log("Success: Database migration completed successfully!");
  } catch (error) {
    console.error("Error: Database migration failed");
    console.error(error);
  }
}

main();
