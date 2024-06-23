import { db } from "../../database/drizzle/db";
import { serviceProfiles } from "@/backend/database/schema/schema";
import { eq } from "drizzle-orm";
import { generateRandomPopularityValues } from "@/utils/functions/generate-random-popularity-values";


export const seedPopularityValuesInServiceProfilesTable = async () => {
  try {
    const randomPopularityValuesArray = generateRandomPopularityValues();
    const serviceProfilesInDB = await db.query.serviceProfiles.findMany();

    for (let i = 0; i < serviceProfilesInDB.length; i++) {
      const currentPopularityValue = randomPopularityValuesArray[i];
      await db
        .update(serviceProfiles)
        .set({ popularity: currentPopularityValue.toString() })
        .where(eq(serviceProfiles.id, i));
    }
    console.log("ServiceProfiles table popularity values successfully seeded");
  } catch (error) {
    console.error("Error seeding popularity values:", error);
  }
};