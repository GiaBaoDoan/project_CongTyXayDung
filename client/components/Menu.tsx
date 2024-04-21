import { contentService, listMenu } from "@/constants";
import { ConfigProvider, Popover } from "antd";
import Link from "next/link";
import React from "react";

const content = (
  <div className="flex flex-col space-y-2 !p-[0] !w-[400px]">
    {contentService.map((item, index) => {
      return (
        <Link key={index} href={item.link}>
          <div key={index} className="hover:bg-gray-100 cursor-pointer transition-all p-3">
            <p className="text-2xl">{item.title}</p>
          </div>
        </Link>
      );
    })}
  </div>
);
const Menu = () => {
  return (
    <section className="flex items-center justify-between max-xl:hidden">
      <ul className="flex justify-center space-x-6">
        {listMenu.map((item, i) => {
          return item.link === "/dich-vu" ? (
            <li key={i}>
              <ConfigProvider
                theme={{
                  token: {
                    borderRadius: 0,
                    padding: 0,
                  },
                }}
              >
                <Popover placement="bottom" content={content}>
                  <Link
                    className="capitalize flex text-2xl rounded-3xl cursor-pointer transition-all text-[#272727 ]  font-bold"
                    href={item.link}
                  >
                    {item.title}
                    <svg
                      color="gray"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
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
                  </Link>
                </Popover>
              </ConfigProvider>
            </li>
          ) : (
            <li key={i}>
              <Link
                className="capitalize rounded-3xl cursor-pointer transition-all text-[#272727 ] text-2xl  font-bold"
                href={item.link}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Menu;
