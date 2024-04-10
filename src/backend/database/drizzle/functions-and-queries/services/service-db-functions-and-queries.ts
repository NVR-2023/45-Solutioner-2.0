import { db } from "../../db";
import { services } from "@/backend/database/schema/schema";

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
    const pathToJson: string =
      "./src/backend/database/service-descriptions/services.json";
    try {
      const fileContent = require("fs").readFileSync(pathToJson, "utf-8");
      const arrayWIthJsonData: NewService[] = JSON.parse(fileContent);
      for (const service of arrayWIthJsonData as NewService[]) {
        await insertServiceInDBTable(service);
      }
      return true;
    } catch (error: any) {
      return false;
    } finally {
      console.log("Seeding process concluded");
    }
  }
};
