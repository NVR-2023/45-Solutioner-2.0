import { fetchSubmission } from "../generic-fetch/fetch-submission";

export const signOutUser = async () => {
  const signOutUserResponse = await fetchSubmission({
    method: "POST",
    url: "/api/users/signout",
  });

  return signOutUserResponse;
};
