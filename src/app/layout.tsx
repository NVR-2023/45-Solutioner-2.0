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
  const TAILWIND_DAR_THEME_ENABLER: "dark" = "dark";
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body
        className={`${aperçuFont.variable} ${rozhaOneFont.variable} ${libreBodoniFont.variable} overflow-x-hidden antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
