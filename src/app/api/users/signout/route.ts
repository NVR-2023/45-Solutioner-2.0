import { NextResponse } from "next/server";
import generateResponseObject from "@/utils/functions/fetch-data/generate-response-object";
import { validateRequest } from "@/backend/lucia-auth/validate-request";
import { cookies } from "next/headers";
import { lucia } from "@/backend/lucia-auth/auth";

export async function POST() {
  let responseObject: object;

  try {
    const { session } = await validateRequest();
    if (!session) {
      throw new Error("invalid request");
    }
    await lucia.invalidateSession(session.id);
    const sessionCookie = lucia.createBlankSessionCookie();
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes,
    );

    responseObject = generateResponseObject({
      status: 201,
    });
    return NextResponse.json(responseObject);
  } catch (error) {
    console.error("Error signing out:", error);
    responseObject = generateResponseObject({
      status: 500,
    });
    return NextResponse.json(responseObject);
  }
}
