import { authenticateAndRedirect } from "@/utils/functions/server-functions/authenticate-and-redirect";

export default async function PrivateLayout({ children }: { children: React.ReactNode }) {
    await authenticateAndRedirect();
    return <>{children}</>;
}
