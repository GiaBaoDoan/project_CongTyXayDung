"use client";
import { instance } from "@/config";
import { commentStore } from "@/store";
import { useParams } from "next/navigation";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

const Comment = () => {
  const params = useParams();
  const { setCommentInpost } = commentStore();
  const [content, setContent] = useState<string>("");
  const postComment = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!content) {
      return toast.error("Bạn cần nhập nội dung");
    }
    const res = await instance.post("/comment/create/", {
      postId: params.id,
      content,
    });
    if (res.data.code === 200) {
      setCommentInpost(params.id, 1);
      setContent("");
      return toast.success("Đã thêm một bình luận vào bài viết");
    }
  };
  return (
    <section>
      <div>
        <div className="mt-10 max-lg:mt-2">
          <form onSubmit={postComment}>
            <h3 className="font-bold text-xl max-sm:text-base">Bình luận</h3>
            <div className="mt-5">
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="textarea w-full h-[200px] textarea-bordered"
                placeholder="Nội dung bình luận"
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-flex items-center space-x-2 text-base mt-5 max-lg:mt-2 rounded hover:bg-green-800 bg-greenTheme text-white p-2 px-3"
            >
              <span>Phản hồi</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-send-horizontal"
              >
                <path d="m3 3 3 9-3 9 19-9Z" />
                <path d="M6 12h16" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Comment;
