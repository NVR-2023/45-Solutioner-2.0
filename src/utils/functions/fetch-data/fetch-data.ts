import { Dispatch, SetStateAction } from "react";

type MethodType = "GET" | "POST" | "PUT" | "DELETE";

type StatusType = "idle" | "started" | "succeeded" | "failed" | "finished";
type SetStatusType = Dispatch<SetStateAction<StatusType>>;

type GenericFetchDataProps<T> = {
  method?: MethodType;
  body: Record<string, any>;
  url: string;
  setStatus?: SetStatusType;
};

type FetchResultType<T> = {
  status: StatusType;
  data?: T;
  error?: string;
};

export const genericFetch = async <T>({
  method = "GET",
  body,
  url,
  setStatus,
}: GenericFetchDataProps<T>) => {
  const assignStatus = (newStatus: StatusType) => {
    if (setStatus) {
      setStatus(newStatus);
    }
  };

  const fetchResult: FetchResultType<T> = { status: "idle" };

  const options: RequestInit = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  try {
    assignStatus("started");
    const response = await fetch(url, options);
    if (!response.ok) {
      assignStatus("failed");
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    } else {
      assignStatus("succeeded");
      const data = (await response.json()) as T;
      fetchResult.data = data;
      fetchResult.status = "succeeded";
    }
  } catch (error) {
    assignStatus("failed");
    fetchResult.status = "failed";
    fetchResult.error = "An error occurred";
  } finally {
    assignStatus("finished");
  }
  return fetchResult;
};
