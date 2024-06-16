import { TextComponentProps } from "@/types/component-props-types";

const NavbarTab = ({ text }: TextComponentProps) => {
  return <div className="text-xs font-semibold">{text}</div>;
};

export default NavbarTab;
