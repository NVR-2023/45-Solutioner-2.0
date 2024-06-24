import { ReactNode } from "react";

type ModalContentSubareaShellProps = {
  children: ReactNode;
};

const ModalContentSubareaShell = ({
  children,
}: ModalContentSubareaShellProps) => {
  return (
    <div className="flex w-full flex-col rounded bg-neutral-300 px-4 pt-1 pb-3">
      {children}
    </div>
  );
};

export default ModalContentSubareaShell;
