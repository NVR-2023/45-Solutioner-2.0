import { MouseEventHandler, ReactNode } from "react";
import { FetchSubmissionSTatusType } from "@/types/component-props-types";
import BasicButton from "../basic-button/basic-button";
import CheckedCircle from "../../icons/checked-circle";
import CrossedCircle from "../../icons/crossed-circle";
import AnimatedProgressCircle from "../../icons/animated-progress-circle";

type SubmitSegmentType = {
  onCancel: MouseEventHandler<HTMLButtonElement>;
  onSubmit: MouseEventHandler<HTMLButtonElement>;
  formSubmissionStatus?: FetchSubmissionSTatusType;
};

const SubmitSegment = ({
  onCancel,
  onSubmit,
  formSubmissionStatus,
}: SubmitSegmentType) => {
  const forSubmissionStatusLabel: ReactNode =
    formSubmissionStatus === "idle" ? (
      "register"
    ) : formSubmissionStatus === "started" ||
      formSubmissionStatus === "succeeded" ? (
      <div className="flex items-center justify-between">
        <AnimatedProgressCircle scale={0.5} />
        {`\u00A0submitting`}
      </div>
    ) : formSubmissionStatus === "failed" ||
      formSubmissionStatus === "aborted" ? (
      <div className="flex items-center justify-between">
        <CrossedCircle scale={0.5} />
        {`\u00A0failed`}
      </div>
    ) : (
      <div className="flex items-center justify-between">
        <CheckedCircle scale={0.5} />
        {`\u00A0succeeded`}
      </div>
    );

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
        label={forSubmissionStatusLabel}
      />
    </div>
  );
};

export default SubmitSegment;
