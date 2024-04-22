"use client";
import { useState } from "react";
import Modal from "../test3/modal";

const Test4 = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-green-400">
      <Modal caption={"test 4"} />
    </div>
  );
};

export default Test4;
