import { fetchSubmission } from "../generic-fetch/fetch-submission";

import {
  SigninUserObjectType,
  setFetchSubmissionStatusType,
} from "@/types/component-props-types";

export const signInUser = async (
  signinUserObject: SigninUserObjectType,
  setFormSubmissionStatus: setFetchSubmissionStatusType,
) => {
  const signInUserResponse = await fetchSubmission({
    method: "POST",
    url: "/api/users/signin",
    body: signinUserObject,
    setFetchSubmissionStatus: setFormSubmissionStatus,
  });

  return signInUserResponse;
};
