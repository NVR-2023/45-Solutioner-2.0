import { useState } from "react";

const useToggle = () => {
  const [state, setState] = useState(false);
  const handlers = {
    on: () => setState(true),
    off: () => setState(false),
    toggle: () => setState(!state),
  };
  return { state, handlers };
};

export default useToggle;
