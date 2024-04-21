import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "CongTyXayDung",
  description: "Tìm Kiếm Hợp Đồng Xây Dựng",
};
import { Open_Sans } from "next/font/google";
const open_sans = Open_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});
import "./globals.css";
import { Footer, Navbar, RightSideMenu, Hotline } from "@/components";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={open_sans.className}>
        <Navbar />
        <RightSideMenu />
        {children}
        <Hotline />
        <Footer />
      </body>
    </html>
  );
}
