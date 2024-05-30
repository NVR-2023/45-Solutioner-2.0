import { capitalizeFirstLetter } from "@/utils/functions/capitalize-first-letter";
type ModalTitleProps = {
  title: string;
};

const ModalTitleWithoutLogo = ({ title }: ModalTitleProps) => {
  return (
    <div className="font-aperçu text-sm font-bold leading-[.5rem] text-[#ff7714] dark:text-neutral-300 md:text-xs">
      {capitalizeFirstLetter(title as string)}
    </div>
  );
};

export default ModalTitleWithoutLogo;
