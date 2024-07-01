import Link from "next/link";

const RegisterButton = () => {
  return (
    <button className="items-h-10 center flex w-24 justify-center rounded bg-[#ff7714] px-2 py-1 text-base font-semibold tracking-widest text-neutral-100 small-caps">
      <Link href="/register">register</Link>
    </button>
  );
};

export default RegisterButton;
