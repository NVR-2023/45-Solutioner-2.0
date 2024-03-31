import { lucia } from "@/backend/database/auth/auth";
import { createId } from "@paralleldrive/cuid2";
import { Argon2id } from "oslo/password";
import { cookies } from "next/headers";

import { NextRequest, NextResponse } from "next/server";
import generateResponseObject from "@/utils/functions/fetch-data/generate-response-object";
import { INPUT_VALIDATION_FUNCTION_MAP } from "@/utils/functions/input-validation/input-validation-function-map";

import {
  isUserEmailUnique,
  insertNewUserInDb,
} from "@/backend/database/drizzle/db";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email, password } = body;

  /* const session = await lucia.createSession(newUserId, {});
      const sessionCookie = lucia.createSessionCookie(session.id);
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes,
      ); */
}
