import Link from "next/link";

const RegisterButton = () => {
  return (
    <div>
      <Link className=" font-semibold " href="/register/#top">
        Register
      </Link>
    </div>
  );
};

export default RegisterButton;
