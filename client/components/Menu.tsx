import { listMenu } from "@/constants";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <section className="flex items-center flex-1 justify-between max-xl:hidden">
      <div className="flex justify-center flex-1">
        {listMenu.map((item) => {
          return (
            <Link
              className="uppercase rounded-3xl cursor-pointer hover:bg-redTheme transition-all xl:p-5 p-3 xl:text-xl text-base text-white font-medium"
              href={item.link}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
      <div>
        <div className="text-white font-bold text-xl">
          <UserOutlined className="mr-2" />
          <span className="hover:bg-redTheme cursor-pointer rounded-3xl transition-all p-5 text-xl text-white font-medium">
            ĐĂNG NHẬP
          </span>
          <span>/</span>
          <span className="hover:bg-redTheme rounded-3xl cursor-pointer transition-all p-5 text-xl text-white font-medium">
            ĐĂNG KÝ
          </span>
        </div>
      </div>
    </section>
  );
};

export default Menu;
