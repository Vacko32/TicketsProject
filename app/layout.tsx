import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Body from "./components/Body/Body";

const inter = Inter({ subsets: ["latin"] });
const font = Nunito({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Fly with Us!",
  description: "Buy the cheapest flight tickets online!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        <Body />
      </body>
    </html>
  );
}
