import { MouseEventHandler } from "react";
import BasicButton from "../basic-button";

type SubmitSegmentWithoutFeedbackType = {
  label: string;
  onCancel: MouseEventHandler<HTMLButtonElement>;
  onSubmit: MouseEventHandler<HTMLButtonElement>;
};

const SubmitWithoutFeedbackSegment = ({
  label,
  onCancel,
  onSubmit,
}: SubmitSegmentWithoutFeedbackType) => {
  return (
    <div className="relative flex justify-between">
      <BasicButton
        size={"sm"}
        type={"outlined"}
        onClick={onCancel}
        label="cancel"
      />
      <BasicButton
        size={"lg"}
        type={"filled"}
        onClick={onSubmit}
        label={label}
      />
    </div>
  );
};

export default SubmitWithoutFeedbackSegment;
