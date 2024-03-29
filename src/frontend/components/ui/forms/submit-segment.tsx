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
  const isFormSubmittable = formSubmissionStatus === "idle";

  const forSubmissionStatusLabel: ReactNode =
    formSubmissionStatus === "idle" ? (
      <FadeInWrapper key={"register"}>register</FadeInWrapper>
    ) : formSubmissionStatus === "started" ||
      formSubmissionStatus === "succeeded" ? (
      <div className="flex items-center justify-between" key={"submitting"}>
        <AnimatedProgressCircle scale={0.5} />
        {`\u00A0submitting`}
      </div>
    ) : formSubmissionStatus === "failed" ||
      formSubmissionStatus === "aborted" ? (
      <FadeInWrapper>
        <div className="flex items-center justify-between" key={"failed"}>
          <CrossedCircle scale={0.5} />
          {`\u00A0failed`}
        </div>
      </FadeInWrapper>
    ) : (
      <FadeInWrapper>
        <div className="flex items-center justify-between" key={"succeeded"}>
          <CheckedCircle scale={0.5} />
          {`\u00A0succeeded`}
        </div>
      </FadeInWrapper>
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
        disabled={!isFormSubmittable}
      />
    </div>
  );
};

export default SubmitSegment;
