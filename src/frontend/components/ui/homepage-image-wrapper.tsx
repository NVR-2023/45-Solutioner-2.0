import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: .9,
    },
  },
};

type HomepageImageWrapperProps = {
  src: string;
  alt: string;
};

const HomepageImageWrapper = ({ src, alt }: HomepageImageWrapperProps) => {
  enum ImageLoadingStatuses {
    PENDING = "pending",
    LOADED = "loaded",
    FAILED = "failed",
  }

  const [imageLoadingStatus, setImageLoadingStatus] =
    useState<ImageLoadingStatuses>(ImageLoadingStatuses.PENDING);

  return (
    <motion.div variants={variants} initial="initial" animate="animate"
  
    >
      {(imageLoadingStatus === ImageLoadingStatuses.PENDING ||
        imageLoadingStatus === ImageLoadingStatuses.LOADED) && (
        <div className="relative">
          <Image
            src={src}
            alt={alt}
            width={1920}
            height={1080}
            priority={true}
            onLoad={() => {
              setImageLoadingStatus(ImageLoadingStatuses.LOADED);
            }}
            onError={() => {
              setImageLoadingStatus(ImageLoadingStatuses.FAILED);
            }}
            className={
              imageLoadingStatus === ImageLoadingStatuses.PENDING
                ? "hidden"
                : "flex"
            }
          />
        </div>
      )}
      {(imageLoadingStatus === ImageLoadingStatuses.PENDING ||
        imageLoadingStatus === ImageLoadingStatuses.FAILED) && (
        <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
          className="h-screen w-screen"
        ></motion.div>
      )}
    </motion.div>
  );
};

export default HomepageImageWrapper;
