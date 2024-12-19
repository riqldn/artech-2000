import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ReactLenis } from './utils/lenis'
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const generalSans = localFont({
  src: [
    {
      path: "./fonts/GeneralSans-Medium.woff",
      weight: "400",
      style: "normal"
    },
    {
      path: "./fonts/GeneralSans-Regular.woff",
      weight: "300",
      style: "normal"
    },
  ],
  variable: "--font-general"

})
export const metadata = {
  title: "Artech 2000 - IT Support and Solutions ",
  description: "At artech 2000 we provide a range of solutions and services such as, cloud offerings, it business solutions, microsoft power platform and more",
  keywords: ["tech support",
    "it solutions",
    "data loss protection",
    "it cloud services",
    "managed it services",
    "computer network infrastructure",
    "cloud offerings",
    "microsoft power platform",
    "cyber Security",
    "odoo erp",
  ],
  metadataBase: new URL("https://www.dev.artech-2000.com/"),
  alternates: {
    canonical: "https://www.dev.artech-2000.com/"
  },
  openGraph:{
    title: "Artech 2000 - IT Support and Solutions ",
  description: "Artech 2000, Specialize in bridging the gap between cutting-edge technology and business objectives, by providing a broad range of IT solutions",
  url: "https://www.dev.artech-2000.com/",
  site_name: "Artech 2000 - IT Support and Solutions ",

  }

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body
          className={`${geistSans.variable} ${generalSans.variable} antialiased`}
        >

          {children}


        </body>
      </ReactLenis>
    </html>
  );
}
