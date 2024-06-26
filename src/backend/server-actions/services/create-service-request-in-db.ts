"use server";

import { db } from "@/backend/database/drizzle/db";
import { serviceRequests } from "@/backend/database/schema/schema";
import {
  RecurrenceType,
  BookServiceModalObjectType,
} from "@/frontend/sections/book-service-modal/book-service-modal";

export const createServiceRequestInDb = async (
  newServiceRequest: BookServiceModalObjectType,
) => {
  try {
    const insertedServiceRequest = await db
      .insert(serviceRequests)
      .values({
        userId: newServiceRequest.userId!,
        serviceId: newServiceRequest.serviceId!,
        dateOfService: newServiceRequest.date!,
        timeOfService: newServiceRequest.time!,
        userAddressId: newServiceRequest.addressId!,
        quantity: newServiceRequest.quantity!,
        recurrence: newServiceRequest.recurrence as RecurrenceType,
        status: "requested",
      })
      .returning();

    return insertedServiceRequest;
  } catch (error) {
    console.error("Error creating new Service Request:", error);
    throw new Error("Error creating new Service Request");
  }
};
