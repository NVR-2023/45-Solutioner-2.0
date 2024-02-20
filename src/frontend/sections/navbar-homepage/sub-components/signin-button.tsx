import Link from "next/link";

const SigninButton = () => {
  return (
    <div>
        <Link className=" font-semibold " href="/signin">
          Sign in
        </Link>
    </div>
  );
};

export default SigninButton;
