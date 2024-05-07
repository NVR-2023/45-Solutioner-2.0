import { motion } from "framer-motion";
import { useState } from "react";

type ServiceCardProps = {
  service: string;
  id: number;
  price: string;
  included: string;
  description: string;
};

const ServiceCard = ({
  service,
  id,
  price,
  description,
  included,
}: ServiceCardProps) => {


  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      {/* Rollup Div */}
      <div
        className="cursor-pointer rounded-md bg-blue-500 p-2 text-white"
        style={{ height: "1.8rem", width: "30rem" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
   ABC

      </div>

      {/* Expandable Div */}
      <div
        className={`absolute transition-all duration-300 ${
          isHovered ? "grid-rows-1" : "grid-rows-0"
        }`}
        style={{ height: "auto", width: "30rem" }}
      >
1234
      </div>
    </div>
  );
};

export default ServiceCard;
