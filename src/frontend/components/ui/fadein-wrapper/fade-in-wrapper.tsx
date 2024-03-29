import { useState, useEffect, ReactNode } from "react";

type FadeInWrapperProps = {
  children: ReactNode;
};

const FadeInWrapper = ({ children }: FadeInWrapperProps) => {
  const [isComponentMounted, setIsComponentMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsComponentMounted(true);
    return () => {
      setIsComponentMounted(false);
    };
  }, []);

  return (
    <span
      className={`transition-opacity duration-500 ${isComponentMounted ? "opacity-100" : "opacity-0"}`}
    >
      {children}
    </span>
  );
};

export default FadeInWrapper;
