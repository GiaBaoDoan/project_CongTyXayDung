import { phoneNumber } from "@/constants";
import Image from "next/image";
import React from "react";

const VeSinhDienLanh = () => {
  return (
    <main>
      <div className="banner relative flex justify-center"></div>
      <section className="pt-10 pb-32 px-5">
        <div className="pt-10">
          <div className={`flex gap-10 max-lg:flex-col flex-row-reverse mt-10`}>
            <div className="image w-full">
              <Image
                src={"/ve-sinh-may-lanh.jpg"}
                alt="ve-sinh-may-lanh"
                width={500}
                height={300}
                className=""
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
                <h3 className="text-2xl max-sm:text-xl font-bold text-greenTheme">
                  Quy trình vệ sinh máy lạnh
                </h3>
              </div>
              <p className="text-xl max-sm:text-base">
                <i>
                  {" "}
                  Ngày nay máy lạnh, máy điều hòa là thiết bị phổ biến và không
                  thể thiếu trong cuộc sống hiện đại của chúng ta. Với khả năng
                  làm mát không chỉ trong các ngày hè nóng bức mà còn cả trong
                  mùa đông, máy lạnh giúp chúng ta tạo ra một môi trường thoải
                  mái và dễ chịu. Tuy nhiên, nếu không được vệ sinh và bảo dưỡng
                  đúng cách, đúng định kỳ thì máy lạnh có thể trở thành một
                  nguồn gây ô nhiễm không khí và gây hại cho sức khỏe của gia
                  đình bạn. Vì vậy việc định kỳ vệ sinh máy lạnh trong quá trình
                  sử dụng là rất cần thiết. Hãy để dịch vụ vệ sinh máy lạnh của
                  Phúc Hưng đồng hành cùng gia đình bạn. Chúng tôi Công Ty Phúc
                  Hưng làm dịch vụ cho bạn nếu bạn muốn sử dụng dịch vụ vệ sinh
                  máy lạnh thật chất lượng. Dịch vụ của Phúc Hưng bao gồm nhiều
                  công đoạn, từ kiểm tra gas, làm sạch bộ lọc, ống dẫn nước, vệ
                  sinh bên trong và bên ngoài đơn vị nén, sửa chữa các bộ phận
                  cần thiết và kiểm tra lại hệ thống hoạt động sau khi hoàn
                  thành. Ngoài ra,Phúc Hưng còn có thể cung cấp thêm các dịch vụ
                  khác như bảo dưỡng định kỳ, sửa chữa và thay thế linh kiện khi
                  cần thiết từ máy lạnh dân dụng đến máy lạnh công nghiệp tòa
                  nhà.
                </i>
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
                <h3 className="text-2xl max-sm:text-xl font-bold text-greenTheme">
                  Dịch vụ chuyên nghiệp
                </h3>
              </div>
              <p className="text-xl max-sm:text-base">
                1.Tiếp nhận thông tin: Khách hàng liên hệ với Phúc Hưng qua số
                hotline để yêu cầu vệ sinh máy lạnh. Phúc Hưng tiếp nhận thông
                tin yêu cầu từ khách hàng, ghi lại các thông tin cần thiết như
                địa chỉ, số điện thoại, mô tả sự cố của máy lạnh. <br /> 2.Kiểm
                tra báo giá: Kiểm tra tình trạng hoạt động của thiết bị, đưa ra
                giải pháp vệ sinh và báo giá ( triển khai hợp đồng) theo khung
                giá quy định của công ty. <br /> 3.Tiến hành: Tiến hành vệ sinh
                máy lạnh theo đúng yêu cầu kỹ thuật sau khi khách hàng đã đồng ý
                khung giá <br /> 4.Bàn giao thanh toán: Kiểm tra vận hành máy
                lạnh trước khi bàn giao, dán tem bảo hành và viết phiếu thanh
                toán cho khách hàng <br /> 5.Bảo hành hậu mãi: Chế độ bảo hành
                dài hạn sau khi vệ sinh, có nhiều chế độ ưu đãi dành cho khách
                hàng cũ
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
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
              hotline Trần lê <span className="font-bold">{phoneNumber}</span>{" "}
              để được tư vấn và hỗ trợ tốt nhất.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default VeSinhDienLanh;
