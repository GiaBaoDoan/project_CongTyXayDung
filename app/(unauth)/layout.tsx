"use client";
import { _redirect } from "@/action";
import { userState } from "@/store";
import { useEffect } from "react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = userState();

  useEffect(() => {
    if (user) _redirect("/");
  }, []);
  return <>{children}</>;
}
