import React, { FC } from "react";
import Image from "next/image";

const ServicesSection: FC = () => {
  return (
    <section>
      <Image src="/images/homepage/plumbing.png" alt="plumbing" width={1920} height={1080} />
    </section>
  );
};

export default ServicesSection;
