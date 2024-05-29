import { db } from "../../db";
import { services, serviceProfiles } from "@/backend/database/schema/schema";
import { eq } from "drizzle-orm";

import { drizzle } from "drizzle-orm/vercel-postgres";
import * as schema from "@/backend/database/schema/schema";

import fs from "fs";
import { generateRandomPopularityValues } from "@/utils/functions/generate-random-popularity-values/generate-random-popularity-values";

export type NewServiceType = typeof services.$inferInsert;
export type NewServiceProfileType = typeof serviceProfiles.$inferInsert;

// Seeding functions

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
    console.log("ServiceProfiles table popularity values successfully seeded")
  } catch (error) {
    console.error("Error seeding popularity values:", error);
  }
};

// Regular Services functions

export const insertServiceInDBTable = async (service: NewServiceType) => {
  return db.insert(services).values(service).returning();
};

export const getAllServices = async () => {
  const result = await db.query.services.findMany();
  return result;
};

export const fetchAllServicesWithProfiles = async () => {
  const result = await db
    .select({
      id: services.id,
      category: services.category,
      service: services.service,
      description: services.description,
      unit: services.unit,
      duration: services.duration,
      personnel: services.personnel,
      included: services.included,

      price: serviceProfiles.price,
      sale: serviceProfiles.sale,
      saleExpiresBy: serviceProfiles.saleExpiresBy,
      popularity: serviceProfiles.popularity,
    })
    .from(services)
    .innerJoin(serviceProfiles, eq(services.id, serviceProfiles.serviceId));
  return result;
};

export const insertServiceProfileInDBTable = async (
  serviceProfile: NewServiceProfileType,
) => {
  return db.insert(serviceProfiles).values(serviceProfile).returning();
};
