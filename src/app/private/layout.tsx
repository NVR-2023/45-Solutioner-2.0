import { authenticateAndRedirect } from "@/backend/server-actions/authenticate-and-redirect/authenticate-and-redirect";
import { UserDetailsContextProvider } from "@/frontend/contexts/use-user-details";
import { validateRequest } from "@/backend/lucia-auth/validate-request";
import { fetchUsername } from "@/backend/server-actions/users/fetch-user-name";

import { getInitialsFromName } from "@/utils/functions/get-Initials-from-name";
import { UserDetailsObjectType } from "@/frontend/contexts/use-user-details";

export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await authenticateAndRedirect();

  const { user } = (await validateRequest()) ?? null;
  const userName = (await fetchUsername()) ?? "";
  const userInitials = getInitialsFromName(userName);

  const value: UserDetailsObjectType = {
    userId: user?.id ?? null,
    userName: userName,
    userInitials: userInitials,
  };

  return (
    <UserDetailsContextProvider value={value}>
      {children}
    </UserDetailsContextProvider>
  );
}
