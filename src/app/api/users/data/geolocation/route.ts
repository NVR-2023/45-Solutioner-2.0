import generateResponseObject from "@/utils/functions/fetch-data/generate-response-object";
import { NextResponse } from "next/server";
import { useSearchParams } from "next/navigation";
import { validateRequest } from "@/backend/lucia-auth/validate-request";

export async function GET() {

  const searchParams = useSearchParams();
  let responseObject = {};

  const { user, session } = await validateRequest();
  if (!session) {
    responseObject = generateResponseObject({
      status: 401,
    });
    return NextResponse.json(responseObject);
  }

  const address = searchParams.get("address");
  if (!address) {
    responseObject = generateResponseObject({
      status: 400,
    });
    return NextResponse.json(responseObject);
  }

  try {
    const BASE_URL = "https://api.opencagedata.com/geocode/v1/json?q=";
    const encodedAddress = encodeURIComponent(address!);
    const OPENCAGE_API_KEY = process.env.OPENCAGE_API_KEY;

    const compoundURL = `${BASE_URL}${encodedAddress}&key=${OPENCAGE_API_KEY}`;

    const response = await fetch(compoundURL);
    const data = await response.json();

    if (data.status.code === 200) {
      const geolocation = {
        longitude: data.results[0].geometry.lng,
        latitude: data.results[0].geometry.lat,
      };
      responseObject = generateResponseObject({
        status: 201,
        data: { geolocation },
      });
    } else {
      responseObject = generateResponseObject({
        status: 404,
      });
    }
    return NextResponse.json(responseObject);
  } catch (error) {
    console.error("Error fetching geolocation:", error);
    responseObject = generateResponseObject({
      status: 500,
    });
    return NextResponse.json(responseObject);
  }
}
