import { NextRequest, NextResponse } from "next/server";
import generateResponseObject from "@/utils/functions/fetch-data/generate-response-object";
import { areUserCredentialsValid } from "@/backend/database/drizzle/functions-and-queries/users/user-db-functions-and-queires";
import { lucia } from "@/backend/lucia-auth/auth";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email, password } = body;
  let responseObject: Object;

  const newUserId = await areUserCredentialsValid(email, password);
  if (!newUserId) {
    responseObject = generateResponseObject({
      status: 400,
      validationErrors: {
        error: "Invalid email or password",
      },
    });
  } else {
    const session = await lucia.createSession(newUserId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);

    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes,
    );
    responseObject = generateResponseObject({ status: 201 });
  }
  return NextResponse.json(responseObject);
}
