import React, { FC } from "react";
import Image from "next/image";

const SecuritySectionHome: FC = () => {
  return (
    <section id="security">
      <div>
        <Image
          src="/images/homepage/gardening.webp"
          alt="gardening"
          width={1920}
          height={1080}
        />
      </div>
    </section>
  );
};

export default SecuritySectionHome;
