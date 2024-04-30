"use client";
import { instance } from "@/config";
import { contentService, listMenu } from "@/constants";
import { ConfigProvider, Popover } from "antd";
import Link from "next/link";
import { toast } from "react-toastify";
import { userState } from "@/store";

const Menu = () => {
  const { user } = userState();
  const content = (
    <div className="flex flex-col space-y-2 !w-[400px]">
      {contentService.map((item, index) => {
        return (
          <Link key={index} href={item.link}>
            <div
              key={index}
              className="hover:bg-gray-100 cursor-pointer transition-all p-3"
            >
              <p className="text-xl">{item.title}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
  const userInfo = (
    <div>
      <p className="text-xl hover:bg-gray-100 cursor-pointer transition-all p-3 ">
        <Link href={"/thong-tin-ca-nhan"}>Xem trang cá nhân</Link>
      </p>
      <p className="hover:bg-gray-100 text-xl cursor-pointer transition-all p-3">
        <button
          onClick={async () => {
            await instance.post(`/account/logout/`);
            toast.success("Đăng xuất thành công !!");
            window.location.reload();
          }}
        >
          Đăng xuất
        </button>
      </p>
    </div>
  );
  return (
    <section className="flex items-center justify-between max-xl:hidden">
      <ul className="flex justify-center space-x-6 items-center">
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
                    className="capitalize flex text-xl rounded-3xl cursor-pointer transition-all text-[#272727 ]  font-bold"
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
                className="capitalize rounded-3xl cursor-pointer transition-all text-[#272727 ] text-xl  font-bold"
                href={item.link}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
        {user ? (
          <li>
            <Popover
              className="flex items-center space-x-2 cursor-pointer"
              placement="bottom"
              content={userInfo}
            >
              <p className="capitalize bg-slate-200  items-center p-3 rounded-full cursor-pointer transition-all text-[#272727 ] text-xl  font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-user"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </p>
              <span className="text-xl">{user?.name}</span>
            </Popover>
          </li>
        ) : (
          <li>
            <Link
              className="capitalize rounded-3xl cursor-pointer transition-all text-[#272727 ] text-xl  font-bold"
              href={"/dang-nhap"}
            >
              Đăng nhập
            </Link>
          </li>
        )}
      </ul>
    </section>
  );
};

export default Menu;
