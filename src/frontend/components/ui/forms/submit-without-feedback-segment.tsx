import { MouseEventHandler, ReactNode } from "react";
import { FetchSubmissionSTatusType } from "@/types/component-props-types";
import BasicButton from "../basic-button/basic-button";
import CheckedCircle from "../../icons/checked-circle";
import CrossedCircle from "../../icons/crossed-circle";
import AnimatedProgressCircle from "../../icons/animated-progress-circle";
import FadeInWrapper from "../fadein-wrapper/fade-in-wrapper";

type SubmitSegmentWithoutFeedbackType = {
  onCancel: MouseEventHandler<HTMLButtonElement>;
  onSubmit: MouseEventHandler<HTMLButtonElement>;
  submitAction?: string;
  formSubmissionStatus?: FetchSubmissionSTatusType;
};

const SubmitWithoutFeedbackSegment = ({
  onCancel,
  onSubmit,
  submitAction,
  formSubmissionStatus,
}: SubmitSegmentWithoutFeedbackType) => {
  const isFormSubmittable =
    formSubmissionStatus === "idle" || formSubmissionStatus === "re-idle";

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
        label={submitAction}
        disabled={!isFormSubmittable}
      />
    </div>
  );
};

export default SubmitWithoutFeedbackSegment;
