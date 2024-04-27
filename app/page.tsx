"use client";
import { About, Banner, BannerInfor, Commit, Model, News } from "@/components";
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
