import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Công ty vệ sinh công nghiệp Trần Lê",
  description: "Tìm Kiếm Hợp Đồng Xây Dựng",
  icons: {
    icon: "/logo.png",
  },
};

import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <html lang="vi">{children}</html>;
}
