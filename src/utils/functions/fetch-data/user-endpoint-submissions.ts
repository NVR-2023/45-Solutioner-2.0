import { fetchSubmission } from "./fetch-submission";
import {
  NewUserObjectType,
  SigninUserObjectType,
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



