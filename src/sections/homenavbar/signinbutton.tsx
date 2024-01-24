import React, { FC } from "react";
import Link from "next/link";

const SigninButton: FC = () => {
  return (
    <Link
      href="/signin"
      className="w-24 h-8 flex justify-center items-center border-2 border-black rounded font-aperçu font-bold text-base tracking-wide">
      Sign in
    </Link>
  );
};

export default SigninButton;
