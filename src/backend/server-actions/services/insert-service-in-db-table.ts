import { db } from "../../database/drizzle/db";
import { services, serviceProfiles } from "@/backend/database/schema/schema";

export type NewServiceType = typeof services.$inferInsert;
export type NewServiceProfileType = typeof serviceProfiles.$inferInsert;


export const insertServiceInDBTable = async (service: NewServiceType) => {
  return db.insert(services).values(service).returning();
};
