import {
  fetchSubmission, FetchSubmissionResponseType
} from "./fetch-submission";

export type ServiceStaticDataType = {
    data: Object[] | null;
};

export const fetchAllServiceStaticData =
  async () => {
    try {
      const response: FetchSubmissionResponseType<ServiceStaticDataType> =
        await fetchSubmission<ServiceStaticDataType>({
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
