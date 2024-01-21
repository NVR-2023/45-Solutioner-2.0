import ABC from "@/components/unique/abc";
import LogoIcon from "@/sections/navbar/logoicon";
import Navbar
 from "@/sections/navbar/navbar";
export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <ABC />
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
      <p className="font-aperçu font-bold ">Testing font Aperçu: Bold</p>
    </main>
  );
}
