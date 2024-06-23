"use client";
import { useState } from "react";

import { signOutUser } from "@/utils/functions/client-side-user-auth/sign-out-user";
import { useRouter } from "next/navigation";

import NavbarPrivate from "@/frontend/sections/navbar-private/navbar-private";

const MyServices = () => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const handleOnMouseEnter = () => {
    setIsHovered(true);
  };
  const handleOnMouseLeave = () => {
    setIsHovered(false);
  };

  const handleOnclick = async () => {
    await signOutUser();
    router.push("/");
  };

  return (
    <div className="h-screen w-screen">
      <NavbarPrivate areNavbarsExpanded={true} />
      track
      <button onClick={handleOnclick} className="bg-purple-400">
        Sign Out
      </button>
    </div>
  );
};

export default MyServices;
