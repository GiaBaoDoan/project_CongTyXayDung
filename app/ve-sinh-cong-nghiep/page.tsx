import Image from "next/image";
import React from "react";
const contentDemo = [
  {
    img: "/icon-001.png",
    title: "Dịch vụ đa dạng",
    content:
      "Tran Le cung cấp không chỉ một mà rất nhiều gói dịch vụ vệ sinh đa dạng, đảm bảo chất lượng khác như: Giúp việc nhà, ạp vụ văn phòng, nhà xưởng, chung cư, trường học, tổng vệ sinh, Lau kính nhà cao tầng, Sơn nhà, Sửa chữa nhà cửa, điện nước",
  },
  {
    img: "/icon-002.png",
    title: "Trang thiết bị, máy móc hiện đại",
    content:
      "Thiết bị vệ sinh, máy móc phục vụ cho việc vệ sinh đều được nhập khẩu từ những thương hiệu nổi tiếng nên đảm bảo an toàn. Hơn hết, còn được tích hợp những công nghệ hiện đại, tiên tiến nhất thế giới nên giúp cho việc vệ sinh được dễ dàng hơn.",
  },
  {
    img: "/icon-003.png",
    title: "Giá cả phải chăng",
    content:
      "Chúng tôi cung cấp dịch vụ trực tiếp với khách hàng và không qua bất kỳ khâu trung gian nào nên có giá rất phải chăng. Hơn nữa, nhân viên chuyên nghiệp, trang thiết bị máy móc hiện đại nên thời gian thực hiện nhanh chóng. Cho nên giá dịch vụ vệ sinh công nghiệp phải chăng, thậm chí là rẻ hơn so với những địa chỉ khác là điều đương nhiên.",
  },
];

const VeSinhCongNghiep = () => {
  return (
    <main>
      <Image
        src={"/banner1.jpg"}
        alt="ve-sinh-lau-chui"
        sizes="100vw"
        width={0}
        height={0}
        className="w-full h-auto"
      />
      <section className="px-5 py-20">
        <div className="flex max-lg:flex-col lg:space-x-10 space-y-5 items-center">
          <div>
            <h2 className="text-2xl max-sm:text-lg font-bold ">
              Dịch vụ vệ sinh công nghiệp uy tín
            </h2>
            <p className="text-xl max-sm:text-lg mt-5">
              Tran Le là địa chỉ chuyên cung cấp dịch vụ vệ sinh công nghiệp
              chuyên nghiệp, giá rẻ nhận được nhiều sự lựa chọn của khách hàng.
              Dịch vụ mang tới nhiều ưu điểm với đội ngũ nhân viên chuyên
              nghiệp, trang thiết bị hiện đại, tiên tiến, dịch vụ đa dạng, giá
              cả phải chăng. <br /> <br />
              Tran Le – địa chỉ chuyên cung cấp dịch vụ vệ sinh công nghiệp
              chuyên nghiệp. <br /> <br /> Tran Le cam kết mang tới cho khách
              hàng dịch vụ uy tín, chuyên nghiệp nhất. Mọi thông tin chi tiết
              xin vui lòng liên hệ số điện thoại 0907.082.999 để sử dụng dịch vụ
              vệ sinh công nghiệp Vũng Tàu.
            </p>
          </div>
          <Image
            sizes="100vw"
            width={0}
            height={0}
            className="w-full h-auto"
            alt="anh-cong-ty-ve-sinh"
            src={"/giup-viec-nha-co-be-day-kinh-nghiem.jpg"}
          ></Image>
        </div>
      </section>
      <Image
        className="w-full h-auto"
        alt="anh-cong-ty-ve-sinh"
        sizes="100vw"
        width={0}
        height={0}
        src={"/banner2.jpg"}
      />
      <section className="mt-10">
        <div
          className="px-5 py-20 space-y-5"
          style={{ backgroundColor: "rgb(246, 246, 247)" }}
        >
          <h2 className="text-2xl max-sm:text-lg font-bold">
            TẠI SAO PHẢI DÙNG DỊCH VỤ VỆ SINH CÔNG NGHIỆP?
          </h2>
          <p className="text-xl max-sm:text-lg">
            Việc sử dụng dịch vụ vệ sinh công nghiệp là rất cần thiết, bởi dịch
            vụ mang lại rất nhiều lợi ích cho khách hàng, cho doanh nghiệp sử
            dụng như:
          </p>
          <div>
            <ul className="px-5 space-y-5 list-disc">
              <li>
                <p className="text-xl max-sm:text-lg">
                  Giúp không gian nhà xưởng được sạch sẽ hơn.
                </p>
              </li>
              <li>
                <p className="text-xl max-sm:text-lg">
                  Thời gian vệ sinh nhanh chóng bởi nhân viên chuyên nghiệp,
                  trang thiết bị hiện đại.
                </p>
              </li>
              <li>
                <p className="text-xl max-sm:text-lg">
                  Tiết kiệm được chi phí cho doanh nghiệp.
                </p>
              </li>
              <li>
                <p className="text-xl max-sm:text-lg">
                  Mang lại hiệu quả làm việc cao hơn cho nhân viên.
                </p>
              </li>
              <li>
                <p className="text-xl max-sm:text-lg">
                  Bảo vệ sức khỏe cho nhân viên, tạo không gian làm việc thoáng
                  mát.
                </p>
              </li>
              <li>
                <p className="text-xl max-sm:text-lg">
                  Đảm bảo an toàn cho người sử dụng bì những biện pháp vệ sinh
                  đều hiện đại và đảm bảo tiêu chuẩn.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <div
          className="px-5 py-20 gap-10 grid max-lg:grid-cols-1 grid-cols-3"
          style={{ backgroundColor: "rgb(246, 246, 247)" }}
        >
          {contentDemo.map((item, index) => {
            return (
              <div key={index} className="flex flex-col space-y-5 items-center">
                <Image
                  src={item.img}
                  alt="icon"
                  width={150}
                  height={150}
                  loading="lazy"
                  className="w-[150px] h-[150px] max-lg:w-[100px] max-lg:h-[100px] max-sm:w-[80px] max-sm:h-[80px]"
                />
                <h3 className="text-2xl max-sm:text-lg text-greenTheme font-bold text-center text-themeGreen">
                  {item.title}
                </h3>
                <p className="text-xl max-sm:text-lg text-center">
                  {item.content}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default VeSinhCongNghiep;
