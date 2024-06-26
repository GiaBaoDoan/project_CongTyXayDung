import { postState } from "@/store";
import React, { useEffect, useState } from "react";
import CardPost from "./CardPost";
import { instance } from "@/config";

const Posts = () => {
  const { posts, setPost } = postState();
  const [page, setPage] = useState(1);
  const maxPage = posts?.count && Math.ceil(posts?.count / 4);

  useEffect(() => {
    setPost(page);
  }, [page]);
  return (
    <section className="mt-5">
      <div className="grid grid-cols-4 max-lg:grid-cols-1 gap-10">
        {posts?.data?.map((item: any) => {
          return <CardPost blog={item} />;
        })}
      </div>
      {posts?.data?.length > 0 && (
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

export default Posts;
