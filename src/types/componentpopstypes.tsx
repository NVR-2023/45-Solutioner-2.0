export type basicComponentPropsType = {
  size?: number;
  color?: string;
};

export type scaledComponentPropsType = {
  scale?: number;
  color?: string;
};

export type linkType = {
  name: string;
  sectionHash: string;
};

export type linkListType = linkType[];
