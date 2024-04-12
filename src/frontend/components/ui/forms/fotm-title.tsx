import LogoIcon from "@/frontend/components/icons/logo-icon";

type FormTitleProps = {
  title: string;
};

const FormTitle = ({ title }: FormTitleProps) => {
  return (
    <div className="">
      <span></span>
      <span>{title}</span>{" "}
    </div>
  );
};

export default FormTitle;
