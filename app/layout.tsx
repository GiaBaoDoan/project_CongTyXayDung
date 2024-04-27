import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Cong Ty Xay Dung",
  description: "Tìm Kiếm Hợp Đồng Xây Dựng",
};

import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {children}
    </html>
  );
}
