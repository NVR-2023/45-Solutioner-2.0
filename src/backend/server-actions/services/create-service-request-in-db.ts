"use server";

import { NextResponse } from "next/server";
import { db } from "@/backend/database/drizzle/db";
import { serviceRequests } from "@/backend/database/schema/schema";
import {
  RecurrenceType,
  BookServiceModalObjectType,
} from "@/frontend/sections/book-service-modal/book-service-modal";
import { validateRequest } from "@/backend/lucia-auth/validate-request";

export const createServiceRequestInDb = async (
  newServiceRequest: BookServiceModalObjectType,
): Promise<number | null> => {
  
  try {
    const { user, session } = await validateRequest();
    const userId: string | undefined = user?.id;
    if (!session || !userId) {
      return null;
    }

    // server-side validation omitted

    const serviceRequestInsertionResult = await db
      .insert(serviceRequests)
      .values({
        userId: userId,
        serviceId: newServiceRequest.serviceId!,
        dateOfService: newServiceRequest.date!,
        timeOfService: newServiceRequest.time!,
        userAddressId: newServiceRequest.addressId!,
        quantity: newServiceRequest.quantity!,
        recurrence: newServiceRequest.recurrence as RecurrenceType,
        status: "requested",
      })
      .returning({ newServiceRequestId: serviceRequests.id });

    const result: number = serviceRequestInsertionResult[0].newServiceRequestId;
    if (!result) {
      throw new Error("Error creating new Service Request");
    }

    // Full database transaction omitted

    return result;
  } catch (error) {
    throw new Error("Error creating new Service Request");
  }
};
