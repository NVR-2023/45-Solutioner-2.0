import { SessionProvider } from "@/frontend/contextes/use-lucia-session";
import { validateRequest } from "@/backend/lucia-auth/validate-request";

export default async function privateLAyout({
  children,
}: {
  children: React.ReactNode;
}) {
  
    const sessionData = await validateRequest();

    return (
      <SessionProvider value={sessionData}>
        <p>Layout connected</p>
        {children}
      </SessionProvider>
    );
}
