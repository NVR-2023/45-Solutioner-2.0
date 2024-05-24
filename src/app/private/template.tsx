import { authenticateAndRedirect } from "@/utils/functions/server-functions/authenticate-and-redirect";

export default async function PrivateTemplate({ children }: { children: React.ReactNode }) {
/*     await authenticateAndRedirect();
 */    return <>{children}</>;
}
