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


type SigninCredentialsProps = {
  email: string,
  password: string,
}

export const signInUser = async (signInObject: SigninCredentialsProps) => {
  const signInUserResponse = await fetchSubmission({
    method: "POST",
    url: "/api/users/signin",
    body: signInObject,
  });

  return signInUserResponse;
};

export const signOutUser = async () => {
  const signOutUserResponse = await fetchSubmission({
    method: "POST",
    url: "/api/users/signout",
  });

  return signOutUserResponse;
};

