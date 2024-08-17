import QRCode from "react-qr-code";

type AnimatedQRCodeProps = {
  scrollYProgress: number;
};

const AnimatedQRCode = ({ scrollYProgress }: AnimatedQRCodeProps) => {
  const scrollYProgressString: string = scrollYProgress?.toString();

  return (
    <div className="flex flex-col -space-y-1.5">
      <div className="flex size-24 items-center justify-center">
        <QRCode
          size={32}
          bgColor="rgba(212, 212, 212, 0.18)"
          fgColor="#fc6900"
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={scrollYProgressString ?? "Solutioner"}
        />
      </div>
    </div>
  );
};

export default AnimatedQRCode;
