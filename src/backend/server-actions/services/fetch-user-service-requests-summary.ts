"use server";

import { db } from "@/backend/database/drizzle/db";
import { serviceRequests, services } from "@/backend/database/schema/schema";
import { eq, and, gte } from "drizzle-orm";

export const fetchUserServiceRequestsSummary = async (userId: string) => {
  try {
    const currentDateFormattedString = new Date().toISOString().split("T")[0];

    const userAllFutureServiceRequests = await db
      .select({
        dateOfService: serviceRequests.dateOfService,
        timeOfService: serviceRequests.timeOfService,
        recurrence: serviceRequests.recurrence,
        userAddressId: serviceRequests.userAddressId,
        category: services.category,
      })
      .from(serviceRequests)
      .rightJoin(services, eq(serviceRequests.serviceId, services.id))
      .where(
        and(
          eq(serviceRequests.userId, userId),
          gte(serviceRequests.dateOfService, currentDateFormattedString),
        ),
      )
      .orderBy(serviceRequests.dateOfService);

    let userServiceRequestsSummary: Record<string, string | number>[] = [];

    userAllFutureServiceRequests.forEach((serviceRequest, currentIndex) => {
      if (
        currentIndex === 0 ||
        serviceRequest.dateOfService !==
          userAllFutureServiceRequests[currentIndex - 1].dateOfService
      ) {
        userServiceRequestsSummary.push(
          serviceRequest as Record<string, string | number>,
        );
      } else {
        const previousIndex = userServiceRequestsSummary.length - 1;
        userServiceRequestsSummary[previousIndex].category = "several";

        if (
          userServiceRequestsSummary[previousIndex].recurrence !==
          userAllFutureServiceRequests[currentIndex].recurrence
        ) {
          userServiceRequestsSummary[previousIndex].recurrence = "several";
        }

        if (
          userServiceRequestsSummary[previousIndex].userAddressId !==
          userAllFutureServiceRequests[currentIndex].userAddressId
        ) {
          userServiceRequestsSummary[previousIndex].userAddressId = "several";
        }
      }
    });

    return userServiceRequestsSummary;
  } catch (error) {
    console.error("Error fetching service requests summary: ", error);
    throw new Error("Error fetching service requests summary");
  }
};
