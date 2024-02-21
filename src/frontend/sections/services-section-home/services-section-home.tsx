import Image from "next/image";

const ServicesHomeSection = () => {
  return (
    <section id="services">
      <div className="relative">
        <Image
          src="/images/homepage/plumbing.webp"
          alt="plumbing"
          width={1920}
          height={1080}
          priority={true}
        />
      </div>
      <div className="absolute left-12 top-80 border-2 p-3 rounded  text-xs text-yellow-500 font-semibold small-caps  border-yellow-500 tracking-widest">
        app under construction
      </div>
    </section>
  );
};

export default ServicesHomeSection;
