import { MouseEventHandler, ReactNode, Dispatch , SetStateAction } from "react";

export type BasicChildrenProps = {
  children: ReactNode;
};

export type BasicComponentProps = {
  scale?: number;
  color?: string;
};

export type BasicButtonProps = {
  type?: "outlined" | "filled";
  size?: "sm" | "md" | "lg";
  label?: ReactNode;
  disabled?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export type OnClickComponentProps = {
  scale?: number;
  color?: string;
  onClick: () => void;
};

export type GenericObjectType = Record<string, string | number | boolean>;

export type ThemeModeType = "light" | "dark" | "system";

export type ValidatedFormFieldsType = Record<
  string,
  {
    value: string | number | boolean;
    validationFunction?: Function;
    errorMessage?: string;
  }
>;



export type setFetchSubmissionStatusType = Dispatch<
  SetStateAction<string>
>;
