import React, { FC } from "react";
import BasicButton from "@/components/common/basic-button";
import Link from "next/link";

const RegisterButton: FC = () => {
  return (
    <div>
      <BasicButton type="filled" size="md">
        <Link className=" text-base " href="/register">
          Register
        </Link>
      </BasicButton>
    </div>
  );
};

export default RegisterButton;
