import { FC } from "react";
import Link from "next/link";

const RegisterButton = () => {
  return (
    <div>
        <Link className=" font-semibold " href="/register">Register</Link>
    </div>
  );
};

export default RegisterButton;
