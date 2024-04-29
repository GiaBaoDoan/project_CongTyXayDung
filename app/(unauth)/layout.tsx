"use client";
import { _redirect } from "@/action";
import { instance } from "@/config";
import { useEffect } from "react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    (async () => {
      const res = await instance.get("/account/", {
        withCredentials: true,
      });
      if (res.data.code === 200) {
        // _redirect("/");
      }
    })();
  }, []);
  return <>{children}</>;
}
