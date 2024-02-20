import LogoIcon from "./logoicon";
import { BasicComponentProps } from "@/types/component-props-types";

const LogoComponent = ({ scale = 1, color = "currentColor" }: BasicComponentProps) => {
  return (
    <div className="flex">
      <LogoIcon scale={0.5} color={"green"} />
      <div className="font-aperçu font-bold" style={{ letterSpacing: 0.9 }}>
        olutioner
      </div>
    </div>
  );
};

export default LogoComponent;
