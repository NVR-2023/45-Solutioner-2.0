"use client";
import { useState } from "react";
import { signOutUser } from "@/utils/functions/fetch-data/user-endpoint-submissions";
import { useRouter } from "next/navigation";

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
      track
      <button onClick={handleOnclick} className="bg-purple-400">
        Sign Out
      </button>
      <div className="flex space-x-2">
        {/* component */}

        <div
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
          className="flex"
        >
          <div
            className="grid"
            style={{
              gridTemplateColumns: isHovered ? "0fr" : "1fr",
              transition: "grid-template-columns 180ms",
            }}
          >
            <div className="overflow-hidden">
              <div className="overflow-hidden bg-green-500">H</div>
            </div>
          </div>

          <div
            className="grid"
            style={{
              gridTemplateColumns: isHovered ? "1fr" : "0fr",
              transition: "grid-template-columns 180ms",
            }}
          >
            <div className="overflow-hidden">
              <div className="overflow-hidden bg-green-400">Affordable</div>
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
