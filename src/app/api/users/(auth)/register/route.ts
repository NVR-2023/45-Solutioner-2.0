import { NextResponse } from "next/server";
import generateResponseObject from "@/app/api/error-codes/generate-response-object";
import { ResponseStatusCodeProp } from "@/app/api/error-codes/generate-response-object";

type RequestType = Record<string, string>;

export async function GET() {
  return NextResponse.json({
    message: "API route Register User working",
  });
}

export async function POST(request: Request) {
  const data: RequestType = await request.json();
  const { name, email, password } = data;
  let responseCode: ResponseStatusCodeProp;
  let responseObject: ReturnType<typeof generateResponseObject>;

  // general validation
  if (!name || !email || !password) {
    responseCode = 400 as ResponseStatusCodeProp;
    responseObject = generateResponseObject({ status: responseCode });
  }

  // validate name
  // validate email
  // validate password
  // check if email is unique
  // create new user
  // send response
  
 else {
  responseCode = 200 as ResponseStatusCodeProp;
  responseObject = generateResponseObject({ status: responseCode });
  
 }
      return NextResponse.json(responseObject);

}
