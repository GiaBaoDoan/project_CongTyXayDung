import { ButtonProps } from "@/types";
import React from "react";
const Button = ({ content, styleButton }: ButtonProps) => {
  return (
    <button className={`bg-greenTheme text-white ${styleButton}`}>
      {content}
    </button>
  );
};

export default Button;
