import DismissMOdalButton from "./dismiss-modal-button";
type FormHeaderProps = {
  title: string;
};
const FormModalHeader = ({ title }: FormHeaderProps) => {
  return (
    <header className="w-full h-full grid grid-cols-10">
      <div className="zbg-red-400 justify-start gap-x-4 col-span-2 font-rozhaOne text-[.625rem] text-[#94C2A4] tracking-[3%]">
        <div className="zbg-zinc-100 absolute top-[2rem] tracking-[3%] ">SOLUTIONER</div>
      </div>
      <div className="zbg-green-400 col-span-6 flex items-end justify-center font-rozhaOne text-[2.1rem] tracking-[]">
        <div className="zbg-zinc-700">{title.toUpperCase()}</div>
      </div>
      <div className="zbg-blue-400 justify-end col-span-2 flex items-start">
        <div className="zbg-zinc-400 absolute top-[2rem] ">
          <DismissMOdalButton />
        </div>
      </div>
    </header>
  );
};

export default FormModalHeader;
