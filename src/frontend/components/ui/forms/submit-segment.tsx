import { MouseEventHandler, ReactNode } from "react";
import { FetchSubmissionSTatusType } from "@/types/component-props-types";
import BasicButton from "../basic-button/basic-button";
import CheckedCircle from "../../icons/checked-circle";
import CrossedCircle from "../../icons/crossed-circle";
import AnimatedProgressCircle from "../../icons/animated-progress-circle";
import FadeInWrapper from "../fadein-wrapper/fade-in-wrapper";

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
  const isFormSubmittable =
    formSubmissionStatus === "idle" || formSubmissionStatus === "re-idle";

let forSubmissionStatusLabel: ReactNode;

switch (formSubmissionStatus) {
  case "idle":
    forSubmissionStatusLabel = "register";
    break;
  case "started":
  case "succeeded":
    forSubmissionStatusLabel = (
      <div className="flex items-center justify-between" key={"submitting"}>
        <AnimatedProgressCircle scale={0.5} />
        {`\u00A0submitting`}
      </div>
    );
    break;
  case "failed":
  case "aborted":
    forSubmissionStatusLabel = (
      <FadeInWrapper>
        <div className="flex items-center justify-between" key={"failed"}>
          <CrossedCircle scale={0.5} color={"#f87171"} />
          {`\u00A0failed`}
        </div>
      </FadeInWrapper>
    );
    break;
  case "executed":
  case "finished":
    forSubmissionStatusLabel = (
      <FadeInWrapper>
        <div className="flex items-center justify-between" key={"executed"}>
          <CheckedCircle scale={0.5} color={"#4ade80"} />
          {`\u00A0succeeded`}{" "}
        </div>
      </FadeInWrapper>
    );
    break;
  case "re-idle":
    forSubmissionStatusLabel = (
      <FadeInWrapper key={"re-idle"}>register</FadeInWrapper>
    );
    break;
}



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
        disabled={!isFormSubmittable}
      />
    </div>
  );
};

export default SubmitSegment;
