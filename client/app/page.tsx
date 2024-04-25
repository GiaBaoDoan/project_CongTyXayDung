"use client";
import { About, Commit, Model, News, Banner, BannerInfor } from "@/components";
import { useEffect } from "react";
export default function Home() {
  return (
    <main className="">
      <Banner />
      <About />
      <BannerInfor />
      <Commit />
      <Model />
      <News />
    </main>
  );
}
