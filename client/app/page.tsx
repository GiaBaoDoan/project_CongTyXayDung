"use client";
import { About, Commit, Model, News, Banner, BannerInfor } from "@/components";
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
