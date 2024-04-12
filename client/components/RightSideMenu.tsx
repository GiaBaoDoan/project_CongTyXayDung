"use client";
import { listMenu } from "@/constants";
import { store } from "@/store";
import { CloseOutlined } from "@ant-design/icons";
import Link from "next/link";
import React, { useState } from "react";
const RightSideMenu = () => {
  const { isOpen, isOpenMenu } = store();
  return (
    <div className="xl:hidden">
      <div
        className={` ${
          isOpen ? "translate-x-[0]" : "translate-x-[-1200px]"
        } fixed top-0 left-0 w-[80%] z-50 transition-all bg-white border h-screen shadow border-gray-200`}
      >
        <CloseOutlined
          onClick={() => isOpenMenu(false)}
          className="px-5 py-8 text-2xl cursor-pointer"
        />
        <div className="flex-col flex">
          {listMenu.map((item) => {
            return (
              <Link
                href={item.link}
                className="hover:bg-[rgba(0,0,0,0.2)] hover:text-redTheme transition-all"
              >
                <hr />
                <p className="text-2xl uppercase font-medium py-5 px-3">
                  {item.title}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RightSideMenu;
