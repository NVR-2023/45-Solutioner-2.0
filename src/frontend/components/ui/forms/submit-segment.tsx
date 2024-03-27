import { MouseEventHandler } from "react";
import BasicButton from "../basic-button/basic-button";

type SubmitSegmentType = {
  onCancel: MouseEventHandler<HTMLButtonElement>;
  onSubmit: MouseEventHandler<HTMLButtonElement>;
  formSubmitStatus?: string;
};

const SubmitSegment = ({
  onCancel,
  onSubmit,
  formSubmitStatus,
}: SubmitSegmentType) => {
  return (
    <div className="flex justify-between">
      <BasicButton
        size={"sm"}
        type={"outlined"}
        onClick={onCancel}
        label="cancel"
      />

      <BasicButton
        size={"md"}
        type={"filled"}
        onClick={onSubmit}
        label="register"
      />
      <div>{formSubmitStatus}</div>
    </div>
  );
};

export default SubmitSegment;
