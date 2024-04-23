"use client";
import { About, Commit, Model, News, Banner, BannerInfor } from "@/components";
import axios from "axios";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    (async () => {
      const res = await axios.get("https://api.xaydungtranle.vn//")
      console.log(res.data)
    })()
  }, [])
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
