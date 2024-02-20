import Image from "next/image";

const PricingSectionHome = () => {
  return (
    <section id="pricing">
      <div>
        <Image
          src="/images/homepage/dogwalking.webp"
          alt="dog walking"
          width={1920}
          height={1080}
          priority={true}
        />
      </div>
    </section>
  );
};

export default PricingSectionHome;
