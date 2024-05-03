"use client";
import { baseUrlImage } from "@/constants";
import { postState } from "@/store";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";
const DetailPage = () => {
  const params = useParams();
  const { detailPost, setDetailPost } = postState();
  useEffect(() => {
    setDetailPost(params?.id);
  }, []);
  return (
    <section>
      <div className="space-y-3">
        <h3 className="text-2xl max-sm:text-lg font-bold  text-greenTheme">
          {detailPost?.title}
        </h3>
        <p className="text-xl max-sm:text-base text-greenTheme">
          {detailPost?.description}
        </p>
        <Image
          alt="anh-bai-viet"
          width={300}
          height={150}
          className="w-[300px] max-lg:w-full rounded-md"
          src={baseUrlImage(detailPost?.image)}
        />
        <p className="text-xl max-sm:text-base">{detailPost?.content}</p>

        <div className="space-y-2">
          <p className="text-xl max-sm:text-base">Các từ khóa liên quan:</p>
          {detailPost?.keywords.map((keyword: string) => {
            return (
              <ul className="text-xl max-sm:text-base px-5 list-decimal">
                <li>
                  <span>{keyword}</span>
                </li>
              </ul>
            );
          })}
        </div>
        <div className="space-y-2">
          <p>Các nguồn kham khảo</p>
          {detailPost?.links.map((link: string) => {
            return (
              <ul className="list-disc px-5">
                <li>
                  <Link href={link} className="underline text-greenTheme">
                    <p className="text-xl max-sm:text-base ">{link}</p>
                  </Link>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DetailPage;
