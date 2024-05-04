import { phoneNumber } from "@/constants";
import React from "react";

const Hotline = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    });
  };
  return (
    <section className="w-full">
      <div className="fixed z-10  left-[20px] bottom-[10%]">
        <div className="space-y-3 max-md:hidden">
          <p className="bg-[#7dbd2a] p-4  px-6 rounded-full text-white text-xl">
            Chat Zalo
          </p>
          <p className="bg-[#125c9e] p-4  px-6 text-white rounded-full text-xl">
            Chat Facebook
          </p>
          <p className="bg-greenTheme  p-4  px-6 text-white rounded-full text-xl ">
            Hotline : {phoneNumber}
          </p>
        </div>
      </div>
      <div
        onClick={scrollToTop}
        className="fixed bottom-14 rounded right-5 cursor-pointer bg-green-700 flex justify-center items-center w-[50px] h-[50px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          color="white"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevron-up"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </div>
      <div className="bg-greenTheme max-lg:grid-cols-1 w-full grid grid-cols-3 fixed bottom-0 z-10">
        <div className="border-r-[2px] max-md:hidden border-white">
          <p className="text-white text-xl p-3 text-center">
            Công ty Vệ sinh xây dựng Trần Lê
          </p>
        </div>
        <div className="border-r-[2px] max-md:hidden border-white">
          <p className="text-white text-xl p-3 text-center">
            Vệ sinh, xây dựng, sữa chữa
          </p>
        </div>
        <div className="">
          <p className="text-white text-xl p-3 text-center">
            Hotline : {phoneNumber}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hotline;
