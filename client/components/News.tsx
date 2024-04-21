import React from "react";
import Image from "next/image";
import Link from "next/link";
import { newsModel } from "@/constants";
const News = () => {
  return (
    <section
      style={{ backgroundColor: "rgb(246, 246, 247)" }}
      className="py-20 px-10  max-lg:px-5"
    >
      <h2 className="text-center text-3xl max-sm:text-xl font-bold">
        BÀI VIẾT TIN TỨC
      </h2>
      <div className="cardNews grid mt-5 grid-cols-4 max-lg:grid-cols-2 gap-10 max-sm:gap-5">
        {newsModel.map((item, index) => {
          return (
            <Link key={index} href={"/"}>
              <div className="flex flex-col space-y-3 mt-5">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={item.img}
                    width={400}
                    loading="lazy"
                    height={400}
                    className="overflow-hidden w-full h-[30%] transition-all hover:scale-110 "
                    alt="post-news-1 "
                  />
                </div>
                <h3 className="font-bold text-xl max-md:text-xl max-sm:text-[15px] max-sm:leading-[22px] hover:text-greenTheme">
                  {item.title}
                </h3>
                <p className="font-normal max-lg:hidden text-xl hover:text-greenTheme">
                  {item.modelCotent}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default News;
