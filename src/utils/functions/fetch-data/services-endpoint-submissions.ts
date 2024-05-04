import {
  fetchSubmission,
  FetchSubmissionResponseType,
} from "./fetch-submission";

export type AllServiceStaticDataType = Record<string, any>[] | null;


export const fetchAllServiceStaticData = async () => {
  try {
    const response: FetchSubmissionResponseType<AllServiceStaticDataType> =
      await fetchSubmission<AllServiceStaticDataType>({
        url: "/api/services",
      });

    if (response.data) {
      return response.data.data;
    } else {
      console.error("No data received from the API");
      return null;
    }
  } catch (error) {
    console.error("Error fetching service data:", error);
    return null;
  }
};
