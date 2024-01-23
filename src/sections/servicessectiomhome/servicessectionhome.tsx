import React, { FC } from "react";
import Image from "next/image";

const ServicesHomeSection: FC = () => {
  return (
    <section>
      <Image src="/images/homepage/plumbing.png" alt="plumbing" width={1920} height={1080} />
    </section>
  );
};

export default ServicesHomeSection;
