import { NextRequest, NextResponse } from "next/server";
import generateResponseObject from "@/utils/functions/generic-fetch/generate-response-object";
import { INPUT_VALIDATION_FUNCTION_MAP } from "@/utils/functions/input-validation/input-validation-function-map";

import { checkIfUserCredentialsAreValid } from "@/backend/server-actions/users/check-if-user-credentials-are-valid";

import { lucia } from "@/backend/lucia-auth/auth";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email, password } = body;

  const requestObject: Record<string, string> = {
    email: email?.trim(),
    password: password?.trim(),
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
    const newUserId = await checkIfUserCredentialsAreValid(email, password);
    if (!newUserId) {
      responseObject = generateResponseObject({
        status: 400,
        validationErrors: {
          email: "Invalid email or password",
          password: "Invalid email or password",
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
}
