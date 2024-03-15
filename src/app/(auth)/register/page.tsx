"use client";

import RegisterModal from "@/frontend/sections/register-modal/register-modal";
import useInstantScrollToTop from "@/frontend/hooks/use-instant-scroll-to-top";

const Register = () => {
  useInstantScrollToTop();

  return (
    <div
      id="top"
      className="flex h-screen w-screen items-center justify-center border-b-2 border-neutral-200 bg-[#E5E5E5] dark:bg-neutral-500"
    >
      <RegisterModal />
    </div>
  );
};

export default Register;
