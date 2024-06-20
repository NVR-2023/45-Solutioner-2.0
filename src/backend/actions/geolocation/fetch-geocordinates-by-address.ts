"use server";

export async function fetchGeocoordinatesByAddress(address: string) {

  try {
    const BASE_URL = "https://api.opencagedata.com/geocode/v1/json";
    const OPENCAGE_API_KEY = process.env.OPENCAGE_API_KEY;
    const encodedAddress = encodeURIComponent(address);

    const compoundURL = `${BASE_URL}?key=${OPENCAGE_API_KEY}&q=${encodedAddress}&pretty=1&no_annotations=1&limit=1`;

    const response = await fetch(compoundURL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching geolocation:", error);
  }
}
