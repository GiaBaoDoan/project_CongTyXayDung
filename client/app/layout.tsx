// "use client";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "CongTyXayDung",
  description: "Tìm Kiếm Hợp Đồng Xây Dựng",
};
import "./globals.css";
import { Footer, Navbar, RightSideMenu } from "@/components";
import Hotline from "@/components/Hotline";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <RightSideMenu />
        {children}
        <Hotline />
        <Footer />
      </body>
    </html>
  );
}
