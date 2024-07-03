import { capitalizeFirstLetter } from "@/utils/functions/capitalize-first-letter";
type ModalTitleProps = {
  title: string;
};

const ModalTitleWithoutLogo = ({ title }: ModalTitleProps) => {
  return (
    <div className="font-aperçu text-base font-bold text-[#ff7714] dark:text-neutral-300 ">
      {capitalizeFirstLetter(title as string)}
    </div>
  );
};

export default ModalTitleWithoutLogo;
