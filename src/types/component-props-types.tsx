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

export type LinkType = {
  name: string;
  url: string;
};

export type BasicChildrenType = {
  children: ReactNode;
};

export type LinkListType = LinkType[];

export type ThemeModeType = "light" | "dark" | "system";

export type SystemThemePreference = "light" | "dark" | "no-preference";

export type FooterLinkColumnType = {
  label: string;
  links: string[];
  socialMediaIcons?: { children: ReactNode };
};
