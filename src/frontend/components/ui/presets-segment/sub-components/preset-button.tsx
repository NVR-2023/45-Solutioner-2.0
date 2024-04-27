import { useRouter, useSearchParams } from "next/navigation";

import { BasicComponentProps } from "@/types/component-props-types";
import PresetIcon from "@/frontend/components/icons/preset-icon";

type PresetButtonProps = BasicComponentProps & {
  preset: Record<string, string>;
};

const PresetButton = ({ scale, color, preset }: PresetButtonProps) => {
  const router = useRouter();
  const existingSearchParams = useSearchParams();

  const handleOnClick = () => {
    const newSearchParams = new URLSearchParams(existingSearchParams);

    for (const param in preset) {
      const normalizedParam = param.replace("_", " ");
      if (newSearchParams.has(normalizedParam)) {
        newSearchParams.set(normalizedParam, preset[param]);
      }
    }

    const newQueryString = newSearchParams.toString();
    const newURL = `${window.location.pathname}?${newQueryString}`;
    router.replace(newURL);
  };

  return (
    <button onClick={handleOnClick}>
      <PresetIcon scale={scale} color={color} />
    </button>
  );
};

export default PresetButton;

/*   const handleOnClick = () => {
    const newSearchParams = new URLSearchParams(existingSearchParams);
    for (const key in preset) {
      const normalizedKey = key.replace("_", " ");
      if (normalizedKey in newSearchParams) {
        newSearchParams.set(normalizedKey, preset[key]);
      }
    }
    const newQueryString = newSearchParams.toString();
    const newURL = `${window.location.pathname}?${newQueryString}`;
    console.log(newURL);
    router.push(newURL);
  };
 */
