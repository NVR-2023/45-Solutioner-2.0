import { validateRequest } from "@/backend/lucia-auth/validate-request";
import { redirect } from "next/navigation";

export default async function privateLAyout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sessionData = await validateRequest();
  const { user, session } = sessionData;
  if (!user && !session) redirect("/");

  return <> {children}</>;
}
