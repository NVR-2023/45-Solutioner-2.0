type SLiderControlsProps = {
  handleOnGetNextInNextItem: () => void;
  handleOnGetPreviousItem: () => void;
};

const SliderControls = ({
  handleOnGetNextInNextItem,
  handleOnGetPreviousItem,
}: SLiderControlsProps) => {
  return (
    <div className="flex space-x-1">
      <button
        onClick={handleOnGetNextInNextItem}
        className="flex h-4 w-4 items-center justify-center rounded-[2px] bg-neutral-400 text-neutral-200"
      >
        +
      </button>
      <button
        onClick={handleOnGetPreviousItem}
        className="flex h-4 w-4 items-center justify-center rounded-[2px] bg-neutral-400 text-neutral-200"
      >
        -
      </button>
    </div>
  );
};

export default SliderControls;
