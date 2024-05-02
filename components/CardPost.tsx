import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardPost = ({ blog }: { blog: any }) => {
  return (
    <Link
      href={`/bai-viet/${blog.id}`}
      key={blog.id}
      className="space-y-5 cursor-pointer hover:text-greenTheme"
    >
      <Image
        src={`https://api.xaydungtranle.vn/public/furina.jpg`}
        alt="dich-vu-ban-quan-tam"
        width={300}
        height={150}
        className="w-full rounded-md"
      />
      <p className="text-xl max-sm:text-base text-left font-bold">
        {blog.title}
      </p>
      <p className="line-clamp-3 text-xl">{blog.description}</p>
    </Link>
  );
};

export default CardPost;
