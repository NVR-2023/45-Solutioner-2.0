"use client";

import { PAGE_BACKGROUND } from "@/app/global-styles.";
import RegisterModal from "@/frontend/sections/register-modal/register-modal";
import useInstantScrollToTop from "@/frontend/hooks/use-instant-scroll-to-top";

const Register = () => {
  useInstantScrollToTop();

  return (
    <div id="top" className={`${PAGE_BACKGROUND}`}>
      <div className="flex h-screen w-screen items-center justify-center border-b-2 border-neutral-200">
        <RegisterModal />
      </div>
    </div>
  );
};

export default Register;
