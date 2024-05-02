import { instance } from "@/config";
import { commentStore, userState } from "@/store";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
const ListComment = () => {
  const { user } = userState();
  const params = useParams();
  const { comments, maxCount, setCommentInpost } = commentStore();
  const [content, setContent] = useState<string>("");
  const [idEdit, setIdEdit] = useState("");
  const [page, setPage] = useState(1);
  const maxPage = Math.ceil(maxCount / 3);
  const deleteComment = async (id: any) => {
    const res = await instance.delete(`/comment/delete/?id=${id}`);
    if (res.data.code === 200) {
      setCommentInpost(params.id, page);
      return toast.success("Xóa thành công");
    }
  };
  const editComment = async (cmtId: any) => {
    if (!content) {
      return toast.error("Bạn cần nhập nội dung");
    }
    const res = await instance.put("/comment/edit", {
      cmtId,
      postId: params.id,
      content,
    });
    if (res.data.code === 200) {
      setCommentInpost(params.id, page);
      setIdEdit("");
      return toast.success("Cập nhật thành công");
    }
  };
  useEffect(() => {
    setCommentInpost(params.id, page);
  }, [page]);
  return (
    <section className="py-10">
      <h3 className="font-bold text-xl">Danh sách bình luận</h3>
      <div className="p-5 mt-5 h-[300px]">
        {comments?.map((item: any) => {
          return (
            <div key={item.id}>
              <div className="flex justify-between items-end">
                <div className="flex space-x-4 items-start flex-1">
                  <p className="capitalize w-[50px] h-[50px] bg-slate-200  items-center p-3 rounded-full cursor-pointer transition-all text-[#272727 ] text-xl  font-bold">
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
                      className="lucide lucide-user"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </p>
                  <div className="space-y-3 flex-1">
                    <p className="text-xl">{item?.author.name}</p>
                    <p className="text-gray-400 text-base">
                      {/* {format(item.createdAt, "MM/dd/yyyy")} */}
                    </p>
                    {idEdit === item.id && idEdit ? (
                      <div className="flex-1 flex-col justify-end">
                        <textarea
                          onChange={(e) => setContent(e.target.value)}
                          className="textarea w-full  h-[200px] textarea-bordered"
                          placeholder="Nội dung bình luận"
                        ></textarea>
                        <div>
                          <div className="flex space-x-2 items-center">
                            <button
                              onClick={() => editComment(item.id)}
                              className="px-3 py-2 rounded bg-greenTheme text-white"
                            >
                              Cập nhật
                            </button>
                            <button
                              onClick={() => setIdEdit("")}
                              className="px-3 py-2 rounded bg-red-500 text-white"
                            >
                              Bỏ chỉnh sửa
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <p className="text-xl line-clamp-3">{item?.content}</p>
                    )}
                  </div>
                </div>
                {!idEdit && (
                  <div
                    className={`action space-x-2 ${item?.author.id === user?.id ? "" : "hidden"}`}
                  >
                    <span
                      className="text-greenTheme cursor-pointer"
                      onClick={() => setIdEdit(item.id)}
                    >
                      Sửa
                    </span>
                    <span
                      onClick={() => deleteComment(item.id)}
                      className="text-red-400 cursor-pointer"
                    >
                      Xóa
                    </span>
                  </div>
                )}
              </div>
              <br />
              <hr />
              <br />
            </div>
          );
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
    </section>
  );
};

export default ListComment;
