"use client";
import { Comment } from "@/components";
import ListComment from "@/components/ListComment";
import Posts from "@/components/Posts";
import { userState } from "@/store";
import {
  FacebookOutlined,
  GooglePlusOutlined,
  PhoneOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import React, { ReactNode } from "react";
const Layout = ({ children }: { children: ReactNode }) => {
  const { user } = userState();
  return (
    <section className="px-5 py-10 max-sm:py-5">
      <div className="flex justify-between max-lg:flex-col lg:space-x-10">
        <div className="w-full !text-xl">
          <div>
            <p className="text-2xl font-bold uppercase text-center max-sm:text-lg">
              <span className="text-greenTheme">Chi tiết bài đăng</span>
            </p>
          </div>
          {children}
          <hr />
          <div className="soicals space-y-5 py-5">
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
          <hr />
          <div className="mt-5 space-y-5">
            <p className="text-xl max-sm:text-lg text-greenTheme font-bold max:sm-text-base">
              Có thể bạn quan tâm:
            </p>
          </div>
          <Posts />
          <br />
          <hr />
          <ListComment />
          {user && <Comment />}
        </div>
      </div>
    </section>
  );
};

export default Layout;
