import { db } from "../../database/drizzle/db";
import { services, serviceProfiles } from "@/backend/database/schema/schema";
import { insertServiceProfileInDBTable } from "./insert-service-profile-in-db-table";

export type NewServiceType = typeof services.$inferInsert;
export type NewServiceProfileType = typeof serviceProfiles.$inferInsert;

export const seedServiceProfilesDBTable = async () => {
  const firstServiceInTable = await db.query.serviceProfiles.findFirst();

  if (firstServiceInTable) {
    console.log("serviceProfiles Table already filled");
    return false;
  } else {
    const pathToJson: string =
      "./src/backend/database/service-descriptions-data/service-profiles.json";
    try {
      const fileContent = require("fs").readFileSync(pathToJson, "utf-8");
      const arrayWIthJsonData: NewServiceProfileType[] =
        JSON.parse(fileContent);
      for (const serviceProfile of arrayWIthJsonData as NewServiceProfileType[]) {
        await insertServiceProfileInDBTable(serviceProfile);
      }
      return true;
    } catch (error: any) {
      return false;
    } finally {
      console.log("Seeding process concluded");
    }
  }
};
