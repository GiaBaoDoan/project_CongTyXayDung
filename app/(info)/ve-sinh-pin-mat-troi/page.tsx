import { phoneNumber } from "@/constants";
import Image from "next/image";
import React from "react";

const VeSinhPinMatTroi = () => {
  return (
    <main className="px-5 py-10 pb-24">
      <section>
        <div className="flex justify-center ">
          <Image
            src={"/Ve-sinh-tam-pin-nang-luong-mat-troi-3.jpg"}
            alt="banner-ve-sinh-pin-mat-troi"
            width={0}
            sizes="100vw"
            className="w-full"
            height={500}
          />
        </div>
        <div className="mt-10 flex space-y-3 max-lg:flex-col">
          <div className="flex-1">
            <div>
              <h3 className="text-xl max-sm:text-base font-bold text-greenTheme">
                Các nguyên nhân khiến tấm Pin năng lượng mặt trời bị bẩn
              </h3>
              <br />
              <p className="text-xl max-sm:text-base">
                Do ô nhiễm trong không khí tại khu vực đông xe cộ qua lại hoặc
                gần khu công nghiệp, khu chế xuất…v.v.
                <br />
                Khu vực có nhiều cây cối, Lá cây rụng bám dính lên bề mặt tấm
                Pin.
                <br />
                Khu vực có nhiều chim chóc, Phân chim lâu ngày bám dính vào mặt
                kính tấm Pin. Các chất bẩn bám dính, tích tụ lâu ngày trên bề
                mặt pin mặt trời sẽ nhanh chóng làm bề mặt kính của tấm pin bị
                ăn mòn, bám bẩn, hạn chế ánh sáng tiếp xúc với bề mặt pin, làm
                giảm công suất phát điện. Do vậy, cần phải thường xuyên bảo
                dưỡng tấm pin năng lượng mặt trời để giữ cho công suất phát điện
                luôn được tối ưu nhất.
              </p>
            </div>
            <br />
            <br />
            <div className="">
              <h3 className="text-xl max-sm:text-base font-bold text-greenTheme">
                Tại sao cần phải vệ sinh tấm Pin năng lượng mặt trời?
              </h3>
              <br />
              <div className="text-xl max-sm:text-base">
                Càng nhiều ánh sáng tiếp xúc với tấm pin năng lượng mặt trời,
                thì càng nhiều điện năng được sinh ra và phần bụi bẩn bám phía
                trên mặt kính của tấm Pin mặt trời là tác nhân chủ yếu gây giảm
                hiệu suất nhiều nhất cho hệ thống điện mặt trời.
                <br />
                <br />
                Các tấm pin năng lượng mặt trời (solar panel) có hiệu suất phát
                điện cao nhất khi bề mặt kính để hấp thu ánh nắng của chúng được
                vệ sinh làm sạch, các tấm Pin bị bám bẩn sẽ làm giảm hiệu suất
                phát điện, khiến bạn tốn nhiều thời gian hơn để thu hồi lại vốn
                đầu tư.
              </div>
            </div>
          </div>
          <div>
            <Image
              width={400}
              height={300}
              className="w-auto h-auto max-lg:w-full"
              src={"/avt-ve-sinh-pin-mat-troi.webp"}
              alt="anh-ve-sinh-pin-mat-troi"
            />
          </div>
        </div>
        <div className="mt-10 space-x-10 flex">
          <div>
            <div>
              <h3 className="text-xl max-sm:text-base font-bold text-greenTheme ">
                Lợi ích của việc làm sạch tấm Pin năng lượng mặt trời
              </h3>
              <ul className="text-xl list-disc px-5 mt-3 max-sm:text-base space-y-3">
                <li>
                  Tuổi thọ của hệ thống pin năng lượng mặt trời sẽ được kéo dài.
                </li>
                <li>Công suất phát điện được tối ưu.</li>
                <li>
                  Hiệu quả hoạt động của toàn bộ hệ thống điện năng lượng mặt
                  trời sẽ được gia tăng.
                </li>
                <li>Giảm thiểu chi phí bảo trì sửa chữa.</li>
                <li>Tăng hiệu quả về mặt đầu tư.</li>
              </ul>
            </div>
            <div className="mt-3">
              <h3 className="text-xl max-sm:text-base font-bold text-greenTheme">
                Khi nào nên làm vệ sinh bề mặt tấm Pin
              </h3>
              <div className="mt-3">
                <p className="text-xl max-sm:text-base">
                  Tần suất vệ sinh/rửa hệ thống pin năng lượng mặt trời phụ
                  thuộc vào rất nhiều yếu tố, bao gồm các yếu tố cơ bản như có
                  gần đường giao thông hay không, có gần các khu vực sản xuất
                  công nghiệp, các nhà máy sản xuất mà có nhiều khói bụi, khu
                  vực rừng núi có nhiều chim chóc hay không..v.v.
                </p>
                <br />
                <p className="text-xl max-sm:text-base">
                  Vệ sinh Trần Lê khuyến nghị khách hàng nên thực hiện vệ sinh
                  chùi rửa các tấm pin năng lượng mặt trời với tần suất khoảng
                  1-3 lần trong năm, tuỳ theo mức độ bám bẩn tại khu vực Dự án
                  của khách hàng. Các khoảng thời gian cần thiết để vệ sinh tấm
                  Pin mặt trời là: Khi bắt đầu vào mùa đông, chúng ta vệ sinh
                  lại hệ thống pin sau 1 chu kỳ khai thác và Khi bắt đầu sang
                  xuân, lúc các hệ thống pin năng lượng mặt trời cần hoạt động
                  hết công suất khai thác trong suốt cả mùa hè nhằm thu lại lợi
                  nhuận cao nhất.
                </p>
              </div>
            </div>
          </div>
          <Image
            className="flex-1"
            width={400}
            height={400}
            src={"/ve-sinh-mat-troi.jpg"}
            alt="anh-ve-sinh-pin-mat-troi"
          />
        </div>
        <div className="mt-10">
          <p className="text-xl max-sm:text-base">
            <span className="font-bold">Trần Lê</span> cung cấp dịch vụ vệ sinh
            hệ thống pin năng lượng mặt trời đáp ứng các yêu cầu khắt khe về an
            toàn lao động, chất lượng hiệu quả công việc, tiến độ thi công, kỹ
            năng xử lý giải quyết các vấn đề phát sinh, tinh thần trách nhiệm
            cao đã giúp chúng tôi có được uy tín trong ngành công nghiệp năng
            lượng mặt trời. Quý khách hàng có nhu cầu làm vệ sinh cho hệ thống
            năng lượng của mình, vui lòng liên hệ với chúng tôi qua:{" "}
            <span className="font-bold text-greenTheme">{phoneNumber}</span>
          </p>
        </div>
      </section>
    </main>
  );
};

export default VeSinhPinMatTroi;
