import { fetchAllServicesWithProfiles } from "@/backend/database/drizzle/functions-and-queries/services/service-db-functions-and-queries";
import generateResponseObject from "@/utils/functions/fetch-data/generate-response-object";
import { NextResponse } from "next/server";
import { validateRequest } from "@/backend/lucia-auth/validate-request";

export async function GET() {
  let responseObject = {};

  const { user, session } = await validateRequest();
  if (!session) {
    responseObject = generateResponseObject({
      status: 401,
    });
    return NextResponse.json(responseObject);
  }

  try {
    const services = await fetchAllServicesWithProfiles();
    responseObject = generateResponseObject({
      status: 201,
      data: services,
    });
    return NextResponse.json(responseObject);
  } catch (error) {
    console.error("Error fetching services data:", error);
    responseObject = generateResponseObject({
      status: 500,
    });
    return NextResponse.json(responseObject);
  }
}