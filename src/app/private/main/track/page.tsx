"use client";
import { useState } from "react";
import { signOutUser } from "@/utils/functions/fetch-data/user-endpoint-submissions";
import { useRouter } from "next/navigation";

import NavbarPrivate from "@/frontend/sections/navbar-private/navbar-private";

import AssetCyclicalSlier from "@/frontend/components/ui/div-cyclic-slider/asset-cyclic-sldier";

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
      <AssetCyclicalSlier />
    </div>
  );
};

export default MyServices;
