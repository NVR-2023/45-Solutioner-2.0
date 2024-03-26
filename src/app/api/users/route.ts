import { NextRequest, NextResponse } from "next/server";
import generateResponseObject from "@/app/api/generate-response-object/generate-response-object";
import { INPUT_VALIDATION_FUNCTION_MAP } from "@/utils/functions/input-validation/input-validation-function-map";

import {
  checkNewUserEmailUniqueness,
  insertNewUserInDB,
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
    const isNewUserEmailUnique: boolean = await checkNewUserEmailUniqueness(email);
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
    const newUserObject = {
      name: requestObject.name,
      email: requestObject.email,
      hashedPassword: requestObject.password,
    };

    try {
      await insertNewUserInDB(newUserObject);
      responseObject = generateResponseObject({
        status: 201,
      });
      return NextResponse.json(responseObject);
    } catch (error) {
      console.error("Error inserting new user into database:", error);
      responseObject = generateResponseObject({
        status: 500,
      });
      return NextResponse.json(responseObject);
    }
  }
}
