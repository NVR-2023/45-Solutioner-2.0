import { validateRequest } from "@/backend/lucia-auth/validate-request";
import { redirect } from "next/navigation";

export const authenticateAndRedirect = async () => {
    const { session } = await validateRequest();
    if (!session ) redirect("/")
}