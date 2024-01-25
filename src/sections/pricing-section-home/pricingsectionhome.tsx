import React, { FC } from "react";
import Image from "next/image";

const PricingSectionHome: FC = () => {
  return (
    <section id="pricing">
      <div>
        <Image src="/images/homepage/dogwaling.jpg" alt="dog walking" width={1920} height={1080} priority={true} />
      </div>
    </section>
  );
};

export default PricingSectionHome;
