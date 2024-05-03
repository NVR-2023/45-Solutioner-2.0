import { fetchUsername } from "@/backend/database/drizzle/functions-and-queries/users/user-db-functions-and-queires";
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
    const username = await fetchUsername();
    if (username) {
      responseObject = generateResponseObject({
        status: 201,
        data: username,
      });
    } else {
      responseObject = generateResponseObject({
        status: 404,
      });
    }
    return NextResponse.json(responseObject);
  } catch (error) {
    console.error("Error fetching username:", error);
    responseObject = generateResponseObject({
      status: 500,
    });
    return NextResponse.json(responseObject);
  }
}
