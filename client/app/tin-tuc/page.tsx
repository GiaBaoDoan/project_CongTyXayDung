import { ListNews } from "@/components";
import { newsModel } from "@/constants";
import React from "react";

const Tintuc = () => {
  return (
    <section>
      <div className="space-y-5 w-full">
        <p className="text-2xl">
          <span className="text-greenTheme">Trang chủ </span>
          {">>"} Tin tức
        </p>
        <h2 className="text-3xl text-greenTheme">Category Archives: Tin tức</h2>
        <div className="text-2xl">
          <p>
            <span className="font-bold">Trần lê</span> với sứ mệnh nỗ lực từng
            ngày trong việc trở thành đơn vị cung cấp các dịch vụ dọn dẹp hàng
            đầu trên thị trường cùng những giải pháp linh hoạt và toàn diện
            nhất.
          </p>
          <p>
            <span className="font-bold">Trần lê</span> ra đời với mong muốn mang
            đến một không gian sống sạch sẽ, trong lành, thoải mái và hạnh phúc
            cho các gia đình. Không những thế, với các dịch vụ vệ sinh văn
            phòng, chúng tôi còn hướng đến sự tiện nghi và thành công cho các
            công ty…
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tintuc;
