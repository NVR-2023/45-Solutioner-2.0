import React, { FC } from "react";
import BasicButton from "@/components/UI/menu-toggle/basic-button/basic-button";
import Link from "next/link";

const RegisterButton: FC = () => {
  return (
    <div>
      <BasicButton type="filled" size="md">
        <Link href="/register">Register</Link>
      </BasicButton>
    </div>
  );
};

export default RegisterButton;
