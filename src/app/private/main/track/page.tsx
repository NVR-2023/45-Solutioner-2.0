"use client";
import { useState } from "react";
import { signOutUser } from "@/utils/functions/fetch-data/user-endpoint-submissions";
import { useRouter } from "next/navigation";

const MyServices = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleOnMouseEnter = () => {
    setIsHovered(true);
  };

  const handleOnMouseLeave = () => {
    setIsHovered(false);
  };

  const router = useRouter();

  const handleOnclick = async () => {
    await signOutUser();
    router.push("/");
  };

  return (
    <div className="h-screen w-screen">
      track
      <button onClick={handleOnclick} className="bg-purple-400">
        Sign Out
      </button>
      <div className="flex space-x-2">
        {/* component */}

        <div className="flex">
          {!isHovered && (
            <div
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
              className=""
            >
              Hover Me
            </div>
          )}
          <div
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
            className="grid"
            style={{
              gridTemplateColumns: isHovered ? "1fr" : "0fr",
              transition: "grid-template-columns 300ms",
            }}
          >
            <div className="overflow-hidden">
              <div className="overflow-hidden">Affordable</div>
            </div>
          </div>
        </div>

        {/*         end of component
         */}
        <span>Test1 </span>
        <span>Test2 </span>
        <span>Test3 </span>
      </div>
    </div>
  );
};

export default MyServices;
