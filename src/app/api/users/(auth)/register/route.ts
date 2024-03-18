import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "API route Register User working",
  });
}

export async function POST(request: Request) {
  const data = await request.json();

  // validate name

  // validate email

  // validate password

  // check if email is unique

  // create new user

  // send response
  
  return NextResponse.json({
    message: "returning back  teh object",
    data
  })
}
