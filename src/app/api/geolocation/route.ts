import generateResponseObject from "@/utils/functions/fetch-data/generate-response-object";
import { NextRequest, NextResponse } from "next/server";
import { validateRequest } from "@/backend/lucia-auth/validate-request";

export async function GET(request: NextRequest) {
  let responseObject = {};

  /*   const { session } = await validateRequest();
  if (!session) {
    responseObject = generateResponseObject({
      status: 401,
    });
    return NextResponse.json(responseObject);
  } */

  const url = new URL(request.url);
  /*   const address = url.searchParams.get("address");
   */

  const address = "Avenida Almirante Reis n.100 Lisboa Portugal";
  if (!address) {
    responseObject = generateResponseObject({
      status: 400,
    });
    return NextResponse.json(responseObject);
  }

  try {
    const BASE_URL = "https://api.opencagedata.com/geocode/v1/json";
    const OPENCAGE_API_KEY = process.env.OPENCAGE_API_KEY;
    const encodedAddress = encodeURIComponent(address);
    const compoundURL = `${BASE_URL}?key=${OPENCAGE_API_KEY}&q=${encodedAddress}&pretty=1&no_annotations=1`;

    const response = await fetch(compoundURL);
    const data = await response.json();

    if (data.status.code === 200) {
      const geolocation = {
        /*  latitude: data.results[0].geometry.lat,
        longitude: data.results[0].geometry.lng, */
        data,
      };
      responseObject = generateResponseObject({
        status: 201,
        data: { geolocation },
      });
    } else {
      responseObject = generateResponseObject({
        status: data.status.code,
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
