import Image from "next/image";

const ServicesHomeSection = () => {
  return (
    <section id="services">
      <div>
        <Image
          src="/images/homepage/plumbing.webp"
          alt="plumbing"
          width={1920}
          height={1080}
          priority={true}
        />
      </div>
    </section>
  );
};

export default ServicesHomeSection;
