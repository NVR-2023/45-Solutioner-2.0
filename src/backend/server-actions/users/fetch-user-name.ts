import { db } from "@/backend/database/drizzle/db";
import { users } from "@/backend/database/schema/schema";
import { eq } from "drizzle-orm";

import { validateRequest } from "@/backend/lucia-auth/validate-request";



export const fetchUsername = async () => {
  try {
    const { user } = await validateRequest();
    if (!user) return null;

    const result = await db
      .select({ username: users.name })
      .from(users)
      .where(eq(users.id, user.id))
      .limit(1);

    return result ? result[0].username : null;
  } catch (error) {
    console.log("error fetching username: ", error);
  }
};
