import Link from "next/link";

const RegisterButton = () => {
  return (
    <div>
      <Link className=" font-semibold " scroll={false} href="/register/#">
        Register
      </Link>
    </div>
  );
};

export default RegisterButton;
