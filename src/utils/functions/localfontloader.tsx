import localFont from "next/font/local";

export const aperçuFont = localFont({
  src: [
    {
      path: "../../../public/fonts/Apercu-Pro-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Apercu-Pro-Light-Italic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../../public/fonts/Apercu-Pro-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Apercu-Pro-Regular-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../../public/fonts/Apercu-Pro-Medium.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Apercu-Pro-Medium-Italic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../../public/fonts/Apercu-Pro-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Apercu-Pro-Bold-Italic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../../public/fonts/Apercu-Pro-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-Aperçu",
});

export const rozhaOneFont = localFont({
  src: [
    {
      path: "../../../public/fonts/RozhaOne-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-RozhaOne",
});

export const libreBodoniFont = localFont({
  src: [
    {
      path: "../../../public/fonts/LibreBodoni-VariableFont_wght.ttf",
      style: "normal",
    },
  ],
  variable: "--font-LibreBodoni",
});
