import { instance } from "@/config";
import { commentStore, userState } from "@/store";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

const ListComment = () => {
  const params = useParams();
  const { comments, setCommentInpost } = commentStore();
  const { user } = userState();
  const deleteComment = async (id: any) => {
    const res = await instance.delete(`/comment/delete/?id=${id}`);
    if (res.data.code === 200) {
      setCommentInpost(params.id);
      toast.success("Xóa thành công");
    } else {
      toast.error("Đã xảy ra lỗi");
    }
  };
  useEffect(() => {
    setCommentInpost(params.id);
  }, []);
  return (
    <section className="py-10">
      <h3 className="font-bold text-xl">Danh sách bình luận</h3>
      <div className="p-5 mt-5">
        {comments?.map((item: any) => {
          return (
            <div key={item.id}>
              <div className="flex justify-between items-end">
                <div className="flex space-x-4 items-start">
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
                  <div className="space-y-3">
                    <p className="text-xl">{item?.author.name}</p>
                    <p className="text-gray-400 text-base">{item.createAt}</p>
                    <p className="text-xl line-clamp-3">{item.content}</p>
                  </div>
                </div>
                <div
                  className={`action space-x-2 ${item.author.id === user.id ? "" : "hidden"}`}
                >
                  <span className="text-greenTheme cursor-pointer">sửa</span>
                  <span
                    onClick={() => deleteComment(item.id)}
                    className="text-red-400 cursor-pointer"
                  >
                    Xóa
                  </span>
                </div>
              </div>
              <br />
              <hr />
              <br />
            </div>
          );
        })}
      </div>
      <div className="join flex justify-center">
        <button className="join-item btn">«</button>
        <button className="join-item btn">Page 4</button>
        <button className="join-item btn">»</button>
      </div>
    </section>
  );
};

export default ListComment;
