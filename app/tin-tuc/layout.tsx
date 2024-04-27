"use client";
import { Comment, ListNews } from "@/components";
import { newsModel } from "@/constants";
import {
  FacebookOutlined,
  GooglePlusOutlined,
  PhoneOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="px-5 py-10 max-sm:py-5">
      <div className="flex justify-between max-lg:flex-col space-y-5 lg:space-x-10">
        <div className="w-full !text-xl">
          {children}
          <div className="soicals space-y-5 mt-5">
            <ul className="flex space-x-5">
              <li className="border-black rounded-full">
                <Link href={"/"}>
                  <FacebookOutlined style={{ fontSize: "30px" }} />
                </Link>
              </li>
              <li className="border-black rounded-full">
                <Link href={"/"}>
                  <TwitterOutlined style={{ fontSize: "30px" }} />
                </Link>
              </li>
              <li className="border-black rounded-full">
                <Link href={"/"}>
                  <PhoneOutlined style={{ fontSize: "30px" }} />
                </Link>
              </li>
              <li className="border-black rounded-full">
                <Link href={"/"}>
                  <GooglePlusOutlined style={{ fontSize: "30px" }} />
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-5">
            <p className="text-2xl border-t border-b py-5">
              Danh mục : <span className="text-greenTheme">Tin túc</span>
            </p>
          </div>
          <div className="mt-5 space-y-5">
            <p className="text-2xl text-greenTheme font-bold max:sm-text-lg">
              Có thể bạn quan tâm:
            </p>
            <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-10">
              {newsModel.slice(0, 5).map((item, index) => {
                return (
                  <Link
                    href={`/tin-tuc${item.link}`}
                    key={index}
                    className="space-y-5 cursor-pointer hover:text-greenTheme"
                  >
                    <Image
                      src={item.img}
                      alt="dich-vu-ban-quan-tam"
                      width={300}
                      height={150}
                      className="w-full"
                    />
                    <p className="text-xl max-sm:text-base text-left font-bold">
                      {item.title}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
          <Comment />
        </div>
        <ListNews />
      </div>
    </section>
  );
};

export default Layout;
