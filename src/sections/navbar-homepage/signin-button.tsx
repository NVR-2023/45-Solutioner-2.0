import React, { FC } from "react";
import BasicButton from "@/components/common/basic-button";
import Link from "next/link";

const SigninButton: FC = () => {
  return (
    <div>
      <BasicButton type="outlined" size="md">
        <Link className=" text-base " href="/signin">
          Sign in
        </Link>
      </BasicButton>
    </div>
  );
};

export default SigninButton;
