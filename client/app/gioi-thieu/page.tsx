import { listService, phoneNumber } from "@/constants";
import Image from "next/image";
import React from "react";

const GioiThieu = () => {
  return (
    <section>
      <Image
        src="/banner-gioi-thieu.jpg"
        alt="banner-gioi-thieu"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
      />
      <div className="p-12 px-5 flex pb-24 max-lg:flex-col lg:space-x-10 max-lg:space-y-10">
        <div className="left-content space-y-5">
          <h3 className="text-3xl max-md:text-2xl max-sm:text-lg font-bold text-center">
            TẦM NHÌN VÀ SỨ MỆNH
          </h3>
          <div className="border-l-[3px] px-10 border-greenTheme">
            <p className="text-center">
              <span className="text-greenTheme font-medium text-3xl max-sm:text-lg max-md:text-2xl">
                <i>“Mang đến không gian xanh”</i>
              </span>
            </p>
          </div>
        </div>
        <div className="right-content lg:w-[90%] space-y-5">
          <p className="text-2xl  max-sm:text-base">
            <span className="text-2xl max-sm:text-lg font-bold">
              Công ty Trần Lê
            </span>{" "}
            ra đời với mong muốn mang đến một không gian sống sạch sẽ, trong
            lành, thoải mái và hạnh phúc cho các gia đình. Không những thế, với
            các dịch vụ vệ sinh văn phòng, chúng tôi còn hướng đến sự tiện nghi
            và thành công cho các công ty…
          </p>
          <p className="text-2xl  max-sm:text-base">
            <span className="text-2xl max-sm:text-lg font-bold">
              Công ty Trần Lê
            </span>{" "}
            với sứ mệnh nỗ lực từng ngày trong việc trở thành đơn vị cung cấp
            các dịch vụ dọn dẹp hàng đầu trên thị trường cùng những giải pháp
            linh hoạt và toàn diện nhất. nhất.
          </p>
        </div>
      </div>
      {/* main service */}
      <section
        style={{ backgroundColor: "rgb(246, 246, 247)" }}
        className="p-12 pb-24 px-5"
      >
        <h3 className="text-3xl uppercase text-center max-lg:text-2xl font-bold">
          Các dịch vụ chính
        </h3>
        <div className="sevice-cards grid grid-cols-4 mt-10 max-lg:grid-cols-2 max-md:grid-cols-1 gap-10">
          {listService.map((item, index) => {
            return (
              <div key={index} className="flex flex-col space-y-5 items-center">
                <Image
                  src={item.img}
                  alt="service-1"
                  width={140}
                  height={100}
                  className="max-xl:w-[120px] max-md:w-[100px] max-sm:w-[80px]"
                />
                <div className="title space-y-5">
                  <h4 className="text-2xl  max-sm:text-xl font-bold text-center">
                    {item.title}
                  </h4>
                  <p className="text-xl max-sm:text-base text-center">
                    {item.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* content service */}
      <section className="p-12 px-5 space-y-5 pb-24">
        <div className="title space-y-3">
          <h3 className="font-bold text-2xl  max-sm:text-base uppercase">
            NHỮNG CAM KẾT CỦA Công ty Trần Lê DÀNH CHO KHÁCH HÀNG
          </h3>
          <p className="text-xl  max-sm:text-base">
            Luôn đặt sự hài lòng của khách hàng lên hàng đầu, chúng tôi cung cấp
            các dịch vụ với những cam kết sau:
          </p>
        </div>
        <div className="space-y-5">
          <ul className="list-disc px-5">
            <li>
              <p className="text-xl max-sm:text-base">
                Người giúp việc nhà tại Công try Trần Lê đạt tiêu chuẩn, đáng
                tin cậy và có đầy đủ hồ sơ, thông tin cá nhân. Tất cả đều được
                đào tạo bài bản và được quản lý bởi đơn vị Công try Trần Lê, một
                trong những đơn vị tuyển chọn và đào tạo người giúp việc uy tín
                nhất hiện nay.
              </p>
            </li>
          </ul>
          <p className="text-xl  max-sm:text-base">
            <i>Người giúp việc đáng tin cậy, được đào tạo bài bản</i>
          </p>
          <ul className="text-xl  max-sm:text-base list-disc px-5 space-y-5">
            <li>
              <p>
                Đội ngũ nhân viên tư vấn và chăm sóc khách hàng giàu kinh
                nghiệm, chuyên nghiệp và tận tâm, hỗ trợ khách hàng tối đa trong
                việc lựa chọn dịch vụ phù hợp cũng như giải đáp các vấn đề phát
                sinh trong quá trình sử dụng dịch vụ.
              </p>
            </li>
            <li>
              <p>
                Công try Trần Lê tìm người giúp việc nhanh chóng sau khi khách
                hàng đăng ký theo nhu cầu. Chúng tôi còn cung cấp ứng dụng đầy
                đủ thông tin về dịch vụ và người giúp việc, giúp cho khách hàng
                chủ động chọn lựa và đánh giá một cách tiện lợi.
              </p>
            </li>
            <li>
              <p>
                Đảm bảo luôn giữ cho ngôi nhà sạch sẽ và không có mầm bệnh với
                chế độ khử trùng giết chết 99% virus, vi khuẩn. Hơn nữa, chúng
                tôi còn sử dụng công nghệ hàng đầu với dịch lọc HEPA và khăn lau
                bằng sợi nhỏ để giảm tình trạng ô nhiễm chéo.
              </p>
            </li>
            <li>
              <p>
                Bất cứ dịch vụ nào Tapvu 247 cũng đều tiến hành theo quy trình
                khoa học, logic. Các dịch vụ vệ sinh, lau kính, sửa chữa… đảm
                bảo thực hiện trong thời gian nhanh chóng mà vẫn hiệu quả cao,
                không làm ảnh hưởng nhiều đến việc sinh hoạt và công việc của
                khách hàng.
              </p>
            </li>
          </ul>
        </div>
        <div className="end">
          <p className="text-xl max-sm:text-base mt-10">
            <span className="font-bold">Công ty Trần Lê</span> sẽ là lựa chọn lý
            tưởng cho các gia đình, các văn phòng công ty mong muốn được tận
            hưởng một môi trường sạch sẽ, thoải mái. Liên hệ ngay với chúng tôi
            qua số hotline {phoneNumber} để được tư vấn nhanh chóng và chi tiết
            nhất.
          </p>
        </div>
      </section>
    </section>
  );
};

export default GioiThieu;
