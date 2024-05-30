import LogoIcon from "@/frontend/components/icons/logo-icon";

type ModalTitleProps = {
  title: string;
};

const SmallModalTitleWithoutLogo = ({ title }: ModalTitleProps) => {
  return (
    <div className="flex h-full  w-full -translate-x-1.5 transform items-center space-x-[.1rem] text-[#ff7714]">
      <span className="flex w-full justify-start text-base font-medium">
        {title}
      </span>
    </div>
  );
};

export default SmallModalTitleWithoutLogo;
