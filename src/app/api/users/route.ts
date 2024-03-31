import { lucia } from "@/backend/database/auth/auth";
import { createId } from "@paralleldrive/cuid2";
import { Argon2id } from "oslo/password";
import { cookies } from "next/headers";

import { NextRequest, NextResponse } from "next/server";
import generateResponseObject from "@/utils/functions/fetch-data/generate-response-object";
import { INPUT_VALIDATION_FUNCTION_MAP } from "@/utils/functions/input-validation/input-validation-function-map";

import {
  checkNewUserEmailUniqueness,
  insertNewUserInDb,
} from "@/backend/database/drizzle/db";

export async function POST(request: NextRequest) {
  const body = await request.json();
  let { name, email, password, hasAcceptedTermsOfUse } = body;

  const requestObject: Record<string, string> = {
    name: name?.trim(),
    email: email?.trim(),
    password: password?.trim(),
    hasAcceptedTermsOfUse: hasAcceptedTermsOfUse?.trim(),
  };

  let requestErrorsObject: Record<string, string> = {};
  let responseObject: ReturnType<typeof generateResponseObject>;

  for (let field in requestObject) {
    const fieldValue = requestObject[field] ?? "";
    const validationFunction = INPUT_VALIDATION_FUNCTION_MAP.get(field)!;
    const validationError = validationFunction(fieldValue);
    if (validationError) {
      requestErrorsObject[field] = validationError;
    }
  }

  if (!requestErrorsObject.email) {
    const isNewUserEmailUnique: boolean =
      await checkNewUserEmailUniqueness(email);
    if (!isNewUserEmailUnique) {
      requestErrorsObject.email = "Email already in use";
    }
  }

  const hasValidationErrors = Object.values(requestErrorsObject).some((error) =>
    Boolean(error),
  );

  if (hasValidationErrors) {
    responseObject = generateResponseObject({
      status: 400,
      validationErrors: requestErrorsObject,
    });
    return NextResponse.json(responseObject);
  } else {
    const password = requestObject.password;
    const newUserId = createId();
    const newUserObject = {
      id: newUserId,
      name: requestObject.name,
      email: requestObject.email,
      hashedPassword: await new Argon2id().hash(password),
    };

    try {
      await insertNewUserInDb(newUserObject);

      const session = await lucia.createSession(newUserId, {});
      const sessionCookie = lucia.createSessionCookie(session.id);
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
      console.error("Error registering new user:", error);
      responseObject = generateResponseObject({
        status: 500,
      });
      return NextResponse.json(responseObject);
    }
  }
}
