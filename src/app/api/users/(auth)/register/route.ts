import { NextResponse } from "next/server";

type requestType= Record< string , string>

export async function GET() {
  return NextResponse.json({
    message: "API route Register User working",
  });
}

export async function POST(request: Request) {
  const data: requestType = await request.json();
  const { name, email, password } = data;

  // general validation

  if (!name || !email || !password) {
      return NextResponse.json({
        error: "invalid object"
      });
  }

  // validate name

  // validate email

  // validate password

  // check if email is unique

  // create new user

  // send response

  return NextResponse.json({
    message: "valid object",
    data,
  });
}
