import { Button } from "@/components";
import { phoneNumber } from "@/constants";
import Image from "next/image";
import React from "react";

const VeSinhNhaO = () => {
  return (
    <main>
      <div className="banner relative">
        <Image
          src={"/banner2.jpg"}
          alt="ve-sinh-lau-chui"
          sizes="100"
          width={0}
          height={0}
          className="w-auto"
        />

        <div className="main-title max-lg:hidden absolute top-1/2 -translate-y-1/2 right-[50px] ">
          <div className="space-y-5">
            <h1 className="uppercase font-bold text-5xl">
              Dịch vụ vệ sinh lau kính
            </h1>
            <p className="text-2xl max-sm:text-lg font-medium">
              Máy móc hiện đại
            </p>
            <p className="text-2xl max-sm:text-lg font-medium">
              Tuyệt đó uy tín
            </p>
            <p className="text-2xl max-sm:text-lg font-medium">
              Trách nhiệm cao với công việc, lau dọn sạch sẽ
            </p>
            <Button
              styleButton="p-2 px-5 text-xl max-sm:text-base rounded-full"
              content={`Gọi ngay: ${phoneNumber}`}
            ></Button>
          </div>
        </div>
      </div>
      <section className="pt-10  pb-32 px-5">
        <div className="space-y-5">
          <h2 className="text-2xl font-bold max-sm:text-xl max-md:text-2xl">
            Dịch vụ xử lý vệ sinh kính chuyên nghiệp
          </h2>
          <p className="text-xl max-sm:text-base">
            <i>
              Quý khách đang phân vân muốn tìm một đơn vị chuyên cung cấp dịch
              vụ giúp việc tại nhà? Trên thị trường hiện xuất hiện rất nhiều đơn
              vị giúp việc khiến cho nhiều người phân vân không biết nên lựa
              chọn như thế nào? Trần lê chuyên cung cấp các dịch vụ giúp việc
              nhà uy tín trên thị trường, đảm bảo có thể làm hài lòng Quý khách
              trong quá trình sử dụng. Chúng tôi cung cấp dịch vụ theo đúng yêu
              cầu của khách hàng với những ưu điểm nổi bật sau:
            </i>
          </p>
        </div>
        <div className="pt-10">
          <div className={`flex gap-10 max-lg:flex-col mt-10`}>
            <div className="image w-full">
              <Image
                src={"/ve-sinh-kinh-1.png"}
                alt="about"
                width={400}
                height={200}
                className="w-[100%] h-auto object-cover"
              />
            </div>
            <div className="content space-y-5">
              <div className="flex space-x-2 items-center">
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
                  className="lucide lucide-circle-check text-greenTheme"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <h3 className="text-2xl max-sm:text-lg font-bold text-greenTheme">
                  Dụng cụ và hóa chất sử dụng trong vệ sinh kính
                </h3>
              </div>
              <p className="text-xl max-sm:text-base">
                <span className="font-bold">Trần Lê {""}</span>
                luôn có những nhân viên với bề dày kinh nghiệm trong việc dọn
                dẹp nhà cửa chắc chắn có thể làm hài lòng Quý khách trong quá
                trình sử dụng. Tất cả nhân viên thuộc công ty chúng tôi đều
                không ngừng được đào tạo, nâng cao kỹ thuật nghiệp vụ đảm bảo
                mang đến cho Quý khách chất lượng dịch vụ tốt nhất.
              </p>
              <p className="text-greenTheme text-xl max-sm:text-base">
                <i>“Dịch vụ giúp việc nhà hiện đang trở nên cực kỳ phổ biến”</i>
              </p>
              <p className="text-xl max-sm:text-base">
                Trong mỗi dịch vụ lau kính, nhân viên Vệ Sinh Năm Sao sẽ được
                trang bị các loại công cụ và hóa chất như sau:
                <ul className="list-disc px-5">
                  <li>
                    Cây gạt kính chất lượng cao. Nếu cây gạt kính không đạt
                    chuẩn có thể khiến việc lau kính không
                  </li>
                  <li>Nước lau kính chuyên dụng.</li>
                  <li>Bùi nhùi để xoa lên kính.</li>
                  <li>Chất tẩy rửa chuyên dụng để lau sạch kính bị oxi hóa.</li>
                  <li>
                    <li>Khăn mềm.</li>
                    <li>Thang, ghế dùng để lau kính trên cao.</li>
                    <li>
                      Dây đu, dây an toàn, đồ bảo hộ và một số giấy tờ chứng
                      nhận hành nghề đu dây đã được đào tạo và giấy chứng nhận
                      an toàn.
                    </li>
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div
            className={`flex gap-10 max-lg:flex-col mt-10 flex-row-reverse  `}
          >
            <div className="image w-full">
              <Image
                src={"/ve-sinhlau-kinh-2.png"}
                alt="about"
                width={400}
                height={200}
                className="w-[100%] h-auto object-cover"
              />
            </div>
            <div className="content space-y-5">
              <div className="flex space-x-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-circle-check text-greenTheme"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <h3 className="text-2xl max-sm:text-lg font-bold text-greenTheme">
                  Vì sao cần thuê dịch vụ lau kính chuyên nghiệp?
                </h3>
              </div>
              <p className="text-xl max-sm:text-base">
                Việc vệ sinh kính sạch sẽ, sáng bóng giúp tăng giá trị và độ
                sang trọng của công trình xây dựng nhìn từ bên ngoài vào cũng
                như bảo vệ và phục hồi hệ cửa khỏi tác động môi trường.
                <br />
                <br />
                Thực tế, nhiều người tự vệ sinh kính, lan can, cầu thang định kỳ
                hoặc hàng ngày. Với khối lượng công việc ít, hệ cửa kính ít, bạn
                có thể thực hiện các biện pháp lau kính bằng nước xịt, chanh,
                giấm… với giấy báo và cần gạt hay khăn mềm. Tự vệ sinh kính tại
                nhà tiết kiệm chi phí và có thể thực hiện thường xuyên.
                <br />
                <br />
                Tuy nhiên, với các công trình lắp đặt nhiều cửa kính, cửa sổ ở
                tầng cao như nhà biệt thự, căn hộ chung cư cao tầng… cần phải có
                các trang thiết bị chuyên dụng. Chưa kể tại khách sạn, trung tâm
                thương mại cao tầng việc lau kính mặt ngoài sạch sẽ toàn bộ sẽ
                rất khó và nguy hiểm.
              </p>
              <p className="text-greenTheme text-xl max-sm:text-base">
                <i>“Dọn dẹp nhanh chóng đảm bảo làm hài lòng khách hàng”</i>
              </p>
              <p className="text-xl max-sm:text-base">
                Bên cạnh đó, Trần lê còn sử dụng khăn lau sợi nhỏ để giảm ô
                nhiễm chéo nhằm đảm bảo mang đến cho Quý khách môi trường trong
                lành nhất có thể. Chúng tôi thực hiện dọn dẹp vệ sinh tại nhà
                nhưng vẫn luôn đề cao vấn đề bảo vệ môi trường, hạn chế những
                chất xả thải ra bên ngoài ảnh hưởng và làm ô nhiễm mọi thứ xung
                quanh. Luôn đặt tôn chỉ dọn dẹp sạch sẽ cho khách hàng nhưng
                cũng thực hiện bảo vệ môi trường không gây ra các loại ô nhiễm.
              </p>
            </div>
          </div>
          <div className={`flex gap-10 max-lg:flex-col mt-10`}>
            <div className="image w-full">
              <Image
                src={"/dich-vu-lau-kinh-3.jpg"}
                alt="about"
                loading="lazy"
                width={400}
                height={200}
                className="w-[100%] h-auto object-cover"
              />
            </div>
            <div className="content space-y-5">
              <div className="flex space-x-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-circle-check text-greenTheme"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <h3 className="text-2xl max-sm:text-lg font-bold text-greenTheme">
                  Vì sao cần thuê dịch vụ lau kính chuyên nghiệp?
                </h3>
              </div>
              <p className="text-xl max-sm:text-base">
                Việc vệ sinh kính sạch sẽ, sáng bóng giúp tăng giá trị và độ
                sang trọng của công trình xây dựng nhìn từ bên ngoài vào cũng
                như bảo vệ và phục hồi hệ cửa khỏi tác động môi trường.
                <br />
                <br />
                Thực tế, nhiều người tự vệ sinh kính, lan can, cầu thang định kỳ
                hoặc hàng ngày. Với khối lượng công việc ít, hệ cửa kính ít, bạn
                có thể thực hiện các biện pháp lau kính bằng nước xịt, chanh,
                giấm… với giấy báo và cần gạt hay khăn mềm. Tự vệ sinh kính tại
                nhà tiết kiệm chi phí và có thể thực hiện thường xuyên.
                <br />
                <br />
                Tuy nhiên, với các công trình lắp đặt nhiều cửa kính, cửa sổ ở
                tầng cao như nhà biệt thự, căn hộ chung cư cao tầng… cần phải có
                các trang thiết bị chuyên dụng. Chưa kể tại khách sạn, trung tâm
                thương mại cao tầng việc lau kính mặt ngoài sạch sẽ toàn bộ sẽ
                rất khó và nguy hiểm.
              </p>
            </div>
          </div>
        </div>
        <div className="pt-10 ">
          <div className="text-xl max-sm:text-base space-y-10">
            <p>
              Kính được làm chùi sạch sẽ, sáng bóng định kỳ sẽ mang lại cho công
              trình xây dựng sự thông thoáng, không gian sống rộng và tính thẩm
              mỹ cao. Dịch vụ lau kính chuyên nghiệp của Năm Sao sẽ hỗ trợ mọi
              khách hàng làm sạch cửa kính{" "}
              <span className="text-greenTheme">
                NHANH CHÓNG - AN TOÀN - HIỆU QUẢ.
              </span>
            </p>
            <p className="text-xl max-sm:text-base">
              Mọi thông tin chi tiết vui lòng liên hệ với{" "}
              <span className="font-bold">{phoneNumber}</span>
            </p>
            <p className="text-xl max-sm:text-base">
              Công ty trần lê sẵn sàng đáp ứng các nhu cầu{" "}
              <span className="uppercase  text-greenTheme">
                vệ sinh-dọn dẹp-sữa chữa
              </span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default VeSinhNhaO;
