import { ReactNode } from "react";

export type BasicComponentProps = {
  scale?: number;
  color?: string;
};

export type OnClickComponentProps = {
  scale?: number;
  color?: string;
  onClick: () => void;
};

export type BasicButtonProps = {
  type?: "outlined" | "filled";
  size?: "sm" | "md" | "lg";
  children?: ReactNode;
};

export type BasicChildrenProps = {
  children: ReactNode;
};
