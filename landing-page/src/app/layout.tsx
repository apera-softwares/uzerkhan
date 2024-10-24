import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./css/default-skin/preloader.gif";
import "./css/default-skin/preloader.gif";
import "./css/justifiedGallery.min.css";
import "./css/line-awesome.css";
import "./css/photoswipe.css";
import "./css/responsive.css";
import "./css/style.css";
import "./css/tiny-slider.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "UZER KHAN",
  description:
    "I’m an ad director, but let’s face it: I’m really a salesman in a director’s cap. Filmmaking is just my clever tactic to turn art into sales!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ashade-home-template has-spotlight ashade-smooth-scroll`}
      > */}
      {children}
      {/* </body> */}
    </html>
  );
}
