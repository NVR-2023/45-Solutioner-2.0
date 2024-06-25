import { ReactNode } from "react";
type SingleAccordionWithoutLabelAndWIthWitExternalStateProps = {
  externalBooleanState: boolean;
  children: ReactNode;
};

const SingleAccordionWithoutLabelAndWIthWitExternalState = ({
  externalBooleanState,
  children,
}: SingleAccordionWithoutLabelAndWIthWitExternalStateProps) => {
  return (
    <div className="w-full">
      <div
        className="grid w-full overflow-hidden"
        style={{
          gridTemplateRows: externalBooleanState ? "1fr" : "0fr",
          transition: "grid-template-rows 300ms",
        }}
      >
        <div className="flex w-full overflow-hidden">{children}</div>
      </div>
    </div>
  );
};

export default SingleAccordionWithoutLabelAndWIthWitExternalState;
