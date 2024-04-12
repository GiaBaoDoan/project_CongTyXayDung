"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import { MenuOutlined } from "@ant-design/icons";
import { store } from "@/store";
const Navbar = () => {
  const { isOpenMenu } = store();
  const [toogle, setToogle] = useState(false);
  window.addEventListener("scroll", () => {
    if (scrollY > 300) {
      setToogle(true);
    } else {
      setToogle(false);
    }
  });
  return (
    <header
      className={`${toogle ? "fixed z-10 w-full" : ""}`}
      style={{ backgroundColor: "#123247" }}
    >
      <nav className="mx-auto max-sm:space-y-3 space-x-2 flex items-center justify-between sm:px-15 px-6 py-4 ">
        <Link href="/" className="flex  justify-center space-x-3 items-center">
          <Image
            src="/logo-building.png"
            alt="logo"
            width={100}
            height={18}
            className="object-contain rounded-full max-sm:w-[60px]"
          />
          <div className="flex flex-col">
            <h3 className="font-medium text-xl max-sm:text-base text-white">
              Công ty xây dựng
            </h3>
            <p className="font-bold text-2xl max-sm:text-lg text-redTheme">
              TRẦN LÊ
            </p>
          </div>
        </Link>
        {/* screens > 1280px => show this menu */}
        <Menu />
        {/* screens =< 1280px => show this menu */}
        <div onClick={() => isOpenMenu(true)} className="xl:hidden">
          <div className="flex items-center space-x-3 cursor-pointer border-redTheme rounded-md border py-1 px-2">
            <span className="text-redTheme text-xl max-sm:text-lg font-medium">
              MENU
            </span>
            <MenuOutlined className="text-redTheme font-extrabold" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
