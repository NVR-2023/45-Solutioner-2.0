import { authenticateAndRedirect } from "@/utils/functions/server-functions/authenticate-and-redirect";

export default async function Template({ children }: { children: React.ReactNode }) {
    await authenticateAndRedirect();
    return <div>{children}</div>;
}
