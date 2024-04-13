"use client";
import { Infor, Title } from "@/components";
import About from "@/components/About";
import Hotline from "@/components/Hotline";
import News from "@/components/News";
import Service from "@/components/Service";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [banner, setBanner] = useState("/banner.png");
  const params = useParams<{ tag: string; item: string }>();
  // useEffect(() => {
  //   setTimeout(() => {
  //     let index = listBanner.indexOf(banner);
  //     if (index > listBanner.length - 1) {
  //       setBanner(listBanner[0]);
  //     } else {
  //       setBanner(listBanner[index + 1]);
  //     }
  //   }, 3000);
  // }); //
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
      <section className="py-16 px-10">
        <div className="flex justify-center ">
          <Title content="HÌNH ẢNH THỰC TẾ" />
        </div>
        <div className="flex flex-wrap gap-10 mt-10 xl:justify-start justify-center">
          {[1, 2, 3, 4, 5, 6].map((item) => {
            return (
              <Image
                className="rouned-sm"
                src={"/banner1.png"}
                alt="hinh-anh-thuc-te"
                width={550}
                height={400}
              />
            );
          })}
        </div>
      </section>
      <News />
    </main>
  );
}
