import { db } from "../../database/drizzle/db";
import { services, serviceProfiles } from "@/backend/database/schema/schema";

export type NewServiceType = typeof services.$inferInsert;
export type NewServiceProfileType = typeof serviceProfiles.$inferInsert;

export const insertServiceProfileInDBTable = async (
  serviceProfile: NewServiceProfileType,
) => {
  return db.insert(serviceProfiles).values(serviceProfile).returning();
};
