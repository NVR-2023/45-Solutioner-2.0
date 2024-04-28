import { MouseEventHandler, ReactNode, Dispatch, SetStateAction } from "react";

export type BasicChildrenProps = {
  children: ReactNode;
};

export type BasicComponentProps = {
  scale?: number;
  color?: string;
};



export type OnClickComponentProps = {
  scale?: number;
  color?: string;
  onClick: () => void;
};

export type GenericObjectType = Record<string, string | number | boolean>;

export type ThemeModeType = "light" | "dark" | "system";

export type ValidatedTextFormFieldsType = Record<
  string,
  {
    value: string;
    validationFunction?: Function;
    errorMessage?: string;
  }
>;

export type FetchSubmissionSTatusType = string;

export type setFetchSubmissionStatusType = Dispatch<
  SetStateAction<FetchSubmissionSTatusType>
>;

export type NewUserObjectType = {
  name: string;
  email: string;
  password: string;
  hasAcceptedTermsOfUse: string;
};

export type SigninUserObjectType = {
  email: string;
  password: string;
};
