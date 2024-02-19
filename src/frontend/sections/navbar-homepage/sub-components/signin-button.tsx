import React, { FC } from "react";
import Link from "next/link";

const SigninButton: FC = () => {
  return (
    <div>
        <Link className=" font-semibold " href="/signin">
          Sign in
        </Link>
    </div>
  );
};

export default SigninButton;
