"use client";
import { signInUser } from "@/utils/functions/fetch-data/endpoint-submissions";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const router = useRouter();

  const handleOnClick = () => {
    signInUser({
      email: "me@mail.com",
      password: "Aa12345678",
    });
    router.push("/");
  };

  return (
    <div className="h-screen w-screen">
      Sign In page
      <button className="bg-blue-400 hover:bg-red-400 " onClick={handleOnClick}>
        Sign in{" "}
      </button>
    </div>
  );
};

export default SignIn;
