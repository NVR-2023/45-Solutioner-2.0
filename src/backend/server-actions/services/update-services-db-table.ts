import { db } from "../../database/drizzle/db";
import { services, serviceProfiles } from "@/backend/database/schema/schema";
import { eq } from "drizzle-orm";

import fs from "fs";
import { generateRandomPopularityValues } from "@/utils/functions/generate-random-popularity-values";

export type NewServiceType = typeof services.$inferInsert;
export type NewServiceProfileType = typeof serviceProfiles.$inferInsert;


export const updateServicesDBTable = async () => {
  const pathToJson: string =
    "./src/backend/database/service-descriptions-data/services.json";

  try {
    const fileContent = fs.readFileSync(pathToJson, "utf-8");
    const arrayWithJsonData: NewServiceType[] = JSON.parse(fileContent);

    const serviceProfilesInDB = await db.query.services.findMany();

    for (let i = 0; i < serviceProfilesInDB.length; i++) {
      if (i < arrayWithJsonData.length) {
        const newServiceProfileData: Partial<NewServiceType> =
          arrayWithJsonData[i];
        const id = serviceProfilesInDB[i].id;

        await db
          .update(services)
          .set(newServiceProfileData)
          .where(eq(services.id, id));
      }
    }

    console.log("update concluded");
    return true;
  } catch (error: any) {
    console.error("An error occurred during the update", error);
    return false;
  }
};
