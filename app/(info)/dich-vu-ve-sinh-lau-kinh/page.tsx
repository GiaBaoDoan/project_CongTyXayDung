import { phoneNumber } from "@/constants";
import Image from "next/image";
import React from "react";
const VeSinhLauKinh = () => {
  return (
    <main>
      <div className="banner relative">
        <Image
          src={"/lau-kinh1.jpg"}
          alt="ve-sinh-lau-chui"
          sizes="100vw"
          width={0}
          height={0}
          className="w-full h-auto"
        />
      </div>
      <section className="py-10 pb-24 px-5">
        <div>
          <div className={`flex gap-10 max-lg:flex-col flex-row-reverse mt-10`}>
            <div className="image w-full">
              <Image
                src={"/lau-kinh2.jpg"}
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check text-greenTheme"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <h3 className="text-2xl max-sm:text-lg font-bold text-greenTheme">
                  Lợi ích khi thuê dịch vụ lau kính nhà cao tầng của Trần Lê
                </h3>
              </div>
              <p className="text-xl max-sm:text-base">
                <i>
                  {" "}
                  Vệ sinh kính mặt tiền tòa nhà vốn là một công việc nguy hiểm,
                  cần thiết bị chuyên dụng cũng như nhân công có kinh nghiệm để
                  triển khai. Vì thế dịch vụ lau kính chuyên nghiệp GFC CLEAN ra
                  đời để dẹp bỏ các lo ngại này. Đồng thời mang lại nhiều lợi
                  ích như:
                  <br />
                  <span className="font-bold">Tăng tính thẩm mỹ</span>: một tòa
                  nhà với bề mặt kính bên ngoài bị bám đầy bụi bẩn do lâu ngày
                  đã không vệ sinh sẽ nhìn rất cũ kỹ, làm giảm khả năng ánh xạ
                  ánh sáng, làm cho không gian bên trong bị thiếu sáng & thiếu
                  sức sống. Vì thế vệ sinh kính ngoài tòa nhà sẽ giúp trả lại vẻ
                  “long lanh” vốn có ban đầu.
                  <br />
                  <span className="font-bold">Đảm bảo sự an toàn</span>: làm
                  sạch mặt dựng kính định kì sẽ giúp cho quản lý tòa nhà phát
                  hiện kịp thời các vết nứt, hở ron hay men kính bị mất,… từ đó
                  khắc phục kịp thời để đảm bảo sự an toàn khi sử dụng.
                  <br />
                  <span className="font-bold">Giúp tiết kiệm chi phí</span>: so
                  với thay mới thì việc vệ sinh, kiểm tra định kì và sửa chữa
                  kịp thời luôn tiết kiệm chi phí hơn, đảm bảo tuổi thọ cho kính
                  hơn. Giảm thiểu các quy trình phức tạp như tìm kính cùng loại,
                  lên kế hoạch tháo gỡ kính cũ, thuê nhân công lắp kính mới,…
                  tới giai đoạn dọn dẹp sau đó.
                </i>
              </p>
            </div>
          </div>
          <div className={`flex gap-10 max-lg:flex-col mt-10`}>
            <div className="image w-full">
              <Image
                src={"/lau-kinh-3.png"}
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check text-greenTheme"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <h3 className="text-2xl max-sm:text-xl font-bold text-greenTheme">
                  Dịch vụ chuyên nghiệp
                </h3>
              </div>
              <p className="text-xl max-sm:text-base">
                Là một đơn vị uy tín có nhiều năm kinh nghiệm trong lĩnh vực
                giúp việc gia đình nên khi sử dụng dịch vụ giúp việc nhà khách
                hàng có thể hoàn toàn yên tâm về tính chuyên nghiệp của Trần lê
                ở tất cả mọi khâu như: Tiếp nhận thông tin khách hàng, tư vấn
                dịch vụ, quy trình thực hiện các công việc khi dọn dẹp nhà cho
                khách hàng…
              </p>
              <p className="font-bold text-xl max-sm:text-base">
                Đội ngũ giúp việc chuyên nghiệp, nhiệt tình
              </p>
              <p className="text-xl max-sm:text-base">
                Đến với dịch vụ giúp việc theo tháng hay bất cứ dịch vụ giúp
                việc nào của Trần lê khách hàng có thể hoàn toàn yên tâm bởi đội
                ngũ nhân viên làm việc chuyên nghiệp, nhiệt tình. Tất cả nhân
                viên, người giúp việc của Trần lê đều được đào tạo bài bản, tác
                phong làm việc nhanh nhẹn biết sắp xếp công việc nhà một cách
                khoa học để đảm bảo chất lượng công việc tốt nhất.
              </p>
              <p className="text-xl max-sm:text-base">
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-circle-check text-greenTheme"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <h3 className="text-greenTheme text-2xl max-sm:text-base font-bold">
              Cam kết của Trần lê về dịch vụ giúp việc hằng ngày
            </h3>
          </div>
          <div className="space-y-5 mt-5">
            <p className="text-xl max-sm:text-base">
              Trần lê cam kết cung cấp dịch vụ giúp việc hằng ngày chất lượng
            </p>
            <p className="text-xl max-sm:text-base">
              Để khẳng định chất lượng dịch vụ cũng như sự uy tín của Trần lê và
              lợi ích của khách hàng khi sử dụng dịch vụ, Trần lê cam kết:
            </p>
          </div>
          <div>
            <ul className="px-5 list-disc space-y-5 mt-5">
              <li>
                <p className="text-xl max-sm:text-base">
                  Cung cấp dịch vụ giúp việc nhà với chất lượng tốt nhất.
                </p>
              </li>
              <li>
                <p className="text-xl max-sm:text-base">
                  Tuyệt đối không xảy ra tình trạng mất cắp đồ đạc trong quá
                  trình thực hiện dịch vụ.
                </p>
              </li>
              <li>
                <p className="text-xl max-sm:text-base">
                  Giá dịch vụ đảm bảo cạnh tranh nhất..
                </p>
              </li>
              <li>
                <p className="text-xl max-sm:text-base">
                  Thời gian thực hiện các công việc nhà nhanh chóng, khoa học.
                </p>
              </li>
              <li>
                <p className="text-xl max-sm:text-base">
                  Nhân viên giúp việc ổn định.
                </p>
              </li>
              <li>
                <p className="text-xl max-sm:text-base">
                  Đền bù thiệt hại nếu xảy ra tình trạng hỏng hóc, mất cắp.
                </p>
              </li>
            </ul>
            <p className="text-xl max-sm:text-base mt-10">
              Quý khách có nhu cầu tìm người giúp việc hãy liên hệ ngay với
              hotline Trần lê{" "}
              <span className="font-bold text-greenTheme">{phoneNumber}</span>{" "}
              để được tư vấn và hỗ trợ tốt nhất.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default VeSinhLauKinh;
