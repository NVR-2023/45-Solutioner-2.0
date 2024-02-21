import type { Metadata } from "next";
import { aperçuFont } from "@/utils/functions/localfontloader";

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
  return (
    <html lang="en" className="!scroll-smooth  ">
      <body className={`${aperçuFont.variable} antialiased `}>{children}</body>
    </html>
  );
}
