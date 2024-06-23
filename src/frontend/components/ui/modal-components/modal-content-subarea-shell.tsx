import { ReactNode } from "react";

type ModalContentSubareaShellProps = {
  children: ReactNode;
};

const ModalContentSubareaShell = ({
  children,
}: ModalContentSubareaShellProps) => {
  return (
    <div className="flex w-full flex-col rounded bg-neutral-300 px-4 py-2">
      {children}
    </div>
  );
};

export default ModalContentSubareaShell;
