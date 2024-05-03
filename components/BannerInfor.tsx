import { phoneNumber } from "@/constants";
import Image from "next/image";
import React from "react";

const BannerInfor = () => {
  return (
    <section className="px-10 max-lg:px-5 max-lg:flex-col  py-10 bg-greenTheme max-lg:space-y-5 flex justify-between items-start">
      <div className="left">
        <div className="space-y-2">
          <h2 className="font-bold  text-white max-sm:text-lg text-2xl">
            Bạn cần tư vấn dịch vụ dọn dẹp vệ sinh của chúng tôi?
          </h2>
          <p className="text-white text-2xl font-light max-sm:text-lg">
            Cách nhanh nhất, vui lòng liên hệ trực tiếp với tư vấn viên qua một
            trong các kênh sau:
          </p>
        </div>
      </div>
      <div className="right">
        <div className="flex space-x-5">
          <div className="space-y-2 flex flex-col items-center">
            <Image
              width={70}
              height={20}
              className="max-sm:w-[50px]"
              src={"/icon-chat-zalo.png"}
              alt="icon-zalo"
            ></Image>
            <span className="text-xl max-sm:text-base font-light text-white">
              Chat Zalo
            </span>
          </div>
          <div className="space-y-2 flex flex-col items-center">
            <Image
              width={70}
              height={20}
              className="max-sm:w-[50px]"
              src={"/icon-chat-messenger.png"}
              alt="icon-message"
            ></Image>
            <span className="text-xl max-sm:text-base font-light text-white">
              Chat Message
            </span>
          </div>
          <div className="space-y-2 flex flex-col items-center">
            <Image
              width={70}
              height={20}
              className="max-sm:w-[50px]"
              src={"/phone-icon.png"}
              alt="icon-phonenumber"
            ></Image>
            <span className="text-xl max-sm:text-base font-light text-white">
              {phoneNumber}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerInfor;
