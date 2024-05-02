import { db } from "../../db";
import { services, serviceProfiles } from "@/backend/database/schema/schema";
import { eq } from "drizzle-orm";

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
    .select()
    .from(services)
    .innerJoin(serviceProfiles, eq(services.id, serviceProfiles.serviceId));
  return result;
};

export const insertServiceProfileInDBTable = async (
  serviceProfile: NewServiceProfileType,
) => {
  return db.insert(serviceProfiles).values(serviceProfile).returning();
};
