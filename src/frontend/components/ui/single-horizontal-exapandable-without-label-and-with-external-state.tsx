import { ReactNode } from "react";
type SingleHorizontalExpandableWithoutLabelAndWIthWitExternalStateProps = {
  externalBooleanState: boolean;
  children: ReactNode;
};

const SingleHorizontalExpandableWithoutLabelAndWIthWitExternalState = ({
  externalBooleanState,
  children,
}: SingleHorizontalExpandableWithoutLabelAndWIthWitExternalStateProps) => {
  return (
    <div className="w-full">
      <div
        className="grid ll overflow-hidden"
        style={{
          gridTemplateColumns: externalBooleanState ? "0fr" : "1fr",
          transition: "grid-template-columns 300ms",
        }}
      >
        <div className="flex w-full overflow-hidden">{children}</div>
      </div>
    </div>
  );
};

export default SingleHorizontalExpandableWithoutLabelAndWIthWitExternalState;
