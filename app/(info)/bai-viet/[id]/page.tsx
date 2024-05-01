"use client";
import { instance } from "@/config";
import { postState } from "@/store";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
const DetailPage = () => {
  const params = useParams();
  const { detailPost, setDetailPost } = postState();
  useEffect(() => {
    setDetailPost(params?.id);
  }, []);

  return (
    <section>
      <div className="space-y-3">
        <h3 className="text-xl text-greenTheme">
          <span className="text-black">Chi tiết bài đăng:</span>{" "}
          {detailPost?.title}
        </h3>
        <p className="text-xl font-bold text-greenTheme">
          {detailPost?.description}
        </p>
        <p className="text-xl">{detailPost?.content}</p>

        <div className="space-y-2">
          <p className="text-xl">Các từ khóa liên quan:</p>
          {detailPost?.keywords.map((keyword: string) => {
            return (
              <ul className="text-xl px-5 list-decimal">
                <li>
                  <span>{keyword}</span>
                </li>
              </ul>
            );
          })}
        </div>
        <div className="space-y-2">
          <p>Các nguồn kham khảo</p>
          {detailPost?.links.map((link: string) => {
            return (
              <ul className="list-disc px-5">
                <li>
                  <Link href={link} className="underline text-greenTheme">
                    <p className="text-xl ">{link}</p>
                  </Link>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DetailPage;
