import Navbar from "@/sections/navbar/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#e9e9e9]">
      <Navbar />
      <Image
        src="/images/homepage/wepik-export-20240123002737bfR7.png"
        alt="plumbing"
        width={1920} // Set the desired width
        height={1080} // Set the desired height
      />
    </main>
  );
}

/*       <ABC />
      <div className="bg-zinc-400 flex">
        <span>ZX</span>
        <span><LogoIcon /></span>
        <span><LogoIcon size={2} color={"yellow"}/></span>
      </div>
      <p>Solutioner App development started. 19-01-2024</p>
      <p className="">Testing font Aperçu: Regular</p>
      <p className="font-normal" style={{ fontVariant: "small-caps" }}>
        Testing font Aperçu: small caps
      </p>
      <p className="font-aperçu italic">Testing font Aperçu: Italic</p>
      <p className="font-aperçu font-semibold	">Testing font Aperçu: Semi Bold</p>
      <p className="font-aperçu font-bold ">Testing font Aperçu: Bold</p> */
