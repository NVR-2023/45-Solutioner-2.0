import { ReactNode } from "react";

export type basicComponentPropsType = {
  scale?: number;
  color?: string;
};

export type basicButtonType = {
  type?: "outlined" | "filled";
  size?: "sm" | "md" | "lg";
  children?: ReactNode;
}

export type linkType = {
  name: string;
  url: string;
};

export type linkListType = linkType[];
