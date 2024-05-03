"use client";
import { contentService, listMenu } from "@/constants";
import { store, userState } from "@/store";
import { CloseOutlined } from "@ant-design/icons";
import Link from "next/link";
import React, { useState } from "react";
const RightSideMenu = () => {
  const { isOpen, isOpenMenu } = store();
  const { user, logout } = userState();
  const [isOpenList, setOpenList] = useState(false);
  return (
    <section className="xl:hidden">
      <div
        className={` ${
          isOpen ? "translate-x-[0]" : "translate-x-[-1200px]"
        } fixed top-0 left-0 w-[80%] z-50 overflow-scroll transition-all bg-white border h-screen shadow border-gray-200`}
      >
        <CloseOutlined
          onClick={() => isOpenMenu(false)}
          className="px-5 py-8 text-xl   cursor-pointer"
        />
        <div className="flex-col flex">
          {listMenu.map((item, index) => {
            return item.link === "/dich-vu" ? (
              <div
                key={index}
                onClick={() => setOpenList(!isOpenList)}
                className="hover:bg-[rgba(0,0,0,0.2)] cursor-pointer transition-all"
              >
                <hr />
                <div className="flex justify-between items-center">
                  <p className="text-xl   capitalize font-medium py-5 px-3">
                    {item.title}
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-down"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
                {isOpenList && (
                  <div className="transition-all duration-300">
                    {contentService.map((item, index) => {
                      return (
                        <Link key={index} href={item.link}>
                          <p className="text-xl   capitalize font-medium py-5 px-3">
                            {item.title}
                          </p>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={index}
                href={item.link}
                className="hover:bg-[rgba(0,0,0,0.2)] transition-all"
              >
                <hr />
                <p className="text-xl capitalize font-medium py-5 px-3">
                  {item.title}
                </p>
              </Link>
            );
          })}
          {user ? (
            <div>
              <hr />
              <div className="hover:bg-[rgba(0,0,0,0.2)] transition-all">
                <Link href={"/thong-tin-ca-nhan"}>
                  <p className="text-xl capitalize font-medium py-5 px-3">
                    Thông tin cá nhân
                  </p>
                </Link>
              </div>
              <hr />
              <div className="hover:bg-[rgba(0,0,0,0.2)] cursor-pointer transition-all">
                <Link href={"/tao-bai-viet"}>
                  <p className="text-xl capitalize font-medium py-5 px-3">
                    Tạo bài viết
                  </p>
                </Link>
              </div>
              <div className="hover:bg-[rgba(0,0,0,0.2)] cursor-pointer transition-all">
                <Link href={"/bai-viet-cua-toi"}>
                  <p className="text-xl capitalize font-medium py-5 px-3">
                    Bài viết của tôi
                  </p>
                </Link>
              </div>
            </div>
          ) : (
            <Link
              href={"/dang-nhap"}
              className="hover:bg-[rgba(0,0,0,0.2)] transition-all"
            >
              <hr />
              <p className="text-xl   capitalize font-medium py-5 px-3">
                Đăng nhập
              </p>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default RightSideMenu;
