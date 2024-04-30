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

/* 
      <AnimatePresence mode="popLayout">
        {(imageLoadingStatus === ImageLoadingStatuses.PENDING ||
          imageLoadingStatus === ImageLoadingStatuses.LOADED) && (
          <motion.div
            key="image"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`relative ${
              imageLoadingStatus === ImageLoadingStatuses.LOADED
                ? "flex"
                : "hidden"
            }`}
          >
            <Image
              src="https://res.cloudinary.com/dzow47vf1/image/upload/v1714472610/A%20-%20Solutioner%202.0/plumbing_pxvrbd.webp"
              alt="plumbing"
              width={1920}
              height={1080}
              priority={true}
              onError={() => {
                setImageLoadingStatus(ImageLoadingStatuses.FAILED);
              }}
              onLoad={() => {
                setImageLoadingStatus(ImageLoadingStatuses.LOADED);
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="popLayout">
        {imageLoadingStatus === ImageLoadingStatuses.PENDING && (
          <motion.div
            key="fallback"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0 }}
            className="flex"
          >
            <HomepageImageFallback />
          </motion.div>
        )}
      </AnimatePresence> */

/* 
      <>
      {(imageLoadingStatus === ImageLoadingStatuses.PENDING ||
        imageLoadingStatus === ImageLoadingStatuses.LOADED) && (
        <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
          className="absolute inset-0 z-10"
        >
          <Image
            src={src}
            alt={alt}
            width={1920}
            height={1080}
            priority={true}
            onError={() => {
              setImageLoadingStatus(ImageLoadingStatuses.FAILED);
            }}
            onLoad={() => {
              setImageLoadingStatus(ImageLoadingStatuses.LOADED);
            }}
          />
        </motion.div>
      )} */
