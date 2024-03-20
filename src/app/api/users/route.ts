import { NextRequest, NextResponse } from "next/server";
import generateResponseObject from "@/app/api/generate-response-object/generate-response-object";
import { INPUT_VALIDATION_MAP } from "@/utils/functions/input-validation/input-validation-map";

export async function GET() {
  return NextResponse.json({ reply: "GET route active" });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, password } = body;

  let responseObject: ReturnType<typeof generateResponseObject>;
  let validationErrorsObject: Record<string, string> = {
    name: "",
    email: "",
    password: "",
  };

  // validate name
  let validationFunction = INPUT_VALIDATION_MAP.get("name")!;
  let validationError = validationFunction(name ?? "");
  if (validationError) {
    validationErrorsObject.name = validationError;
  }

  // validate email
  validationFunction = INPUT_VALIDATION_MAP.get("email")!;
  validationError = validationFunction(email ?? "");
  if (validationError) {
    validationErrorsObject.email = validationError;
  }

  // validate password
  validationFunction = INPUT_VALIDATION_MAP.get("password")!;
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
    responseObject = generateResponseObject({
      status: 200,
      data: { name: "Celeste" },
    });
    return NextResponse.json(responseObject);
  }
}
