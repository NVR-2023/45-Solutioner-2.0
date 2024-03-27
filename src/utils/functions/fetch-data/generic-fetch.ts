import { setFetchSubmissionStatusType } from "@/types/component-props-types";
type FetchMethodType = "GET" | "POST" | "PUT" | "DELETE";

type FetchResultType<T> = {
  fetchSubmissionStatus: string;
  fetchSubmissionResponseData?: T;
  fetchSubmissionError?: string;
};

type GenericFetchProps<T> = {
  method?: FetchMethodType;
  body: object;
  url: string;
  setFetchSubmissionStatus?: setFetchSubmissionStatusType;
};

export const genericFetch = async <T>({
  method = "GET",
  body,
  url,
  setFetchSubmissionStatus,
}: GenericFetchProps<T>): Promise<FetchResultType<T>> => {
  const assignFetchSubmissionStatus = (newStatus: string) => {
    if (setFetchSubmissionStatus) {
      setFetchSubmissionStatus(newStatus);
    }
  };

  let fetchSubmissionResult: FetchResultType<T> = {
    fetchSubmissionStatus: "idle",
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
      fetchSubmissionResult = {
        ...fetchSubmissionResult,
        fetchSubmissionResponseData: data,
        fetchSubmissionStatus: "succeeded",
      };
    }
  } catch (error) {
    assignFetchSubmissionStatus("failed");
    fetchSubmissionResult = {
      ...fetchSubmissionResult,
      fetchSubmissionStatus: "failed",
      fetchSubmissionError: "An error occurred",
    };
  } finally {
    assignFetchSubmissionStatus("finished");
  }
  return fetchSubmissionResult;
};
