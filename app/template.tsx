"use client";
import { Footer, Hotline, Navbar, RightSideMenu } from "@/components";
import { instance } from "@/config";
import { Open_Sans } from "next/font/google";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { userState } from "@/store";
const font = Open_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});
export default function RootTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { setUser } = userState();
  useEffect(() => {
    setUser()
  }, []);
  return (
    <body className={`${font.className} bg-white`}>
      <Navbar />
      <RightSideMenu />
      {children}
      <ToastContainer />
      <Hotline />
      <Footer />
    </body>
  );
}
