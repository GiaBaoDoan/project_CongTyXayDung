"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import "animate.css";
import { store } from "@/store";
import Link from "next/link";
import { MenuOutlined } from "@ant-design/icons";
const Navbar = () => {
  const { isOpenMenu } = store();
  const [toogle, setToogle] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 150) {
        setToogle(true);
      } else {
        setToogle(false);
      }
    };
    if (window) window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  });
  return (
    <header>
      <div className="header-fixed">
        <div className="top-header bg-gray-200">
          <div className="container-top-header px-10 max-lg:px-5 py-2 ">
            <div className="flex justify-between max-lg:justify-center">
              <p className="text-xl max-sm:text-lg">Công ty vệ sinh xây dựng Trần lê </p>
              <div className="flex max-lg:hidden">
                <ul className="flex space-x-2">
                  <li className="border-r border">
                    <a href="mailto:info.vesinhcongnghiep@gmail.com">
                      <span className="flex space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          color="gray"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-mail"
                        >
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                        <span className="text-xl">info.vesinhcongnghiep@gmail.com</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="tel:0911.212.233">
                      <span className="flex space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          color="gray"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-phone"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        <span className="text-lg"> 0911.212.233</span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <nav
          style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          className={`px-10 ${
            toogle ? "is-sticky" : ""
          } max-lg:px-5 w-full sticky bg-white py-5 duration-500 transition-all  flex items-center justify-between`}
        >
          <Link href={"/"}>
            <Image src={"/logo.png"} width={80} height={8} className="max-md:w-[60px] max-sm:w-[50px]" alt="logo" />
          </Link>
          {/* screens > 1280px => show this menu */}
          <Menu />
          {/* screens =< 1280px => show this menu */}
          <div onClick={() => isOpenMenu(true)} className="xl:hidden">
            <div className="flex items-center space-x-3 cursor-pointer border-redTheme rounded-md border py-1 px-2">
              <span className="text-redTheme text-xl max-sm:text-lg font-medium">MENU</span>
              <MenuOutlined className="text-redTheme font-extrabold" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
