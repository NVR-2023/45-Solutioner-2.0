import { setFetchSubmissionStatusType } from "@/types/component-props-types";
type FetchMethodType = "GET" | "POST" | "PUT" | "DELETE";

type FetchSubmissionResponseType<T> = {
  fetchSubmissionResponseStatus: string;
  fetchSubmissionResponseData?: T;
  fetchSubmissionResponseError?: string;
};

type FetchSubmissionProps = {
  method?: FetchMethodType;
  body: object;
  url: string;
  setFetchSubmissionStatus?: setFetchSubmissionStatusType;
};

export const fetchSubmission = async <T>({
  method = "GET",
  body,
  url,
  setFetchSubmissionStatus,
}: FetchSubmissionProps): Promise<FetchSubmissionResponseType<T>> => {
  const assignFetchSubmissionStatus = (newStatus: string) => {
    if (setFetchSubmissionStatus) {
      setFetchSubmissionStatus(newStatus);
    }
  };

  let fetchSubmissionResponse: FetchSubmissionResponseType<T> = {
    fetchSubmissionResponseStatus: "idle",
  };

  const fetchSubmissionOptions: RequestInit = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  try {
    assignFetchSubmissionStatus("started");
    const response = await fetch(url, fetchSubmissionOptions);
    if (!response.ok) {
      assignFetchSubmissionStatus("failed");
      throw new Error(`Failed to ${method} data: ${response.statusText}`);
    } else {
      assignFetchSubmissionStatus("succeeded");
      const data = (await response.json()) as T;
      fetchSubmissionResponse = {
        ...fetchSubmissionResponse,
        fetchSubmissionResponseData: data,
        fetchSubmissionResponseStatus: "succeeded",
      };
    }
  } catch (error) {
    assignFetchSubmissionStatus("failed");
    fetchSubmissionResponse = {
      ...fetchSubmissionResponse,
      fetchSubmissionResponseStatus: "failed",
      fetchSubmissionResponseError: "An error occurred",
    };
  } finally {
    if (fetchSubmissionResponse.fetchSubmissionResponseStatus === "succeeded") {
      if (fetchSubmissionResponse.fetchSubmissionResponseData) {
        const data = fetchSubmissionResponse.fetchSubmissionResponseData as any;
        if ("ok" in data) {
          if (data.ok) {
            assignFetchSubmissionStatus("executed");
          } else {
            assignFetchSubmissionStatus("aborted");
          }
        }
      } else {
        assignFetchSubmissionStatus("finished");
      }
    }
  }
  return fetchSubmissionResponse;
};
