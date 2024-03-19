import { NextRequest, NextResponse } from "next/server";
import generateResponseObject from "@/app/api/generate-response-object/generate-response-object";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, password } = body;

  let responseObject: ReturnType<typeof generateResponseObject>;

  // general validation
  if (!name || !email || !password) {
    responseObject = generateResponseObject({
      status: 400,
      data: { name: "Jupiter" },
      validationErrors: { name: "assas", email: "dfgfgf", password: "asasas" },
    });
  }

  // validate name
  // validate email
  // validate password

  // check if email is unique
  // create new user
  // send response
  else {
    responseObject = generateResponseObject({
      status: 200,
      data: { name: "Celeste" },
    });
  }
  return NextResponse.json(responseObject);
}
