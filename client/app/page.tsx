"use client";
import { Infor } from "@/components";
import About from "@/components/About";
import Service from "@/components/Service";
import { listBanner } from "@/constants";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [banner, setBanner] = useState("/banner.png");
  const params = useParams<{ tag: string; item: string }>();
  useEffect(() => {
    setTimeout(() => {
      let index = listBanner.indexOf(banner);
      if (index > listBanner.length - 1) {
        setBanner(listBanner[0]);
      } else {
        setBanner(listBanner[index + 1]);
      }
    }, 3000);
  }); //
  return (
    <main className="">
      <Image
        src={"/banner1.png"}
        width={1000}
        className="w-full object-contain"
        height={700}
        alt="Banner"
      />
      <About />
      <Infor />
      <Service />
    </main>
  );
}
