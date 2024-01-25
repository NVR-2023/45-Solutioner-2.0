import React, { FC } from "react";
import Image from "next/image";

const SecuritySectionHome: FC = () => {
  return (
    <section id="security">
      <div>
        <Image src="/images/homepage/gardening1CC.jpg" alt="gardening" width={1920} height={1080} />
      </div>
    </section>
  );
};

export default SecuritySectionHome;
