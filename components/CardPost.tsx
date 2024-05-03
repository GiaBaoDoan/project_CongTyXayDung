import { baseUrlImage } from "@/constants";
import { PostType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardPost = ({ blog }: { blog: PostType }) => {
  return (
    <Link
      href={`/bai-viet/${blog.id}`}
      key={blog.id}
      className="space-y-5 max-lg:space-y-3 max-sm:space-y-1 cursor-pointer hover:text-greenTheme"
    >
      <Image
        src={baseUrlImage(blog.image)}
        alt="dich-vu-ban-quan-tam"
        width={300}
        height={150}
        className="w-full rounded-md"
      />
      <p className="text-xl max-sm:text-base text-left font-bold">
        {blog.title}
      </p>
      <p className="line-clamp-3 text-xl max-sm:text-base">
        {blog.description}
      </p>
    </Link>
  );
};

export default CardPost;
