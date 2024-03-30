import { fetchSubmission } from "./fetch-submission";
import { NewUserObjectType , setFetchSubmissionStatusType } from "@/types/component-props-types";

export const createNewUser = async (
  newUserObject: NewUserObjectType,
  setFormSubmissionStatus: setFetchSubmissionStatusType,
) => {
  const createNewUserResponse = await fetchSubmission({
    method: "POST",
    url: "/api/users",
    body: newUserObject,
    setFetchSubmissionStatus: setFormSubmissionStatus,
  });

  return createNewUserResponse;
};
