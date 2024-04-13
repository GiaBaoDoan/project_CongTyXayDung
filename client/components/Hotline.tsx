import { phoneNumber } from "@/constants";
import { PhoneOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hotline = () => {
  return (
    <section>
      <div className="fixed z-10 left-[20px] bottom-[20%]">
        <div className="bg-redTheme cursor-pointer hover:bg-red-700 p-4 font-medium rounded-full flex text-xl items-center space-x-3 text-white">
          <PhoneOutlined size={20} />
          <Link href={"/"}>{phoneNumber}</Link>
        </div>
      </div>
      <div className="fixed z-10 left-[20px] bottom-[20%]">
        {/* <div>
          <Image src={"/zaloIcon.svg"} alt="zalo-icon" />
          <Image src={"/mapPinIcon.svg"} alt="mapPinIcon" />
        </div> */}
      </div>
    </section>
  );
};

export default Hotline;
