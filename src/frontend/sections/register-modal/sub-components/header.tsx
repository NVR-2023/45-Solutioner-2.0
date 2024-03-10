import LogoComponent from "../../navbar/logocomponent";
import DismissMOdalButton from "./dismiss-modal-button";
const Header = () => {
  return (
    <>
      <div className="zbg-red-400 justify-start col-span-2 flex items-start font-rozhaOne text-[.625rem] text-[#94C2A4] tracking-[3%]">
        <div className="zbg-zinc-100 absolute top-[2.2rem] ">Solutioner</div>
      </div>
      <div className="zbg-green-400 col-span-6 flex items-end justify-center font-rozhaOne text-[1.9rem] tracking-wider">
        <div className="zbg-zinc-700">REGISTER</div>
      </div>
      <div className="zbg-blue-400 justify-end col-span-2 flex items-start">
        <div className="zbg-zinc-400 absolute top-[2.2rem] ">
          <DismissMOdalButton />
        </div>
      </div>
    </>
  );
};

export default Header;
