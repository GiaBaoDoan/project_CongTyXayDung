"use client";

import { _redirect } from "@/action";
import { instance } from "@/config";
import Image from "next/image";
import { FormEvent, useRef, useState } from "react";
import { toast } from "react-toastify";
import isURL from "validator/lib/isURL";

type TArray = {
  id: number;
  content: string;
};

let nextKeywordsId = 0,
  nextLinksId = 0;

export default function TaoPost() {
  const [title, setTitle] = useState<string>("Nhập tiêu đề ở đây");
  const [desc, setDesc] = useState<string>("Nhập mô tả ở đây");
  const [content, setContent] = useState<string>("Nhập nội dung ở đây");
  const [keywords, setKeywords] = useState<Array<TArray>>([]);
  const [links, setLinks] = useState<Array<TArray>>([]);
  const [image, setImage] = useState<string | File>("/post1.jpg");
  const titleRef = useRef<null | HTMLInputElement>(null);
  const descRef = useRef<null | HTMLInputElement>(null);
  const contentRef = useRef<null | HTMLTextAreaElement>(null);
  const imageRef = useRef<null | HTMLInputElement>(null);
  const keywordsRef = useRef<null | HTMLInputElement>(null);
  const linksRef = useRef<null | HTMLInputElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (typeof image === "string") {
      return toast.error("Vui lòng cung cấp hình ảnh");
    }

    if (!title || !desc || !content || !keywords.length || !links.length) {
      return toast.error("Vui lòng nhập đầy đủ những trường bắt buộc");
    }

    try {
      const res = await instance.postForm(
        "/post/create/",
        {
          title: titleRef.current?.value!,
          description: descRef.current?.value!,
          content: contentRef.current?.value!,
          keywords: keywords.map(({ content }) => content),
          links: links.map(({ content }) => content),
          image,
        },
      );

      if (res.data.code === 200) {
        toast.success("Tạo bài viết thành công");
        _redirect("/bai-viet");
      } else {
        return toast.error("Đã xảy ra lỗi khi đăng bài");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex w-full max-lg:flex-col lg:px-10 px-5 py-16  gap-8 bg-white">
      <form onSubmit={handleSubmit} className="basis-3/5">
        <div className="text-center text-2xl max-sm:text-lg text-black/90 font-semibold">
          Tạo bài đăng mới
        </div>
        <label className="form-control w-full">
          <div className="label">
            <span className="text-base max-sm:text-base">
              Tiêu đề của bài đăng? <span className="text-red-400">*</span>
            </span>
          </div>
          <input
            onChange={() => setTitle(titleRef.current?.value!)}
            ref={titleRef}
            type="text"
            placeholder="Tiêu đề"
            className="input bg-white input-bordered w-full"
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="text-base">
              Mô tả của bài đăng? <span className="text-red-400">*</span>
            </span>
          </div>
          <input
            onChange={() => setDesc(descRef.current?.value!)}
            ref={descRef}
            type="text"
            placeholder="Mô tả"
            className="input bg-white input-bordered w-full"
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="text-base">
              Nội dung của bài đăng? <span className="text-red-400">*</span>
            </span>
          </div>
          <textarea
            onChange={() => setContent(contentRef.current?.value!)}
            ref={contentRef}
            className="textarea textarea-bordered bg-white h-24"
            placeholder="Nhập nội dung ở đây"
          ></textarea>
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="text-base">
              Hình ảnh của bài đăng? <span className="text-red-400">*</span>
            </span>
          </div>
          <input
            onChange={() =>
              setImage(
                imageRef.current?.files
                  ? imageRef.current.files[0]
                  : "/post1.jpg",
              )
            }
            ref={imageRef}
            type="file"
            placeholder="Hình ảnh"
            className="input bg-white input-bordered w-full"
          />
        </label>
        <div className="flex max-lg:flex-col lg:gap-3 gap-1">
          <label className="form-control w-full">
            <div className="label">
              <span className="text-base">
                Từ khóa của bài viết? <span className="text-red-400">*</span>
              </span>
            </div>
            <div className="flex gap-3">
              <input
                ref={keywordsRef}
                type="text"
                placeholder="Thêm một từ khóa cho bài viết"
                className="input input-bordered w-full bg-white"
              />
              <button
                className="bg-greenTheme px-3 max-sm:text-base text-white rounded-lg"
                onClick={(e) => {
                  e.preventDefault();
                  const value = keywordsRef.current?.value;
                  if (!value) {
                    return toast.error(
                      "Vui lòng nhập đầy đủ nội dung trước khi thêm",
                    );
                  }
                  setKeywords([
                    ...keywords,
                    {
                      id: nextKeywordsId++,
                      content: keywordsRef.current?.value!,
                    },
                  ]);
                }}
              >
                Thêm
              </button>
            </div>
            <ul className="menu bg-white mt-3 w-full rounded-box divide-y-[1px] divide-black/20">
              {keywords.map(({ id, content }, i) => {
                return (
                  <li key={i} className="flex flex-row gap-1 py-1">
                    <span className="flex-1">{content}</span>
                    <button
                      className="h-full text-white bg-red-500"
                      onClick={(e) => {
                        e.preventDefault();
                        setKeywords(keywords.filter((i) => i.id !== id));
                        if (keywordsRef.current) {
                          keywordsRef.current.value = "";
                        }
                      }}
                    >
                      Xóa
                    </button>
                  </li>
                );
              })}
            </ul>
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="text-base">
                Đường dẫn liên quan của bài viết?{" "}
                <span className="text-red-400">*</span>
              </span>
            </div>
            <div className="flex gap-3">
              <input
                ref={linksRef}
                type="text"
                placeholder="Thêm một đường dẫn liên quan cho bài viết"
                className="input input-bordered w-full bg-white"
              />
              <button
                className="bg-greenTheme px-3 text-white max-sm:text-base rounded-lg "
                onClick={(e) => {
                  e.preventDefault();
                  const value = linksRef.current?.value;
                  if (!value) {
                    return toast.error(
                      "Vui lòng nhập đầy đủ nội dung trước khi thêm",
                    );
                  }
                  if (!isURL(value)) {
                    return toast.error("Trường này cần một đường dẫn");
                  }
                  setLinks([
                    ...links,
                    { id: nextLinksId++, content: linksRef.current?.value! },
                  ]);
                }}
              >
                Thêm
              </button>
            </div>
            <ul className="menu bg-white mt-3 w-full rounded-box divide-y-[1px] divide-black/20">
              {links.map(({ id, content }, i) => {
                return (
                  <li key={i} className="flex flex-row gap-1 py-1">
                    <span className="flex-1">{content}</span>
                    <button
                      className="h-full text-white bg-red-500"
                      onClick={(e) => {
                        e.preventDefault();
                        setLinks(links.filter((i) => i.id !== id));
                        if (linksRef.current) {
                          linksRef.current.value = "";
                        }
                      }}
                    >
                      Xóa
                    </button>
                  </li>
                );
              })}
            </ul>
          </label>
        </div>
        <button
          type="submit"
          className="btn bg-greenTheme px-3 max-sm:text-base text-white rounded-lg"
        >
          Đăng bài
        </button>
      </form>
      <div className="basis-2/5 card lg:w-96 w-full shadow-xl">
        <figure>
          <Image
            src={typeof image === "string" ? image : URL.createObjectURL(image)}
            alt={`${title} image`}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
        </figure>
        <div className="card-body">
          <h1 className="card-title">{title}</h1>
          <h2 className="text-xl">{desc}</h2>
          <p>{content}</p>
          <h3>Các liên kết liên quan</h3>
          <ul className="flex flex-col">
            {links.map(({ content }, i) => {
              return <li key={i}>{content}</li>;
            })}
          </ul>
          <ul className="card-actions justify-end">
            {keywords.map(({ content }, i) => {
              return (
                <li key={i} className="badge m-0.5 badge-outline">
                  {content}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
