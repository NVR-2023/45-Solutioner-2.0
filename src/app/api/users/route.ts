import { NextRequest, NextResponse } from "next/server";
import generateResponseObject from "@/app/api/generate-response-object/generate-response-object";
import { INPUT_VALIDATION_FUNCTION_MAP } from "@/utils/functions/input-validation/input-validation-function-map";

import {
  checkNewUserEmailUniqueness,
  insertNewUserInDB,
} from "@/backend/database/drizzle/db";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, password } = body;

  let responseObject: ReturnType<typeof generateResponseObject>;
  let validationErrorsObject: Record<string, string> = {};

  // validate name
  let validationFunction = INPUT_VALIDATION_FUNCTION_MAP.get("name")!;
  let validationError = validationFunction(name ?? "");
  if (validationError) {
    validationErrorsObject.name = validationError;
  }

  // validate email
  validationFunction = INPUT_VALIDATION_FUNCTION_MAP.get("email")!;
  validationError = validationFunction(email ?? "");
  if (validationError) {
    validationErrorsObject.email = validationError;
  } else {
    const isNewUserEmailUnique = await checkNewUserEmailUniqueness(email);
    if (!isNewUserEmailUnique) {
      validationErrorsObject.email = "Email already exists";
    }
  }

  // validate password
  validationFunction = INPUT_VALIDATION_FUNCTION_MAP.get("password")!;
  validationError = validationFunction(password ?? "");
  if (validationError) {
    validationErrorsObject.password = validationError;
  }

  const hasValidationErrors = Object.values(validationErrorsObject).some(
    (error) => !!error,
  );
  if (hasValidationErrors) {
    responseObject = generateResponseObject({
      status: 400,
      validationErrors: validationErrorsObject,
    });
    return NextResponse.json(responseObject);
  } else {
    const newUserObject = {
      name: name,
      email: email,
      password: password,
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

