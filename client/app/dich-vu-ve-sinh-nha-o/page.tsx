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
          sizes="100vw"
          width={0}
          height={0}
          className="w-full h-auto"
        />

        <div className="main-title max-lg:hidden absolute top-1/2 -translate-y-1/2 right-[50px] ">
          <div className="space-y-5">
            <h1 className="uppercase font-bold text-5xl">
              Dịch vụ vệ sinh nhà ở
            </h1>
            <p className="text-3xl max-sm:text-base font-medium">
              Máy móc hiện đại
            </p>
            <p className="text-3xl max-sm:text-base font-medium">
              Tuyệt đó uy tín
            </p>
            <p className="text-3xl max-sm:text-base font-medium">
              Trách nhiệm cao với công việc, lau dọn sạch sẽ
            </p>
            <Button
              styleButton="p-2 px-5 text-2xl max-sm:text-base rounded-full"
              content={`Gọi ngay: ${phoneNumber}`}
            ></Button>
          </div>
        </div>
      </div>
      <section className="pt-10  pb-32 px-5">
        <div className="space-y-5">
          <h2 className="text-4xl font-bold max-sm:text-xl max-md:text-3xl">
            Dịch vụ dọn dẹp nhà ở chuyên nghiệp
          </h2>
          <p className="text-2xl max-sm:text-base">
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
                src={"/giup-viec-nha-1024x683.jpg"}
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
                <h3 className="text-3xl max-sm:text-base font-bold text-greenTheme">
                  Giúp việc nhà có bề dày kinh nghiệm
                </h3>
              </div>
              <p className="text-2xl max-sm:text-base">
                <span className="font-bold">Trần Lê {""}</span>
                luôn có những nhân viên với bề dày kinh nghiệm trong việc dọn
                dẹp nhà cửa chắc chắn có thể làm hài lòng Quý khách trong quá
                trình sử dụng. Tất cả nhân viên thuộc công ty chúng tôi đều
                không ngừng được đào tạo, nâng cao kỹ thuật nghiệp vụ đảm bảo
                mang đến cho Quý khách chất lượng dịch vụ tốt nhất.
              </p>
              <p className="text-greenTheme text-2xl max-sm:text-base">
                <i>“Dịch vụ giúp việc nhà hiện đang trở nên cực kỳ phổ biến”</i>
              </p>
              <p className="text-2xl max-sm:text-base">
                Hầu hết, các gia đình đều tin tưởng lựa chọn dịch vụ của chúng
                tôi vì đội ngũ giúp việc nhà của công ty luôn mang đến sự hài
                lòng cho khách hàng. Cùng với đó, Quý khách hoàn toàn yên tâm về
                độ sạch sẽ. Nếu không đúng như mong muốn, các Quý khách có thể
                yêu cầu nhân viên công ty làm lại.
              </p>
            </div>
          </div>
          <div
            className={`flex gap-10 max-lg:flex-col mt-10 flex-row-reverse  `}
          >
            <div className="image w-full">
              <Image
                src={"/lau-cui.jpg"}
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
                <h3 className="text-3xl max-sm:text-base font-bold text-greenTheme">
                  Công nghệ hàng đầu
                </h3>
              </div>
              <p className="text-2xl max-sm:text-base">
                Các dịch vụ giúp việc nhà do công ty chúng tôi cung cấp đều sử
                dụng những công nghệ làm sạch hàng đầu. Chính vì vậy, khách hàng
                hoàn toàn yên tâm khi sử dụng dịch vụ của chúng tôi. Trần lê
                luôn sử dụng các thiết bị hiện đại hàng đầu, đảm bảo mang đến
                cho Quý khách chất lượng dịch vụ tốt nhất. Chúng tôi sử dụng các
                chất tẩy rửa có độ an toàn cao, không làm ảnh hưởng đến không
                khí hay quá trình sinh hoạt của gia đình Quý khách.
              </p>
              <p className="text-greenTheme text-2xl max-sm:text-base">
                <i>“Dọn dẹp nhanh chóng đảm bảo làm hài lòng khách hàng”</i>
              </p>
              <p className="text-2xl max-sm:text-base">
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
                src={"/giup-viec-nha-co-be-day-kinh-nghiem.jpg"}
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
                <h3 className="text-3xl max-sm:text-base font-bold text-greenTheme">
                  Dịch vụ đa dạng
                </h3>
              </div>
              <p className="text-2xl max-sm:text-base">
                Trần lê cung cấp các dịch vụ giúp việc nhà đa dạng, với các hình
                thức khác nhau để khách hàng có thể tùy ý lựa chọn sao cho thuận
                tiện nhất có thể. Các dịch vụ do Trần lê cung cấp bao gồm:
              </p>
              <p className="text-2xl max-sm:text-base">
                <ul className="px-5 space-y-5 list-disc">
                  <li>
                    <span>Dọn dẹp tại nhà theo giờ</span>
                  </li>
                  <li>
                    <span>Dọn dẹp tại nhà theo ngày</span>
                  </li>
                  <li>
                    <span>Dọn dẹp theo yêu cầu khách hàng</span>
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div className="pt-10 ">
          <div className="text-2xl max-sm:text-base space-y-10">
            <p>
              Tùy thuộc vào mô hình sinh hoạt gia đình, Quý khách có thể lựa
              chọn các dịch vụ phù hợp. Nếu không có quá nhiều yêu cầu thì dịch
              vụ giúp việc nhà theo giờ đáng để cho Quý khách lựa chọn vì vừa
              tiết kiệm chi phí lại không tốn quá nhiều thời gian.
            </p>
            <p className="text-2xl max-sm:text-base font-bold">
              <i>“Chất lượng dịch vụ làm hài lòng khách hàng”</i>
            </p>
            <p className="text-2xl max-sm:text-base ">
              Sử dụng dịch vụ dọn dẹp Trần lê Quý khách có thể hoàn toàn yên tâm
              về không gian nhà. Chúng tôi cam kết mang đến cho Quý khách không
              gian xanh lý tưởng để sinh hoạt gia đình và thực hiện bất kỳ hoạt
              động nào.
            </p>
            <p className="text-2xl max-sm:text-base">
              Hãy liên hệ ngay Trần lê khi Quý khách có nhu cầu sử dụng, vui
              lòng gọi: <span className="font-bold">{phoneNumber}</span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default VeSinhNhaO;
