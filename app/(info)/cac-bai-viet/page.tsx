"use client";
import { instance } from "@/config";
import { postState } from "@/store";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const CacBaiViet = () => {
  const { posts, setPost } = postState();
  useEffect(() => {
    setPost();
  }, []);
  return (
    <section className="py-10 px-5">
      <div className="space-y-5 w-full">
        <p className="max-sm:text-base text-xl">
          <span className="text-greenTheme">Trang chủ </span>
          {">>"} Bài viết
        </p>
        <h2 className="text-xl text-greenTheme font-bold max-sm:text-base">
          Category Archives: Bài viết
        </h2>
        <div className="max-sm:text-base text-xl">
          <p>
            <span className="font-bold">Trần lê</span> với sứ mệnh nỗ lực từng
            ngày trong việc trở thành đơn vị cung cấp các dịch vụ dọn dẹp hàng
            đầu trên thị trường cùng những giải pháp linh hoạt và toàn diện
            nhất.
          </p>
          <br />
          <p>
            <span className="font-bold">Trần lê</span> ra đời với mong muốn mang
            đến một không gian sống sạch sẽ, trong lành, thoải mái và hạnh phúc
            cho các gia đình. Không những thế, với các dịch vụ vệ sinh văn
            phòng, chúng tôi còn hướng đến sự tiện nghi và thành công cho các
            công ty…
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <h3 className="mt-5 font-bold text-xl text-greenTheme">
          Các bài viết bạn có thể quan tâm
        </h3>
        <Link
          href={"/tao-bai-viet"}
          className="text-greenTheme cursor-pointer flex items-center space-x-1 text-xl"
        >
          <span>Tạo bài viết mới</span>{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-badge-plus"
            >
              <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
              <line x1="12" x2="12" y1="8" y2="16" />
              <line x1="8" x2="16" y1="12" y2="12" />
            </svg>
          </span>
        </Link>
      </div>
      <div className="grid grid-cols-3 mt-5 max-lg:grid-cols-1 gap-10">
        {posts?.map((item: any, index) => {
          return (
            <Link
              href={`/bai-viet/${item.id}`}
              key={index}
              className="space-y-5 cursor-pointer hover:text-greenTheme"
            >
              <Image
                src={"/post1.jpg"}
                alt="dich-vu-ban-quan-tam"
                width={300}
                height={150}
                className="w-full"
              />
              <p className="text-xl max-sm:text-base text-left font-bold">
                {item?.title}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default CacBaiViet;
