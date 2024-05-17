"use client";
import { baseUrlImage } from "@/constants";
import { postState } from "@/store";
import Image from "next/image";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { useParams } from "next/navigation";
import { useEffect } from "react";
const DetailPage = () => {
  const params = useParams();
  const { detailPost, setDetailPost } = postState();
  useEffect(() => {
    setDetailPost(params?.id);
  }, [params?.id]);
  const getText = (html: string) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    console.log(doc.body.children[0]);
    return doc.body.textContent;
  };
  console.log(detailPost?.content);
  return (
    <section className="py-10">
      <div className="space-y-3">
        <h3 className="text-xl max-sm:text-base">
          <span className="text-greenTheme font-medium">Tiêu đề bài viết</span>:{" "}
          {detailPost?.title}
        </h3>
        <p className="text-xl max-sm:text-base">
          <span className="font-medium text-greenTheme"> Mô tả bài đăng</span>:{" "}
          {detailPost?.description}
        </p>
        {detailPost?.images.map((image: any) => {
          return (
            <Image
              alt="anh-bai-viet"
              width={300}
              height={150}
              className="w-[800px] rounded-md"
              src={baseUrlImage(image)}
            />
          );
        })}

        <p className="font-medium text-greenTheme text-xl max-sm:text-base">
          Nội dung bài đăng:
        </p>
        {detailPost && (
          <div dangerouslySetInnerHTML={{ __html: detailPost?.content }} />
        )}

        {/* <p className="text-xl max-sm:text-base">
        </p> */}

        <div className="space-y-2">
          <p className="text-xl text-greenTheme font-medium max-sm:text-base">
            Các từ khóa liên quan:
          </p>
          {detailPost?.keywords?.map((keyword: string) => {
            return (
              <ul className="text-xl max-sm:text-base px-5 list-disc">
                <li>
                  <span>{keyword}</span>
                </li>
              </ul>
            );
          })}
        </div>
        <div className="space-y-2">
          <p className="text-xl text-greenTheme font-medium max-sm:text-base">
            Các nguồn kham khảo:
          </p>
          {detailPost?.links?.map((link: string) => {
            return (
              <ul className="list-disc px-5">
                <li>
                  <Link href={link} className="underline">
                    <p className="text-xl max-sm:text-base ">{link}</p>
                  </Link>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
      <div className="py-5 space-y-3">
        <p>
          <span className="text-greenTheme font-medium text-xl max-sm:text-base">
            {" "}
            Ngày đăng bài viết :{" "}
          </span>
          <span className="font-medium max-sm:text-base">
            {detailPost &&
              format(parseISO(detailPost?.createAt || ""), "dd-MM-yyyy")}
          </span>
        </p>
        <p>
          <span className="text-greenTheme font-medium text-xl max-sm:text-base">
            Tác giả bài đăng:{" "}
          </span>
          <span className="font-medium max-sm:text-base">
            {detailPost?.author.name}
          </span>
        </p>
      </div>
    </section>
  );
};

export default DetailPage;
