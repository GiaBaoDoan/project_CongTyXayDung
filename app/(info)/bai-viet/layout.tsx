"use client";
import { Comment } from "@/components";
import CardPost from "@/components/CardPost";
import ListComment from "@/components/ListComment";
import { postState, userState } from "@/store";

import {
  FacebookOutlined,
  GooglePlusOutlined,
  PhoneOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import React, { ReactNode, useEffect, useState } from "react";
const Layout = ({ children }: { children: ReactNode }) => {
  const { posts, setPost, maxCount } = postState();
  const [page, setPage] = useState(1);
  const maxPage = Math.ceil(maxCount / 3);
  const { user } = userState();
  useEffect(() => {
    setPost();
  }, []);
  return (
    <section className="px-5 py-10 max-sm:py-5">
      <div className="flex justify-between max-lg:flex-col space-y-5 lg:space-x-10">
        <div className="w-full !text-xl">
          <div>
            <p className="text-2xl font-bold uppercase text-center max-sm:text-lg py-5">
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
            <p className="text-2xl max-sm:text-lg text-greenTheme font-bold max:sm-text-lg">
              Có thể bạn quan tâm:
            </p>
            <div className="grid grid-cols-4 max-lg:grid-cols-1 gap-10">
              {posts.map((item) => {
                return <CardPost blog={item} />;
              })}
            </div>
            <div className="join flex justify-center">
              <button
                onClick={() => page > 1 && setPage(page - 1)}
                className="join-item btn"
              >
                «
              </button>
              <button className="join-item btn">
                Page {page}/{maxPage}
              </button>
              <button
                onClick={() => page < maxPage && setPage(page + 1)}
                className="join-item btn"
              >
                »
              </button>
            </div>
          </div>
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
