import {
  FetchSubmissionSTatusType as FetchSubmissionStatusType,
  setFetchSubmissionStatusType,
} from "@/types/component-props-types";
type FetchMethodType = "GET" | "POST" | "PUT" | "DELETE";

type FetchSubmissionResponseType<T> = {
  status: FetchSubmissionStatusType;
  data?: any;
  error?: string;
};

type FetchSubmissionProps = {
  method?: FetchMethodType;
  body?: object;
  url: string;
  setFetchSubmissionStatus?: setFetchSubmissionStatusType;
};

export const fetchSubmission = async <T>({
  method = "GET",
  body,
  url,
  setFetchSubmissionStatus,
}: FetchSubmissionProps): Promise<FetchSubmissionResponseType<T>> => {
  const assignFetchSubmissionStatus = (
    newStatus: FetchSubmissionStatusType,
  ) => {
    if (setFetchSubmissionStatus) {
      setFetchSubmissionStatus(newStatus);
    }
  };

  let fetchSubmissionResponse: FetchSubmissionResponseType<T> = {
    status: "idle",
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
      const data: T = await response.json();
      fetchSubmissionResponse = {
        ...fetchSubmissionResponse,
        data: data,
        status: "succeeded",
      };

      const status =
        typeof data === "object" && data && "ok" in data
          ? data.ok
            ? "executed"
            : "aborted"
          : "finished";
      assignFetchSubmissionStatus(status);
    }
  } catch (error) {
    assignFetchSubmissionStatus("failed");
    fetchSubmissionResponse = {
      ...fetchSubmissionResponse,
      status: "failed",
      error: "An error occurred",
    };
  }
  return fetchSubmissionResponse;
};
