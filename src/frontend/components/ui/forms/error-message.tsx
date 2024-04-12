import { ReactNode } from "react";
type ErrorMessageProps = {
  errorMessage: ReactNode;
};

const ErrorMessage = ({ errorMessage }: ErrorMessageProps) => {
  return (
    <div className="text-[0.625rem] italic leading-[.5rem] text-red-700">
      {errorMessage}
    </div>
  );
};

export default ErrorMessage;
