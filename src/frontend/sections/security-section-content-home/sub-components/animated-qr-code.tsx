type AnimatedQRCodeProps = {
  scrollYProgress: number;
};

const AnimatedQRCode = ({ scrollYProgress }: AnimatedQRCodeProps) => {
  const scrollYProgressString: string = scrollYProgress?.toFixed(7);

  return (
    <div className="flex flex-col -space-y-1.5">
      <div className="mb-4 text-[.625rem] font-extrabold tracking-wide">
        QR Password
      </div>
      <div className="size-24 bg-orange-300 ">{scrollYProgressString}</div>
     
    </div>
  );
};

export default AnimatedQRCode;
