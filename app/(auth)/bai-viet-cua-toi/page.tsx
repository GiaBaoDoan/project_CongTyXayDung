"use client";
import { postState, userState } from "@/store";
import Link from "next/link";
import { useEffect } from "react";

const BaiVietCuaToi = () => {
  const { user } = userState();
  const { getMyPost, myPost } = postState();
  useEffect(() => {
    getMyPost("96a040a9-f6cb-47c1-8bcb-a7e8392abd7a");
  }, []);
  console.log(myPost);
  return (
    <section className="py-10 min-h-[300px]">
      {myPost.length ? (
        <div>Helo</div>
      ) : (
        <h3 className="text-2xl flex justify-center items-center text-greenTheme">
          Bạn chưa có bài viết nào !!.{" "}
          <Link href={"/tao-bai-viet"}>Tạo bài viết đầu tiên</Link>
        </h3>
      )}
    </section>
  );
};

export default BaiVietCuaToi;
