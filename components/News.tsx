"use client";
import React, { useEffect } from "react";
import { postState } from "@/store";
import CardPost from "./CardPost";
const News = () => {
  const { setPost, posts } = postState();
  useEffect(() => {
    setPost();
  }, []);
  return (
    <section
      style={{ backgroundColor: "rgb(246, 246, 247)" }}
      className="py-20 px-10 max-lg:px-5"
    >
      <h2 className="text-center text-2xl max-sm:text-lg font-bold">
        BÀI VIẾT TIN TỨC
      </h2>
      <div className="cardNews grid mt-5 grid-cols-4 max-lg:grid-cols-2 gap-10 max-sm:gap-5">
        {posts?.map((item: any) => {
          return <CardPost blog={item} />;
        })}
      </div>
    </section>
  );
};

export default News;
