import { useEffect } from "react";

const useInstantScrollToTop = () => {
    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }, []);
}

export default useInstantScrollToTop;