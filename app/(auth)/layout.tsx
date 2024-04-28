"use client";
import { _redirect } from "@/action";
import { instance } from "@/config";
import { useEffect, useState } from "react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [user, setUser] = useState<any>();
  useEffect(() => {
    (async () => {
      const res = await instance.get("/account/", {
        withCredentials: true,
      });
      if (res.data.code === 200) {
        setUser(res.data.data);
      } else {
        _redirect("/dang-nhap");
      }
    })();
  }, []);
  return <>{children}</>;
}
