import Image from "next/image";

const PricingSectionHome = () => {
  return (
    <section id="pricing">
      <div>
        <Image
          src="https://res.cloudinary.com/dzow47vf1/image/upload/v1714472610/A%20-%20Solutioner%202.0/dogwalking_rx2gsv.webp"
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
