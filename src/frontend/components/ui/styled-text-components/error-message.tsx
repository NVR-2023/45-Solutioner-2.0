import { TextComponentProps } from "@/types/component-props-types";

const ErrorMessage = ({ text }: TextComponentProps) => {
  return (
    <div className="text-[0.625rem] italic leading-[.5rem] text-red-700">
      {text}
    </div>
  );
};

export default ErrorMessage;
