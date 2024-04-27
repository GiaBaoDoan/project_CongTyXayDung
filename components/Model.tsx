import Image from "next/image";
import React from "react";
const listLeftModelDemo = [
  {
    img: "/icon-sach-se.jpg",
    title: "Sạch sẽ",
    content:
      "Chúng tôi giữ cho ngôi nhà của quý khách lấp lánh sạch sẽ và không có mầm bệnh. Chế độ khử trùng của chúng tôi giết chết 99% vi khuẩn thông thường",
  },
  {
    img: "/bao-hiem.jpg",
    title: "Bảo hiểm",
    content:
      "Chất tẩy rửa của chúng tôi được bảo hiểm và liên kết vì vậy không cần phải lo lắng về căn hộ, văn phòng hoặc khu vườn của Quý khách.",
  },
];
const listRightDemo = [
  {
    img: "/icon-cong-nghe-hang-dau.jpg",
    title: "Công nghệ hàng đầu",
    content:
      "Chúng tôi sử dụng chất khử trùng an toàn ở bệnh viện, dịch lọc HEPA và khăn lau bằng sợi nhỏ để giảm ô nhiễm chéo.",
  },
  {
    img: "/chuyen-nghiep-uy-tin.jpg",
    title: "Chuyên nghiệp uy tín",
    content:
      "Đội ngũ đáng tin cậy và ổn định của chúng tôi hiểu nhu cầu dịch vụ dọn nhà và văn phòng cụ thể của Quý khách.",
  },
];
const Model = () => {
  return (
    <section className="grid grid-cols-3 max-lg:px-5 max-lg:grid-cols-1 gap-10 items-center p-10">
      <div className="left-section gap-10">
        <div className="flex flex-col space-y-10">
          {listLeftModelDemo.map((item, index) => {
            return (
              <div key={index} className="space-y-5 flex flex-col items-center">
                <Image
                  src={item.img}
                  width={100}
                  height={100}
                  className="max-sm:w-[70px]"
                  alt={item.title}
                />
                <h3 className="text-2xl max-sm:text-xl font-bold">
                  {item.title}
                </h3>
                <div className="content text-xl max-sm:text-lg  text-center">
                  {item.content}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <Image
          src={"/bn-woman.png"}
          width={300}
          height={400}
          sizes="100"
          className="w-full h-full max-lg:w-1/2 max-lg:h-1/2 "
          alt="woman-model"
        />
      </div>
      <div className="right-section gap-10">
        <div className="flex flex-col space-y-10">
          {listRightDemo.map((item, index) => {
            return (
              <div key={index} className="space-y-5 flex flex-col items-center">
                <Image
                  src={item.img}
                  width={100}
                  height={100}
                  loading="lazy"
                  className="max-sm:w-[70px]"
                  alt={item.title}
                />
                <h3 className="text-2xl max-sm:text-xl font-bold">
                  {item.title}
                </h3>
                <div className="content text-xl max-sm:text-lg  text-center">
                  {item.content}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Model;
