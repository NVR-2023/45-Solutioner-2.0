"use client";
import { useState } from "react";
import Modal from "./modal";


const Test3 = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-green-400">
      <Modal caption={"test 3"} />
    </div>
  );
};

export default Test3;
