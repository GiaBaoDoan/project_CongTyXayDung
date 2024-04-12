import { TitleProps } from "@/types";
import React from "react";
const Title = ({ content }: TitleProps) => {
  return (
    <div className="flex items-center">
      <div className="w-14 h-[3px] bg-redTheme"></div>
      <div className="p-6 rounded bg-redTheme">
        <p className="text-white font-bold text-xl uppercase">{content}</p>
      </div>
      <div className="w-14 rounded h-[3px] bg-redTheme"></div>
    </div>
  );
};

export default Title;
