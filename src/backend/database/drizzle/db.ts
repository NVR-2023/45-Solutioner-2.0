import "./config";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import { users, services } from "../schema/schema";
import * as schema from "../schema/schema";

export const db = drizzle(sql, { schema });

// Users
export type NewUser = typeof users.$inferInsert;

export const getUsers = async () => {
  const selectResult = await db.select().from(users);
  console.log("Results", selectResult);
  return selectResult;
};

export const getUsers2 = async () => {
  const result = await db.query.users.findMany();
  return result;
};

export const insertUserInDBTable = async (user: NewUser) => {
  return db.insert(users).values(user).returning();
};

// Providers

//Addresses

// Services
export type NewService = typeof services.$inferInsert;

export const insertServiceInDBTable = async (service: NewService) => {
  return db.insert(services).values(service).returning();
};

export const fetchAllServices = async () => {
    const result = await db.query.services.findMany();
    return result;
};

export const seedServicesDBTable = async () => {
  const firstServiceInTable = await db.query.services.findFirst();

  if (firstServiceInTable) {
    console.log("Services Table already filled");
    return false;
  } else {
    const pathToJson: string = "./src/backend/database/service-descriptions/services.json";
    try {
      const fileContent = require("fs").readFileSync(pathToJson, "utf-8");
      const arrayWIthJsonData: NewService[] = JSON.parse(fileContent);
      for (const service of arrayWIthJsonData as NewService[]) {
        await insertServiceInDBTable(service);
      }
      console.log("Services table successfully seeded");
      return true;
    } catch (error: any) {
      console.error("Error loading data:", error.message);
      return false;
    } finally {
      console.log("Seeding process concluded");
    }
  }
};
