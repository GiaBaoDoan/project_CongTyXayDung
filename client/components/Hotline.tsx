import { phoneNumber } from "@/constants";
import React from "react";

const Hotline = () => {
  return (
    <section className="w-full">
      <div className="fixed z-10  left-[20px] bottom-[10%]">
        <div className="space-y-3 max-md:hidden">
          <p className="bg-[#7dbd2a] p-4  px-6 rounded-full text-white text-2xl">
            Chat Zalo
          </p>
          <p className="bg-[#125c9e] p-4  px-6 text-white rounded-full text-2xl">
            Chat Facebook
          </p>
          <p className="bg-greenTheme  p-4  px-6 text-white rounded-full text-2xl ">
            Hotline : {phoneNumber}
          </p>
        </div>
      </div>
      <div className="bg-[#7dbd2a] max-lg:grid-cols-1 w-full grid grid-cols-3 fixed bottom-0 z-10">
        <div className="border-r-[2px] max-md:hidden border-white">
          <p className="text-white text-2xl p-3 text-center">
            Công ty Vệ sinh xây dựng trần lê
          </p>
        </div>
        <div className="border-r-[2px] max-md:hidden border-white">
          <p className="text-white text-2xl p-3 text-center">
            Vệ sinh, xây dựng, sữa chữa
          </p>
        </div>
        <div className="">
          <p className="text-white text-2xl p-3 text-center">
            Hotline : {phoneNumber}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hotline;
