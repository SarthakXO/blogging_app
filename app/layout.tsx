import type { Metadata } from "next";

import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blogging App by SarthakXO",
  description:
    "Blogging App created by Sarthak as a personal project using Next JS, Tailwind CSS, TypeScript, Mongoose, Formik, YUP among other things. Check out my github at github.com/SarthakXO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-black text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
