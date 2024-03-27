import { MouseEventHandler, ReactNode } from "react";
import BasicButton from "../basic-button/basic-button";

type SubmitSegmentType = {
  onCancel: MouseEventHandler<HTMLButtonElement>;
  onSubmit: MouseEventHandler<HTMLButtonElement>;
  formSubmissionStatus?: string;
};

const SubmitSegment = ({
  onCancel,
  onSubmit,
  formSubmissionStatus,
}: SubmitSegmentType) => {
  const isFormSubmissionInProgress =
    formSubmissionStatus === "started" ||
    formSubmissionStatus === "failed" ||
    formSubmissionStatus === "succeeded";

  const formSubmissionStatusLabelMAp = new Map<string, ReactNode>([
    ["started", <span key="1">started</span>],
    ["failed", <span key="2">failed</span>],
    ["executed", <span key="2">executed</span>],
    ["aborted", <span key="2">aborted</span>],
    ["finished", <span key="3">finished</span>],
  ]);

  return (
    <div className="relative flex justify-between">
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
        label={
          isFormSubmissionInProgress
            ? formSubmissionStatusLabelMAp.get(formSubmissionStatus)
            : "register"
        }
        disabled={isFormSubmissionInProgress}
      />
    </div>
  );
};

export default SubmitSegment;
