import { phoneNumber } from "@/constants";
import Image from "next/image";
import React from "react";

const VeSinhTheoGio = () => {
  return (
    <main>
      <div className="banner relative">
        <Image
          src={"/banner1.jpg"}
          alt="ve-sinh-lau-chui"
          sizes="100vw"
          width={0}
          height={0}
          className="w-full h-auto"
        />
      </div>
      <section className="pt-10  pb-32 px-5">
        <div className="pt-10">
          <div className={`flex gap-10 max-lg:flex-col flex-row-reverse mt-10`}>
            <div className="image w-full">
              <Image
                src={"/post1.jpg"}
                alt="about"
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="content space-y-7">
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
                  Dịch vụ giúp việc hằng ngày chuyên nghiệp, uy tín tại Trần lê
                </h3>
              </div>
              <p className="text-2xl max-sm:text-base">
                <i>
                  {" "}
                  Cuộc sống bận rộn khiến cho Quý khách không có thời gian để
                  chăm sóc nhà cửa, Quý khách đang băn khoăn không biết nên lựa
                  chọn dịch vụ giúp việc ở đâu? Vậy Quý khách có thể tham khảo
                  dịch vụ giúp việc hằng ngày tại Trần lê . Chắc chắn với sự
                  chuyên nghiệp, uy tín của dịch vụ này sẽ khiến Quý khách hài
                  lòng.
                </i>
              </p>

              <p className="text-2xl max-sm:text-base">
                Mặc dù trên thị trường hiện nay có rất nhiều địa chỉ cung cấp
                dịch vụ{" "}
                <span className="font-bold">
                  giúp việc theo giờ, giúp việc nhà.
                </span>{" "}
                Tuy nhiên, Trần lê là một đơn vị được đông đảo khách hàng tin
                tưởng lựa chọn bởi:
              </p>
            </div>
          </div>
          <div className={`flex gap-10 max-lg:flex-col mt-10`}>
            <div className="image w-full">
              <Image
                src={"/may-hut-bui.jpg"}
                alt="about"
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="content space-y-7">
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
                  Dịch vụ chuyên nghiệp
                </h3>
              </div>
              <p className="text-2xl max-sm:text-base">
                Là một đơn vị uy tín có nhiều năm kinh nghiệm trong lĩnh vực
                giúp việc gia đình nên khi sử dụng dịch vụ giúp việc nhà khách
                hàng có thể hoàn toàn yên tâm về tính chuyên nghiệp của Trần lê
                ở tất cả mọi khâu như: Tiếp nhận thông tin khách hàng, tư vấn
                dịch vụ, quy trình thực hiện các công việc khi dọn dẹp nhà cho
                khách hàng…
              </p>
              <p className="font-bold text-2xl max-sm:text-base">
                Đội ngũ giúp việc chuyên nghiệp, nhiệt tình
              </p>
              <p className="text-2xl max-sm:text-base">
                Đến với dịch vụ giúp việc theo tháng hay bất cứ dịch vụ giúp
                việc nào của Trần lê khách hàng có thể hoàn toàn yên tâm bởi đội
                ngũ nhân viên làm việc chuyên nghiệp, nhiệt tình. Tất cả nhân
                viên, người giúp việc của Trần lê đều được đào tạo bài bản, tác
                phong làm việc nhanh nhẹn biết sắp xếp công việc nhà một cách
                khoa học để đảm bảo chất lượng công việc tốt nhất.
              </p>
              <p className="text-2xl max-sm:text-base">
                Đặc biệt, người giúp việc nhà của Trần lê đều là những người có
                lý lịch rõ ràng, khỏe mạnh, chăm chỉ, thật thà nên không bao giờ
                xảy ra tình trạng mất đồ của khách hàng trong thời gian làm
                việc.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-10">
          <div className="flex items-center space-x-2">
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
            <h3 className="text-greenTheme text-3xl max-sm:text-base font-bold">
              Cam kết của Trần lê về dịch vụ giúp việc hằng ngày
            </h3>
          </div>
          <div className="space-y-5 mt-5">
            <p className="text-2xl max-sm:text-base">
              Trần lê cam kết cung cấp dịch vụ giúp việc hằng ngày chất lượng
            </p>
            <p className="text-2xl max-sm:text-base">
              Để khẳng định chất lượng dịch vụ cũng như sự uy tín của Trần lê và
              lợi ích của khách hàng khi sử dụng dịch vụ, Trần lê cam kết:
            </p>
          </div>
          <div>
            <ul className="px-5 list-disc space-y-5 mt-5">
              <li>
                <p className="text-2xl max-sm:text-base">
                  Cung cấp dịch vụ giúp việc nhà với chất lượng tốt nhất.
                </p>
              </li>
              <li>
                <p className="text-2xl max-sm:text-base">
                  Tuyệt đối không xảy ra tình trạng mất cắp đồ đạc trong quá
                  trình thực hiện dịch vụ.
                </p>
              </li>
              <li>
                <p className="text-2xl max-sm:text-base">
                  Giá dịch vụ đảm bảo cạnh tranh nhất..
                </p>
              </li>
              <li>
                <p className="text-2xl max-sm:text-base">
                  Thời gian thực hiện các công việc nhà nhanh chóng, khoa học.
                </p>
              </li>
              <li>
                <p className="text-2xl max-sm:text-base">
                  Nhân viên giúp việc ổn định.
                </p>
              </li>
              <li>
                <p className="text-2xl max-sm:text-base">
                  Đền bù thiệt hại nếu xảy ra tình trạng hỏng hóc, mất cắp.
                </p>
              </li>
            </ul>
            <p className="text-2xl max-sm:text-base mt-10">
              Quý khách có nhu cầu tìm người giúp việc hãy liên hệ ngay với
              hotline Trần lê <span className="font-bold">{phoneNumber}</span>{" "}
              để được tư vấn và hỗ trợ tốt nhất.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default VeSinhTheoGio;
