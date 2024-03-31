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

  let formSubmissionStatusLabel: ReactNode;

  switch (formSubmissionStatus) {
    case "idle":
      formSubmissionStatusLabel = "register";
      break;
    case "started":
    case "succeeded":
      formSubmissionStatusLabel = (
        <div className="flex w-16 items-center" key={"submitting"}>
          <span className="flex w-6 justify-center">
            <AnimatedProgressCircle scale={0.5} />
          </span>
          <span className="flex w-full justify-start">{`\u00A0submitting`}</span>
        </div>
      );
      break;
    case "failed":
    case "aborted":
      formSubmissionStatusLabel = (
        <FadeInWrapper>
          <div className="flex w-16 items-center " key={"failed"}>
            <span className="justify-center flex w-6">
              <CrossedCircle scale={0.5} color={"#f87171"} />
            </span>
            <span className="flex w-full justify-start">{`\u00A0failed`}</span>
          </div>
        </FadeInWrapper>
      );
      break;
    case "executed":
    case "finished":
      formSubmissionStatusLabel = (
        <FadeInWrapper>
          <div className="flex w-16 items-center " key={"executed"}>
            <span className="flex w-6 justify-center">
              <CheckedCircle scale={0.5} color={"#4ade80"} />
            </span>
            <span className="flex w-full justify-start">
              {`\u00A0succeeded`}{" "}
            </span>
          </div>
        </FadeInWrapper>
      );
      break;
    case "re-idle":
      formSubmissionStatusLabel = (
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
        label={formSubmissionStatusLabel}
        disabled={!isFormSubmittable}
      />
    </div>
  );
};

export default SubmitSegment;
