"use client";
import { _redirect } from "@/action";
import { instance } from "@/config";
import Image from "next/image";
import { Editor } from "@tinymce/tinymce-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import isURL from "validator/lib/isURL";
import { postState } from "@/store";
import { useParams } from "next/navigation";
type TArray = {
  id: number;
  content: string;
};
let nextKeywordsId = 0,
  nextLinksId = 0;
export default function SuaBaiViet() {
  const { detailPost, setDetailPost } = postState();
  const params = useParams();
  const [title, setTitle] = useState<string>();
  const [desc, setDesc] = useState<string>();
  const [content, setContent] = useState<string>();
  const [keywords, setKeywords] = useState<Array<TArray>>([]);
  const [links, setLinks] = useState<Array<TArray>>([]);
  const [images, setImages] = useState<File[]>([]);
  const titleRef = useRef<null | HTMLInputElement>(null);
  const descRef = useRef<null | HTMLInputElement>(null);
  const contentRef = useRef<any>();
  const imageRef = useRef<null | HTMLInputElement>(null);
  const keywordsRef = useRef<null | HTMLInputElement>(null);
  const linksRef = useRef<null | HTMLInputElement>(null);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!images) {
      return toast.error("Vui lòng cung cấp hình ảnh");
    }
    if (
      !title ||
      !desc ||
      !contentRef.current.getContent() ||
      !keywords.length ||
      !links.length
    ) {
      return toast.error("Vui lòng nhập đầy đủ những trường bắt buộc");
    }
    try {
      const formData = new FormData();
      // formData.set("id", "clvs8hl2m0000uddtd6bywjjo");
      formData.set("title", title);
      formData.set("description", desc);
      formData.set("content", contentRef.current.getContent());
      keywords.forEach((item) => formData.append("keywords", item.content));
      links.forEach((item) => formData.append("links", item.content));
      images.forEach((item) => formData.append("images", item, item.name));
      const res = await instance.postForm("/post/", formData);
      if (res.status === 200) {
        toast.success("Cập nhật thành công");
        _redirect(`/bai-viet/${res.data.id}`);
      }
    } catch (err: any) {
      toast.error(err.response.data);
    }
  };
  useEffect(() => {
    setDetailPost(params.id);
  }, [params.id]);
  return (
    <div className="w-full lg:px-10 px-5 py-16  gap-8 bg-white">
      <form onSubmit={handleSubmit}>
        <div className="text-center text-2xl max-sm:text-lg text-black/90 font-semibold">
          Chỉnh sửa bài viết
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
            // value={title?.length ? title : detailPost?.title}
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
            // value={desc?.length ? desc : detailPost?.desc}
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
          <Editor
            apiKey="h4ht8ma96k9nrapz5dt003828hufgl7qqvgchqxwqczok9ft"
            value={content}
            onInit={(_evt, editor) => (contentRef.current = editor)}
            init={{
              plugins:
                "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown",
              toolbar:
                "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
              tinycomments_mode: "embedded",
              tinycomments_author: "Author name",
              mergetags_list: [
                { value: "First.Name", title: "First Name" },
                { value: "Email", title: "Email" },
              ],
              ai_request: (request: any, respondWith: any) =>
                respondWith.string(() =>
                  Promise.reject("See docs to implement AI Assistant"),
                ),
            }}
          />
        </label>
        <label className="form-control w-full mt-10">
          <div className="label">
            <span className="text-base">
              Hình ảnh của bài đăng? <span className="text-red-400">*</span>
            </span>
          </div>
          <input
            onChange={(e) => {
              const files = [];
              if (!e.target.files) return;
              for (let i = 0; i < e.target.files.length; i++) {
                files.push(e.target.files[i]);
              }
              setImages(files);
            }}
            ref={imageRef}
            type="file"
            accept="image/png,image/jpeg,image/webp"
            multiple={true}
            placeholder="Hình ảnh"
            className="input bg-white input-bordered w-full"
          />
        </label>
        <div className="space-y-5">
          {images &&
            images.map((item) => {
              return (
                <figure className="py-5">
                  <Image
                    src={URL.createObjectURL(item)}
                    alt={`anh-bai-viet`}
                    width={0}
                    height={0}
                    sizes="100"
                    className="w-auto h-auto"
                  />
                </figure>
              );
            })}
        </div>
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
                  if (keywordsRef.current) {
                    keywordsRef.current.value = "";
                  }
                }}
              >
                Thêm
              </button>
            </div>
            <ul className="menu bg-white mt-3 w-full rounded-box divide-y-[1px] divide-black/20">
              {keywords?.map(({ id, content }, i) => {
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
                  if (linksRef.current) {
                    linksRef.current.value = "";
                  }
                }}
              >
                Thêm
              </button>
            </div>
            <ul className="menu bg-white mt-3 w-full rounded-box divide-y-[1px] divide-black/20">
              {links?.map(({ id, content }, i) => {
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
          Cap Nhat
        </button>
      </form>
    </div>
  );
}
