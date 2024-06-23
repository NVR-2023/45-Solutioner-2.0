import { db } from "../../database/drizzle/db";
import { services, serviceProfiles } from "@/backend/database/schema/schema";
import { insertServiceInDBTable } from "./service-db-functions-and-queries";

export type NewServiceType = typeof services.$inferInsert;
export type NewServiceProfileType = typeof serviceProfiles.$inferInsert;

export const seedServicesDBTable = async () => {
  const firstServiceInTable = await db.query.services.findFirst();

  if (firstServiceInTable) {
    console.log("services table already filled");
    return false;
  } else {
    const pathToJson: string =
      "./src/backend/database/service-descriptions-data/services.json";
    try {
      const fileContent = require("fs").readFileSync(pathToJson, "utf-8");
      const arrayWIthJsonData: NewServiceType[] = JSON.parse(fileContent);
      for (const service of arrayWIthJsonData as NewServiceType[]) {
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
