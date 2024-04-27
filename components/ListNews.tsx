import Image from "next/image";
import React from "react";
import { newsModel } from "@/constants";
import Link from "next/link";
const ListNews = () => {
  return (
    <section>
      <h2 className="font-bold text-2xl max-sm:text-lg text-greenTheme">
        Bài viết mới nhất
      </h2>
      <div className="border space-y-7 mt-5 p-5">
        {newsModel.map((item, index) => {
          return (
            <Link
              href={`/tin-tuc${item.link}`}
              key={index}
              className="hover:text-greenTheme cursor-pointer"
            >
              <div className="flex items-center space-x-5">
                <Image
                  alt="anh-tin-tuc"
                  src={item.img}
                  width={150}
                  height={150}
                  className="w-[70px] rounded-full h-[70px] max-sm:w-[40px] max-sm:h-[40px]"
                />
                <div>
                  <p className="text-xl max-sm:text-base">{item.modelCotent}</p>
                </div>
              </div>
              <br />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default ListNews;
