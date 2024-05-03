import Image from "next/image";
import React from "react";

const VeSinhDanhBongSan = () => {
  return (
    <section className="">
      <Image
        src={"/danh-bong-san.jpg"}
        alt="dich-vu-lau-chui"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
      />
      <div
        className="px-5 py-10 pb-24 flex max-lg:flex-col lg:space-x-10 space-y-10"
        style={{ backgroundColor: "rgb(246, 246, 247)" }}
      >
        <div className="space-y-5 w-full">
          <h3 className="font-bold text-2xl max-sm:text-lg">
            Quy trình chà sàn đánh bóng sàn
          </h3>
          <div className="text-xl  space-y-5 max-sm:text-base">
            <p>
              Chà sàn đánh bóng sàn là công việc định kỳ bạn cần thực hiện cho
              sàn nhà của mình. Tại các nơi đông người qua lại như các trung tâm
              thương mại, nhà ga, sân bay thì cần đánh sàn nhiều hơn bằng các
              máy đánh sàn liên hợp. Quy trình chà sàn với các công ty vệ sinh
              không còn xa lạ gì. Tại đây,{" "}
              <span className="font-bold">Trần Lê</span> chia sẻ quy trình này
              cho người mới bắt đầu. Trong các hạng mục công trình, các hạng mục
              xuống cấp và các vấn đề chủ yếu: mặt đá bị ố vàng, bị bám bụi bẩn
              lâu ngày, mặt sàn không còn sáng bóng cần thực hiện chà sàn đánh
              bóng sàn.
            </p>
          </div>
          <div className="text-xl  space-y-5 max-sm:text-base">
            <p>Máy móc và dụng cụ vệ sinh cần chuẩn bị</p>
            <p>
              Các loại biển báo như biển báo đang thực hiện vệ sinh, biển báo
              sàn ướt.
            </p>
            <p>
              Các loại biển báo như biển báo đang thực hiện vệ sinh, biển báo
              sàn ướt.
            </p>
            <p>
              Máy mài nền bê tông, máy đánh sàn, máy hút bụi bê tông/hút nước,
              bình xịt hóa chất, đĩa đánh bóng bê tông seclean đầu số 30, 50,
              100, 200, 400,,800,1500,3000, pad đánh sàn các loại đen đỏ trắng,
              keo chống nứt, và một số dụng cụ vệ sinh khác.
            </p>
            <p>Bước 2: Dọn dẹp khu vực làm việc và đánh giá bề mặt đá</p>
            <p>
              Bạn cần dọn dẹp các đồ đạc ra khỏi phạm vi làm việc trước khi bắt
              tay vào công việc. Bước tiếp theo là phá bỏ lớp cũ. Sau đó tạo
              đường ron mới đều và đẹp hơn bằng keo chuyên dụng. Tác dụng của
              loại keo này ngăn bám bẩn và sẽ bóng lên khi đánh bóng đá.
            </p>
          </div>
          <Image
            src={"/banner1.jpg"}
            alt="dich-vu-lau-chui"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
          <div>
            <h3 className="font-bold text-2xl max-sm:text-lg">
              Hướng dẫn chà sàn đánh bóng sàn
            </h3>
          </div>
          <div className="text-xl space-y-5 max-ms:text-base">
            <p>Bước 3: Tiến hành đánh sàn</p>
            <p>Bước 4: Chống thấm</p>
            <p>
              Sử dụng hóa chất chống thấm để ngăn nước và vết bẩn thấm vào đá
              giúp tăng cường tuổi thọ và Vệ sinh lại sàn đá. Khâu cuối cùng bạn
              sử dụng hóa chất để trung hòa và lau chùi toàn bộ các hóa chất,
              bụi bẩn còn sót lại trong quá trình đánh bóng.
            </p>
            <p>
              Với kinh nghiệm nhiều năm trong lĩnh vực làm sạch, công ty vệ sinh
              <span className="font-bold">Trần Lê</span> cung cấp các dịch vụ vệ
              sinh, tư vấn và các loại máy chà sàn cùng với hóa chất vệ sinh
              công nghiệp chuyên dụng. Chúng tôi sẵn sàng tư vấn cho bạn 24/7.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VeSinhDanhBongSan;
