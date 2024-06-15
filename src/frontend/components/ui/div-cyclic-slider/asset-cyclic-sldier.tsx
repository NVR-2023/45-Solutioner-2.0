import { useState, useLayoutEffect, useRef, ReactNode } from "react";

type AssetCyclicalSliderProps = {
  assetArray?: ReactNode[];
};

const array: ReactNode[] = [
  <div key={1}>10:00</div>,
  <div key={2}>12:00</div>,
  <div key={3}>14:00</div>,
];

const AssetCyclicalSlider = ({
  assetArray = array,
}: AssetCyclicalSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateDirection, setTranslateDirection] = useState(0);
  const [isTranslating, setIsTranslating] = useState(false);

  const previousIndex =
    (currentIndex - 1 + assetArray.length) % assetArray.length;
  const nextIndex = (currentIndex + 1) % assetArray.length;

  const wrapperDivRef = useRef<HTMLDivElement | null>(null);
  const firstDivRef = useRef<HTMLDivElement | null>(null);
  const secondDivRef = useRef<HTMLDivElement | null>(null);
  const thirdDivRef = useRef<HTMLDivElement | null>(null);

  const handleOnGetNextAsset = () => {
    setCurrentIndex((currentIndex + 1) % assetArray.length);
    setIsTranslating(true);
    setTranslateDirection(1);
  };

  const handleOnGetPreviousAsset = () => {
    setCurrentIndex((currentIndex - 1 + assetArray.length) % assetArray.length);
    setIsTranslating(true);
    setTranslateDirection(-1);
  };


  return (
    <>
      <div className="relative flex h-6 w-10 overflow-hidden bg-green-400">
        <div
          ref={wrapperDivRef}
          className={`absolute -left-10 top-0 flex bg-purple-400 transition-transform duration-1000 ${
            isTranslating
              ? translateDirection === 1
                ? "-translate-x-10"
                : "translate-x-10"
              : ""
          }`}
        >
          <div
            ref={firstDivRef}
            className="flex h-6 w-10 items-center justify-center overflow-hidden"
          >
            {assetArray[previousIndex]}
          </div>
          <div
            ref={secondDivRef}
            className="flex h-6  w-10 items-center justify-center overflow-hidden"
          >
            {assetArray[currentIndex]}
          </div>
          <div
            ref={thirdDivRef}
            className="flex h-6  w-10 items-center justify-center overflow-hidden"
          >
            {assetArray[nextIndex]}
          </div>
        </div>
      </div>
      <div className="space-x-4">
        <button onClick={handleOnGetNextAsset}>+</button>
        <button onClick={handleOnGetPreviousAsset}>-</button>
      </div>
    </>
  );
};

export default AssetCyclicalSlider;
