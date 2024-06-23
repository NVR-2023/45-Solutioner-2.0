import { authenticateAndRedirect } from "@/utils/functions/auth/authenticate-and-redirect";
import { UserDetailsContextProvider } from "@/frontend/contexts/use-user-details";
import { validateRequest } from "@/backend/lucia-auth/validate-request";
import { fetchUsername } from "@/backend/database/drizzle/functions-and-queries/users/user-db-functions-and-queires";

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
