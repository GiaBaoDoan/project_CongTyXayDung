import { listAbout } from "@/constants";
import Image from "next/image";
import React from "react";
import Title from "./Title";

const About = () => {
  return (
    <div className="px-6 py-16 flex flex-col items-center">
      <div className="flex">
        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-lg:mx-5 max-sm:grid-cols-1">
          {listAbout.map((item) => {
            return (
              <div className="flex flex-col space-y-2 max-lg:mt-5 items-center">
                <Image
                  width={112}
                  height={20}
                  src={item.icon}
                  alt="icon"
                  className="max-md:w-[70px]"
                />
                <p className="text-3xl max-sm:text-xl text-center text-[#444e58] font-bold">
                  {item.title}
                </p>
                <p className="text-center font-normal text-[#444e58] text-xl md:w-[80%]">
                  {item.content}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
