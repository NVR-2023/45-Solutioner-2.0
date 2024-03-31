import { fetchSubmission } from "./fetch-submission";
import {
  NewUserObjectType,
  setFetchSubmissionStatusType,
} from "@/types/component-props-types";

export const registerNNewUser = async (
  newUserObject: NewUserObjectType,
  setFormSubmissionStatus: setFetchSubmissionStatusType,
) => {
  const registerNewUserResponse = await fetchSubmission({
    method: "POST",
    url: "/api/users",
    body: newUserObject,
    setFetchSubmissionStatus: setFormSubmissionStatus,
  });

  return registerNewUserResponse;
};
