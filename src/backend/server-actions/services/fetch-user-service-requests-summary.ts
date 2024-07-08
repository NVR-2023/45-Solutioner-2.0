"use server";
import { NextResponse } from "next/server";
import { validateRequest } from "@/backend/lucia-auth/validate-request";

import { db } from "@/backend/database/drizzle/db";
import { serviceRequests, services } from "@/backend/database/schema/schema";
import { eq, and, gte } from "drizzle-orm";
import { convertDateToYearString } from "@/utils/functions/date-time/convert-date-to-year-string";

export const fetchUserServiceRequestsSummary = async () => {
  try {
    const { user, session } = await validateRequest();
    const userId: string = user?.id!;
    if (!session || !userId) {
      return new NextResponse("Unauthorized request", { status: 403 });
    }

    const currentDateString = convertDateToYearString(new Date());
    const allUserPendingServiceRequests = await db
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
          gte(serviceRequests.dateOfService, currentDateString),
        ),
      )
      .orderBy(serviceRequests.dateOfService);

    let userServiceRequestsSummary: Record<string, string | number>[] = [];

    allUserPendingServiceRequests.forEach((serviceRequest, currentIndex) => {
      if (
        currentIndex === 0 ||
        serviceRequest.dateOfService !==
          allUserPendingServiceRequests[currentIndex - 1].dateOfService
      ) {
        userServiceRequestsSummary.push(
          serviceRequest as Record<string, string | number>,
        );
      } else {
        const previousIndex = userServiceRequestsSummary.length - 1;
        userServiceRequestsSummary[previousIndex].category = "several";

        if (
          userServiceRequestsSummary[previousIndex].recurrence !==
          allUserPendingServiceRequests[currentIndex].recurrence
        ) {
          userServiceRequestsSummary[previousIndex].recurrence = "several";
        }

        if (
          userServiceRequestsSummary[previousIndex].userAddressId !==
          allUserPendingServiceRequests[currentIndex].userAddressId
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
