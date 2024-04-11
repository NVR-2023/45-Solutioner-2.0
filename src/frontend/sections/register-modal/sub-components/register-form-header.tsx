import LogoIcon from "@/frontend/components/icons/logo-icon";

type FormHeaderProps = {
  title: string;
};

const RegisterFormHeader = ({ title }: FormHeaderProps) => {
  return (
    <header className="flex w-full  justify-start text-[#ff7714]">
      <div className="flex h-full w-full items-center space-x-[.15rem]">
        <span className="flex justify-center ">
          <LogoIcon scale={1} />
        </span>
        <span className="text-[1rem] text-lg font-medium ">{title}</span>
      </div>
    </header>
  );
};

export default RegisterFormHeader;
