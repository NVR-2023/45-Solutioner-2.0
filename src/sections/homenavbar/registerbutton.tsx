import React, { FC } from "react";
import Link from "next/link";

const RegisterButton: FC = () => {
  return (
    <Link
      href="/register"
      className="w-24 h-8 flex justify-center items-center bg-black text-neutral-300 rounded font-aperçu font-bold text-base tracking-wide">
      Register
    </Link>
  );
};

export default RegisterButton;
