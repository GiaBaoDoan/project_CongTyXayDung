import { phoneNumber } from "@/constants";
import { PhoneOutlined } from "@ant-design/icons";
import Image from "next/image";
import React from "react";
const Infor = () => {
  return (
    <section className="px-6 max-md:py-8 flex bg-[#f2f2f294] justify-center py-16">
      <div className="grid grid-cols-2 w-[90%] mx-auto max-xl:w-[100%] max-lg:grid-cols-1">
        <div className="max-md:hidden">
          <h2 className="text-4xl text-redTheme max-md:text-2xl font-bold">
            Công Ty Xây Dựng Trần Lê
          </h2>
          <p className="mt-6 text-2xl max-md:hidden">
            Vệ Sinh Công Nghiệp Tiến Phát - đối tác đáng tin cậy cho mọi nhu cầu
            vệ sinh của bạn. Chúng tôi tự hào là một trong những đơn vị hàng đầu
            cung cấp các dịch vụ vệ sinh công nghiệp chất lượng. Với hơn một
            thập kỷ kinh nghiệm trong ngành, chúng tôi đã xây dựng được uy tín
            và lòng tin từ khách hàng bằng sự cam kết mang đến sự sạch sẽ, an
            toàn và tiện lợi. <br /> <br /> Chúng tôi chuyên cung cấp các dịch
            vụ vệ sinh công nghiệp, vệ sinh nhà sau xây dựng, nhà phố, trường
            học, căn hộ, vệ sinh định kỳ. Với đội ngũ nhân viên giàu kinh nghiệm
            và trang thiết bị hiện đại, chúng tôi tự tin rằng mọi dịch vụ vệ
            sinh mà chúng tôi cung cấp đều đạt được tiêu chuẩn cao nhất về chất
            lượng và hiệu suất.
          </p>
        </div>
        <div className="md:hidden ">
          <Image
            alt="iStock"
            src={"/team.png"}
            width={100}
            height={200}
            className="mt-6 w-full h-[200]"
          />
        </div>
        <div className="text-center max-lg:mt-6  font-bold">
          <h2 className="text-4xl max-md:text-2xl text-redTheme">
            Công Ty Xây Dựng Trần Lê
          </h2>
          <h2 className="text-redTheme text-4xl  max-md:text-2xl">
            Chuyên Nghiệp - Tận Tâm - Giá Cạnh Tranh
          </h2>
          <div className="flex p-4 max-sm:flex-col items-center max-sm:space-y-3 justify-center text-3xl max-xl:text-xl space-x-3 mt-6">
            <div className=" rounded-full space-x-3 hover:border-redTheme cursor-pointer hover:text-redTheme border-black flex items-center p-3  border font-bold">
              <PhoneOutlined />
              <p>Gọi: {phoneNumber}</p>
            </div>
            <div className=" rounded-full hover:border-redTheme cursor-pointer hover:text-redTheme space-x-3 flex border-black items-center p-3 border font-bold">
              <PhoneOutlined />
              <p>Zalo: {phoneNumber}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infor;
