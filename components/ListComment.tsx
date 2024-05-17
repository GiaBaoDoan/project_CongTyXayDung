import { instance } from "@/config";
import { commentStore, postState, userState } from "@/store";
import { CommentType } from "@/types";
import { format, parseISO } from "date-fns";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
const ListComment = () => {
  const { user } = userState();
  const [commentStates, setCommentStates] = useState<any>({});
  const handleCommentToggle = (commentId: string) => {
    setCommentStates((prevState: any) => ({
      ...prevState,
      [commentId]: !prevState[commentId],
    }));
  };
  const params = useParams();
  const [content, setContent] = useState<string>("");
  const { detailPost, setDetailPost } = postState();
  const [idEdit, setIdEdit] = useState("");
  const [page, setPage] = useState(1);
  const maxPage =
    (detailPost && Math.ceil(detailPost?.comment?.length / 3)) || 0;
  const deleteComment = async (id: string) => {
    const res = await instance.delete(`/comment?id=${id}`);
    if (res.status === 200) {
      setDetailPost(params.id);
      return toast.success("Xóa thành công");
    }
  };
  const [readMore, setReadMore] = useState(3);
  const editComment = async (cmtId: string) => {
    if (!content) {
      return toast.error("Bạn cần nhập nội dung");
    }
    const res = await instance.put("/comment/", {
      cmtId,
      postId: params.id,
      content,
    });
    if (res.status === 200) {
      setDetailPost(params.id);
      setIdEdit("");
      setContent("");
      return toast.success("Cập nhật thành công");
    }
  };
  const handelTextContent = (text: string, cmtId: any) => {
    if (text.length > 400) {
      return !commentStates[cmtId] ? text.slice(0, 300) : text;
    }
    return text;
  };
  useEffect(() => {
    setDetailPost(params.id);
  }, [page, params.id]);
  return (
    <section className="py-10">
      <div>
        <h3 className="font-bold text-xl max-sm:text-base">
          Các ý kiến phản hồi
        </h3>
        <div>
          <div className={`max-sm:p-2 p-5 mt-5`}>
            {detailPost?.comment.slice(0, readMore).map((item: CommentType) => {
              return (
                <div>
                  <div className="flex justify-between items-center">
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
                        <p className="text-xl max-sm:text-base flex justify-between">
                          <span>{item?.author.name}</span>
                          {!idEdit && (
                            <div
                              className={`action space-x-2 ${item?.author.id === user?.id ? "" : "hidden"}`}
                            >
                              <span
                                className="text-greenTheme text-lg cursor-pointer"
                                onClick={() => setIdEdit(item.id)}
                              >
                                Sửa
                              </span>
                              <span
                                onClick={() => deleteComment(item.id)}
                                className="text-red-500 text-lg cursor-pointer"
                              >
                                Xóa
                              </span>
                            </div>
                          )}
                        </p>
                        <p className="text-gray-400 text-base">
                          <span>Ngày đăng: </span>
                          {format(parseISO(item.updateAt), "dd-MM-yyyy")}
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
                                  className="px-3 py-2 max-sm:py-1 text-base rounded bg-greenTheme text-white"
                                >
                                  Cập nhật
                                </button>
                                <button
                                  onClick={() => setIdEdit("")}
                                  className="px-3 py-2 rounded max-sm:py-1 bg-red-500 text-base text-white"
                                >
                                  Bỏ chỉnh sửa
                                </button>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <p
                            onClick={() => handleCommentToggle(item.id)}
                            className="text-xl cursor-pointer max-sm:text-base"
                          >
                            {handelTextContent(item.content, item.id)}
                            <span className="text-greenTheme underline ml-1">
                              {item.content.length > 500
                                ? !commentStates[item.id]
                                  ? "Đọc thêm..."
                                  : "Ẩn bớt"
                                : ""}
                            </span>
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <br />
                  <hr />
                  <br />
                </div>
              );
            })}
          </div>
          {detailPost && detailPost?.comment.length > 3 && (
            <div className="flex justify-center space-x-4 items-center">
              <button
                onClick={() =>
                  detailPost &&
                  readMore < detailPost?.comment?.length &&
                  setReadMore(readMore + 3)
                }
                className="bg-greenTheme rounded p-3 max-sm:text-base text-white"
              >
                Xem thêm
              </button>
              <button
                onClick={() => setReadMore(3)}
                className="bg-greenTheme rounded max-sm:text-base p-3 text-white"
              >
                Thu gon
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ListComment;
