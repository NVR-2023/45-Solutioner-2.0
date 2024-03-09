"use client"

import React, { useEffect } from "react";
import RegisterModal from "@/frontend/sections/register-modal/register-modal";

const Register = () => {

  useEffect(()=>{
   window.scrollTo({
     top: 0,
     behavior: "instant",
   });
  }, [])
  
  return (
    <div
      id="top"
      className=" scroll-[auto] w-screen h-screen border-b-2 border-neutral-200 bg-[#E5E5E5] dark:bg-neutral-500 flex items-center justify-center">
      <RegisterModal />
    </div>
  );
};

export default Register;
