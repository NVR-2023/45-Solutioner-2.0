import { ReactNode } from "react";

export type basicComponentPropsType = {
  scale?: number;
  color?: string;
};

export type onClickComponentPropsType = {
  scale?: number;
  color?: string;
  onClick: () => void;
};

export type basicButtonType = {
  type?: "outlined" | "filled";
  size?: "sm" | "md" | "lg";
  children?: ReactNode;
};

export type linkType = {
  name: string;
  url: string;
};

export type basicChildrenType = {
  children: ReactNode;
};

export type linkListType = linkType[];

export type themeModeType = "light" | "dark" | "system";

export type systemThemePreference = "light" | "dark" | "no-preference";
