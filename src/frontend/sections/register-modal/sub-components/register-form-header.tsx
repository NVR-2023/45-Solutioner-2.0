import DismissModalButton from "../../../components/ui/forms/dismiss-modal-button";
type FormHeaderProps = {
  title: string;
};
const RegisterFormHeader = ({ title }: FormHeaderProps) => {
  return (
    <header className="grid h-full w-full grid-cols-10">
      <div className="col-span-2 justify-start gap-x-4 font-rozhaOne text-[.625rem] tracking-[3%] text-[#94C2A4]">
        <div className="absolute top-[2rem] tracking-[3%] ">SOLUTIONER</div>
      </div>
      <div className="col-span-6 flex items-end justify-center font-rozhaOne text-[2.1rem] tracking-[]">
        <div className="">{title.toUpperCase()}</div>
      </div>
      <div className="col-span-2 flex items-start justify-end">
        <div className="absolute top-[2rem] ">
          <DismissModalButton />
        </div>
      </div>
    </header>
  );
};

export default RegisterFormHeader;
