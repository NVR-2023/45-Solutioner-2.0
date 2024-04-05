"use client";
import { useLuciaSession } from "@/frontend/contextes/use-lucia-session";

const MyRequests = () => {
  const { user, session } = useLuciaSession();
  return (
    <div className="h-screen w-screen">
      My requests connected
      <div>
        {user ? JSON.stringify(user) : "no"}
        {session ? JSON.stringify(session) : "no"}
      </div>
    </div>
  );
};

export default MyRequests;
