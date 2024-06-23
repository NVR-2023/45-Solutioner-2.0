import { db } from "../../database/drizzle/db";
import { services, serviceProfiles } from "@/backend/database/schema/schema";
import { eq } from "drizzle-orm";

export type NewServiceType = typeof services.$inferInsert;
export type NewServiceProfileType = typeof serviceProfiles.$inferInsert;


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
