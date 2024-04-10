"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import { MenuOutlined } from "@ant-design/icons";
import { store } from "@/store";
const Navbar = () => {
  const { isOpenMenu } = store();
  return (
    <header style={{ backgroundColor: "#123247" }}>
      <nav className="mx-auto space-x-2 flex items-center justify-between sm:px-16 px-6 py-4 ">
        <Link href="/" className="flex justify-center space-x-3 items-center">
          <Image
            src="/logo-building.png"
            alt="logo"
            width={100}
            height={18}
            className="object-contain rounded-full"
          />
          <div className="flex flex-col">
            <h3 className="font-medium text-xl text-white">Công ty xây dựng</h3>
            <p className="font-bold text-2xl text-redTheme">TRẦN LÊ</p>
          </div>
        </Link>
        {/* screens > 1280px => show this menu */}
        <Menu />
        {/* screens =< 1280px => show this menu */}
        <div onClick={() => isOpenMenu(true)} className="xl:hidden">
          <div className="flex items-center space-x-3 cursor-pointer border-redTheme rounded-md border p-2">
            <span className="text-redTheme text-xl font-medium">MENU</span>
            <MenuOutlined className="text-redTheme font-extrabold" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
