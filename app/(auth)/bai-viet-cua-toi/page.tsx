"use client";
import { _redirect } from "@/action";
import CardPost from "@/components/CardPost";
import Posts from "@/components/Posts";
import { instance } from "@/config";
import { baseUrlImage } from "@/constants";
import { postState, userState } from "@/store";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
const BaiVietCuaToi = () => {
  const { user } = userState();
  const { myPost, setMyPost } = postState();
  const maxPage = myPost?.count && Math.ceil(myPost?.count / 4);
  const [page, setPage] = useState(1);
  const deletePost = async (id: string) => {
    try {
      await instance.delete(`/post/${id}`);
      toast.success("Xóa bài viết thành công");
      setMyPost(user?.id, page);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    setMyPost(user?.id, page);
  }, [user?.id]);
  return (
    <section className="p-24 px-10">
      <h3 className="text-center text-greenTheme text-2xl max-sm:text-base">
        Bài viết của tôi
      </h3>
      <button
        onClick={() => _redirect("/tao-bai-viet")}
        className="bg-greenTheme rounded-lg hover:bg-green-700 font-medium text-white px-5 py-3"
      >
        Tạo bài viết mới
      </button>
      <div className="grid grid-cols-4 mt-10 max-lg:grid-cols-1 gap-10">
        {myPost?.data?.map((item: any) => {
          return (
            <div key={item.id} className="border rounded-lg">
              <div>
                <Image
                  width={300}
                  height={150}
                  className="w-full"
                  src={baseUrlImage(item.images[0])}
                  alt="anh-card"
                />
                <div className="p-5">
                  <h4 className="text-xl font-bold">{item.title}</h4>
                  <p className="line-clamp-3 text-xl max-sm:text-base">
                    {item?.description}
                  </p>
                </div>
              </div>
              <div className="p-5 text-base">
                <div className="flex justify-between space-x-1 items-center">
                  <p className="text-base">
                    <span className="font-medium">Ngày đăng{" : "}</span>
                    <span className="text-greenTheme">
                      {" "}
                      {format(parseISO(item?.createAt || ""), "dd-MM-yyyy")}
                    </span>
                  </p>
                  <p className="text-lg">
                    <span className="font-medium">Tác giả:</span>{" "}
                    <span className="text-greenTheme">{item.author.name}</span>
                  </p>
                </div>
                <div className="mt-5 flex justify-between items-center">
                  <button
                    className="bg-red-500 font-medium max-sm:text-base transition-all hover:bg-red-600 px-5 py-2  rounded-lg p-5 text-white"
                    onClick={() => deletePost(item.id)}
                  >
                    Xóa
                  </button>
                  <button
                    className="bg-greenTheme font-medium max-sm:text-base transition-all hover:bg-green-700 px-5 py-2  rounded-lg p-5 text-white"
                    onClick={() => _redirect(`/sua-bai-viet/${item.id}`)}
                  >
                    Sửa
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {myPost?.data?.length > 4 && (
        <div className="join flex mt-5 justify-center">
          <button
            onClick={() => page > 1 && setPage(page - 1)}
            className="join-item btn max-sm:text-base"
          >
            «
          </button>
          <button className="join-item btn max-sm:text-base">
            Page {page}/{maxPage}
          </button>
          <button
            onClick={() => page < maxPage && setPage(page + 1)}
            className="join-item btn max-sm:text-base"
          >
            »
          </button>
        </div>
      )}
    </section>
  );
};

export default BaiVietCuaToi;
