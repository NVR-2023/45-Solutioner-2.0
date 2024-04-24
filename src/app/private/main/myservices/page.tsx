"use client";
import { signOutUser } from "@/utils/functions/fetch-data/user-endpoint-submissions";
import { useRouter } from "next/navigation";

const MyServices = () => {
  const router = useRouter();

  const handleOnclick = async () => {
    await signOutUser();
    router.push("/");
  };

  return (
    <div className="h-screen w-screen">
      My requests tab
      <button onClick={handleOnclick} className="bg-green-400">
        Sign Out
      </button>
    </div>
  );
};

export default MyServices;
