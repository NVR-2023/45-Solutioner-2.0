import LogoIcon from "@/frontend/components/icons/logo-icon";

type ModalTitleProps = {
  title: string;
};

const LargeModalTitle = ({ title }: ModalTitleProps) => {
  return (
    <div className="flex h-full  w-full -translate-x-1.5 transform items-center space-x-[.1rem] text-[#ff7714]">
      <span className="flex translate-y-[0.1rem] transform justify-start">
        <LogoIcon scale={0.75} />
      </span>
      <span className="flex w-full justify-start text-[1rem] text-lg font-medium">
        {title}
      </span>
    </div>
  );
};

export default LargeModalTitle;
