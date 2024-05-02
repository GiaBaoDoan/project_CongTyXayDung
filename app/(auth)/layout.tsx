"use client";
import { _redirect } from "@/action";
import { userState } from "@/store";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user, loading } = userState();

  useEffect(() => {
    if (!user && !loading) {
      _redirect("/");
      toast.error("Bạn cần phải đăng nhập trước!!");
    }
  }, []);
  return <>{children}</>;
}
