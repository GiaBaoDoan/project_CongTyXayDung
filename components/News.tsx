"use client";
import React from "react";
import Posts from "./Posts";
const News = () => {
  return (
    <section
      style={{ backgroundColor: "rgb(246, 246, 247)" }}
      className="py-20 px-10 max-lg:px-5"
    >
      <h2 className="text-center text-2xl max-sm:text-lg font-bold">
        BÀI VIẾT TIN TỨC
      </h2>
      <Posts />
    </section>
  );
};

export default News;
