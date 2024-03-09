import type { Metadata } from "next";
import { aperçuFont, rozhaOneFont, libreBodoniFont } from "@/utils/functions/localfontloader";

import Footer from "@/frontend/sections/footer/footer";

import "./globals.css";

export const metadata: Metadata = {
  title: "Solutioner",
  description: "A Next.js 14 home services app by Nuno Rodrigues",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const tailwindThemeEnabler ="dark"
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${aperçuFont.variable} ${rozhaOneFont.variable} ${libreBodoniFont.variable}  antialiased overflow-x-hidden `}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
