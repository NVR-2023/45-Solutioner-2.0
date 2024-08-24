"use client";

// @ts-ignore
import { interpolate } from "flubber";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { motion, animate, useMotionValue, useTransform, useInView } from "framer-motion";
import { wait } from "@/utils/functions/wait";

type SVGMorphProps = {
  pathsArray: string[];
  duration?: number;
};
const SVGMorph = ({ pathsArray, duration = 1 }: SVGMorphProps) => {
  const [pathIndex, setPathIndex] = useState(0);
  const progress = useMotionValue(pathIndex);

  const indexesArray = pathsArray.map((_, i) => i);
  const svgPath = useTransform(progress, indexesArray, pathsArray, {
    mixer: (currentPath, nextPath) =>
      interpolate(currentPath, nextPath, { maxSegmentLength: 5 }),
  });

  useLayoutEffect(() => {
    const pauseAtTheBeginning = async () => {
      await wait(100);
    };

    pauseAtTheBeginning();
  }, []);

  useEffect(() => {
    const animation = animate(progress, pathIndex, {
      duration: duration,
      ease: [0.16, 1, 0.3, 1],
      onComplete: () => {
        if (pathIndex === pathsArray.length - 1) {
          progress.set(0);
          setPathIndex(1);
        } else {
          setPathIndex(pathIndex + 1);
        }
      },
    });
    return () => {
      animation.stop();
    };
  }, [pathIndex]);

  return (
    <motion.path fill="none" stroke="#fc6900" strokeWidth="10" d={svgPath} />
  );
};

export default SVGMorph;
