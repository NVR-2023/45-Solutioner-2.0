import localFont from "next/font/local";

const interTightFont = localFont({
  src: [
    {
      path: "../../public/fonts/InterTight-VariableFont_wght.ttf",
      style: "normal",
    },
    {
      path: "../../public/fonts/InterTight-Italic-VariableFont_wght.ttf",
      style: "italic",
    },
    {
      path: "../../public/fonts/Apercu-Pro-Medium.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Apercu-Pro-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-InterTight",
});

const basisFont = localFont({
  src: [
    {
      path: "../../public/fonts/BasisGrotesqueArabicPro-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/BasisGrotesqueArabicPro-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/BasisGrotesqueArabicPro-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/BasisGrotesqueArabicPro-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/BasisGrotesqueArabicPro-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-Basis",
});

export { interTightFont, basisFont };
