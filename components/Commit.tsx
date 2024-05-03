import Image from "next/image";
import React from "react";
const listCarddemo = [
  {
    img: "/dich-vu-03.jpg",
    title: "Chuyên nghiệp – Tận tâm",
    content:
      "Đội ngũ tư vấn viên & chăm sóc khách hàng kinh nghiệm, chuyênnghiệp, tận tâm, cam kết bảo hành dịch vụ khi Khách hàng chưa hài lòng",
  },
  {
    img: "/dich-vu-02.jpg",
    title: "Người giúp việc nhà tiêu chuẩn",
    content:
      "Người giúp việc nhà tiêu chuẩn, đáng tin cậy, có đầy đủ hồ sơ. Công ty Trần Lê chịu trách nhiệm tuyển chọn, đào tạo và quản lý.",
  },
  {
    img: "/dich-vu-01.jpg",
    title: "Chi phí hợp lý",
    content:
      "Giá dịch vụ được nhân viên của đơn vị tư vấn cho khách hàng ngay từ khi tiếp nhận thông tin. Cam kết giá cạnh tranh nhất.",
  },
];
const Commit = () => {
  return (
    <section
      style={{ backgroundColor: "rgb(246, 246, 247)" }}
      className="px-5 py-20"
    >
      <div className="title">
        <h2 className="text-2xl font-bold text-center max-sm:text-lg">
          TIÊU CHÍ HOẠT ĐỘNG
        </h2>
        <p className="text-center text-2xl max-sm:text-base">
          Chúng tôi hoạt động với những tiêu chí rất cụ thể để giữ chữ tín với
          khác hàng.
        </p>
      </div>
      <div className="grid grid-cols-3 max-lg:grid-cols-1  gap-10 mt-12">
        {listCarddemo.map((item, index) => {
          return (
            <div
              key={index}
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
              className="flex flex-col items-center relative"
            >
              <Image
                width={400}
                height={267}
                className="w-full"
                sizes="100"
                src={item.img}
                alt={item.title}
              />
              <div className="bg-white h-full px-5 space-y-5 py-12">
                <h3 className="text-2xl max-sm:text-lg font-bold text-center">
                  {item.title}
                </h3>
                <p className="text-xl max-sm:text-base text-center">
                  {item.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Commit;
