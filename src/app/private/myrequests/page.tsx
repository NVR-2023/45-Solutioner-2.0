"use client";
import { useEffect, useState } from "react";
import { useLuciaSession } from "@/frontend/contextes/use-lucia-session";
import { signOutUser } from "@/utils/functions/fetch-data/endpoint-submissions";
import { useRouter } from "next/navigation";

const MyRequests = () => {
  const router = useRouter();
  const { user, session } = useLuciaSession();
  const [isSignedIn, setIsSignedin] = useState(false);

  useEffect(() => {
    const checkIfUserIsSignedIN = () => {
      if (!user && !session) {
        router.push("/");
      } else {
        setIsSignedin(true);
      }
    };

    checkIfUserIsSignedIN();
  }, []);

  const handleOnclick = async () => {
    await signOutUser();
    setIsSignedin(false);
  };

  if (!isSignedIn) {
    return (
      <div className="bg-purple-400r flex h-screen w-screen items-center justify-center">
        loading...
      </div>
    );
  }
  return (
    <div className="h-screen w-screen">
      My requests connected
      <div>
        {user ? JSON.stringify(user) : "no"}
        {session ? JSON.stringify(session) : "no"}
      </div>
      <button onClick={handleOnclick} className="bg-green-400">
        Sign Out
      </button>
    </div>
  );
};

export default MyRequests;
