import LogoIcon from "@/frontend/components/icons/logo-icon";

type FormTitleProps = {
  title: string;
};

const FormTitle = ({ title }: FormTitleProps) => {
  return (
    <>
      <div className="flex h-full w-full items-center space-x-[.15rem] transform -translate-x-2">
        <span className="flex justify-start transform translate-y-[0.1rem]">
          <LogoIcon scale={.75} />
        </span>
        <span className="text-[1rem] text-lg font-medium ">{title}</span>
      </div>
    </>
  );
};

export default FormTitle;
