import { ReactNode } from "react";

export type BasicComponentPropsType = {
  scale?: number;
  color?: string;
};

export type OnClickComponentPropsType = {
  scale?: number;
  color?: string;
  onClick: () => void;
};

export type BasicButtonType = {
  type?: "outlined" | "filled";
  size?: "sm" | "md" | "lg";
  children?: ReactNode;
};

export type BasicChildrenType = {
  children: ReactNode;
};
