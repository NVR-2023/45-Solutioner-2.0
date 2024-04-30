import Image from "next/image";

const ServicesHomeSection = () => {
  return (
    <section id="services">
      <div className="relative">
        <Image
          src="https://res.cloudinary.com/dzow47vf1/image/upload/v1714472610/A%20-%20Solutioner%202.0/plumbing_pxvrbd.webp"
          alt="plumbing"
          width={1920}
          height={1080}
          priority={true}
        />
      </div>
      <div className="absolute left-12 top-80 rounded border-2 border-yellow-500  p-3 text-xs font-semibold tracking-widest  text-yellow-500 small-caps">
        app under construction
      </div>
    </section>
  );
};

export default ServicesHomeSection;
