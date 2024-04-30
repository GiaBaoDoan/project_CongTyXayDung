"use client";
import { _redirect } from "@/action";
import { userState } from "@/store";
import { useEffect } from "react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user, loading } = userState();

  useEffect(() => {
    console.log("User: ", user);
    if (user && !loading) _redirect("/");
  }, [user]);
  return <>{children}</>;
}
