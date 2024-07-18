import React from "react";
import PropTypes from "prop-types"; // Add this import
import { Open_Sans } from "next/font/google";
import { Raleway } from "next/font/google";
// eslint-disable-next-line no-unused-vars
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
const openSans = Open_Sans({ subsets: ["latin"] ,weight: ['300','400', '600'],display: 'swap', variable: '--font-open-sans',});
const raleway = Raleway({ subsets: ["latin"], weight: ['100','200','300','400', '600'],display: 'swap', variable: '--font-raleway', });


import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export const metadata = {
  title: "Sedo Logistics",
  description: "Sedo Logistics develops comprehensive freight forwarding, project logistics and relocation service plans tailored to meet specific requirements of customer",
};


RootLayout.propTypes = {
  children: PropTypes.node.isRequired, // Add this prop type validation
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <SpeedInsights></SpeedInsights>
      <Analytics></Analytics>
      <meta property="og:image" content="/logo 3.png" />
      <meta property="og:title" content="Sedo Logistics Limited - Leading logistics company providing best logistics Solution" />
      <meta property="og:url" content="https://www.sedologistics.co.ke/" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className={`${openSans.variable} ${raleway.variable}  lg:w-[85%] m-auto`}>

        <Navbar />
        {children}
        <Footer/>
        </body>
    </html>
  );
}
