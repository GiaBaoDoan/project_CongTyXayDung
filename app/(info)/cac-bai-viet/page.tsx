"use client";
import CardPost from "@/components/CardPost";
import { phoneNumber } from "@/constants";
import { postState } from "@/store";
import { PostType } from "@/types";
import Link from "next/link";
import React, { useEffect } from "react";

const CacBaiViet = () => {
  const { posts, setPost } = postState();
  useEffect(() => {
    setPost();
  }, []);
  return (
    <section className="py-10 px-5">
      <div className="space-y-5 w-full">
        <p className="max-sm:text-base text-xl  ">
          <span className="text-greenTheme">Trang chủ </span>
          {">>"} Bài viết
        </p>
        <h2 className="text-xl  max-sm:text-base text-greenTheme font-bold">
          Category Archives: Bài viết
        </h2>
        <div className="max-sm:text-base text-xl">
          <p>
            <span className="font-bold">Trần lê</span> với sứ mệnh nỗ lực từng
            ngày trong việc trở thành đơn vị cung cấp các dịch vụ dọn dẹp hàng
            đầu trên thị trường cùng những giải pháp linh hoạt và toàn diện
            nhất.
          </p>
          <br />
          <p>
            <span className="font-bold">Trần lê</span> ra đời với mong muốn mang
            đến một không gian sống sạch sẽ, trong lành, thoải mái và hạnh phúc
            cho các gia đình. Không những thế, với các dịch vụ vệ sinh văn
            phòng, chúng tôi còn hướng đến sự tiện nghi và thành công cho các
            công ty…
          </p>
        </div>
      </div>
      <br />
      <hr />
      <div className="flex justify-between items-center">
        <h3 className="mt-5 font-bold text-xl  max-sm:text-base text-greenTheme">
          Các bài viết bạn có thể quan tâm
        </h3>
        <Link
          href={"/tao-bai-viet"}
          className="text-greenTheme cursor-pointer flex items-center space-x-1 text-xl  max-sm:text-base"
        >
          <span>Tạo bài viết mới</span>{" "}
          <span>
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
              className="lucide lucide-badge-plus"
            >
              <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
              <line x1="12" x2="12" y1="8" y2="16" />
              <line x1="8" x2="16" y1="12" y2="12" />
            </svg>
          </span>
        </Link>
      </div>
      <div className="grid grid-cols-3 mt-5 py-5 max-lg:grid-cols-1 gap-10">
        {posts?.map((item: PostType) => {
          return <CardPost blog={item} />;
        })}
      </div>
      <hr />
      <div className="text-xl max-sm:text-base space-y-5 py-10">
        <h3 className="font-bold text-greenTheme text-xl max-sm:text-base">
          Mục đích kham khảo các bài viết
        </h3>
        <p>
          <span className="font-bold">Công ty Trần Lê </span> là một đơn vị
          chuyên cung cấp các dịch vụ về lau dọn, sửa chữa và vệ sinh. Với đội
          ngũ nhân viên chuyên nghiệp và kinh nghiệm, công ty cam kết mang lại
          những bài viết hữu ích và giá trị về lĩnh vực này.
          <br />
          <br />
          Các bài viết từ <span className="font-bold">
            Công ty Trần lê{" "}
          </span>{" "}
          không chỉ giới thiệu về các dịch vụ mà công ty cung cấp, mà còn cung
          cấp những thông tin hữu ích về quy trình lau dọn, sửa chữa và vệ sinh.
          Những bài viết này giúp khách hàng hiểu rõ hơn về các vấn đề liên quan
          đến việc duy trì môi trường sống sạch sẽ và an toàn.
          <br />
          <br />
          <span className="font-bold">Công ty Trần Lê </span> thường chia sẻ
          kiến thức về các phương pháp lau dọn hiệu quả, lựa chọn các sản phẩm
          vệ sinh phù hợp và kỹ thuật sửa chữa đơn giản mà khách hàng có thể áp
          dụng trong cuộc sống hàng ngày. Bài viết của công ty không chỉ tập
          trung vào việc quảng bá dịch vụ, mà còn hướng đến việc nâng cao nhận
          thức về quan trọng của vệ sinh và sửa chữa định kỳ.
          <br />
          <br />
          <span className="font-bold">Công ty Trần Lê </span> cũng chia sẻ các
          tình huống thực tế và các bài viết hướng dẫn để giúp khách hàng tự
          giải quyết một số vấn đề nhỏ trong việc lau dọn và sửa chữa. Điều này
          giúp tiết kiệm thời gian và tiền bạc cho khách hàng, đồng thời tạo
          dựng lòng tin và tăng cường mối quan hệ với khách hàng.
          <br />
          <br />
          Tổng quan, bài viết của{" "}
          <span className="font-bold">Công ty Trần Lê </span> không chỉ mang lại
          kiến thức và thông tin hữu ích cho khách hàng, mà còn thể hiện cam kết
          của công ty đối với chất lượng dịch vụ và sự hài lòng của khách hàng.
        </p>
        <p>
          Chi tiết liên hệ :{" "}
          <span className="text-greenTheme">{phoneNumber}</span>
        </p>
      </div>
    </section>
  );
};

export default CacBaiViet;
