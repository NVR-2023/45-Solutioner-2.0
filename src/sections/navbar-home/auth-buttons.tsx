import React, { FC } from "react";
import BasicButton from "@/components/common/basic-button";
import Link from "next/link";

const AuthButtons: FC = () => {
  return (
    <div className="flex space-x-3">
      <div>
        <BasicButton type="outlined" size="md">
          <Link href="/signin">Sign in</Link>
        </BasicButton>
      </div>
      <div>
        <BasicButton type="filled" size="md">
          <Link href="/register">Register</Link>
        </BasicButton>
      </div>
    </div>
  );
};

export default AuthButtons;
