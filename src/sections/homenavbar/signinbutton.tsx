import React, { FC } from "react";
import Link from "next/link";

const SigninButton: FC = () => {
  return (
    <Link
      href="/signin"
      className="w-24 h-8 flex justify-center items-center border-2 border-green-700 rounded font-aperçu font-bold text-sm text-green-700 tracking-wide">
      Sign in
    </Link>
  );
};

export default SigninButton;
