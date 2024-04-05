"use client";
import { signInUser } from "@/utils/functions/fetch-data/endpoint-submissions";

const SignIn = () => {
  const handleOnClick = () => {
    signInUser({
      email: "me@mail.com",
      password: "Aa12345678",
    });
  };

  return (
    <div className="h-screen w-screen">
      Sign In page
      <button className="bg-green-400" onClick={handleOnClick}>
        Send request
      </button>
    </div>
  );
};

export default SignIn;
