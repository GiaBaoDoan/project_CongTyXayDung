"use client";
import { _redirect } from "@/action";
import { instance } from "@/config";
import { Form, Input } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";

const DangNhap = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleSignIn = async () => {
    const res = await instance.post("/account/signin/", inputs, {
      withCredentials: true,
    });
    if (res.data.code === 200) {
      console.log(res.data);
      window.location.href = "/";
      toast.success("Đăng nhập thành công");
    }
  };

  return (
    <section className="py-10 flex justify-center">
      <Form
        name="basic"
        style={{
          padding: 30,
          paddingBottom: 70,
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        }}
        initialValues={{ remember: true }}
        autoComplete="off"
        className="space-y-7 w-[500px] max-sm:w-[320px]"
      >
        <div className="">
          <h2 className="text-2xl max-sm:text-lg text-center font-bold">
            Đăng nhập tài khoản
          </h2>
          <div className="mt-5">
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  message: (
                    <p className="text-lg my-2 max-sm:text-base">
                      Email không hợp lệ *
                    </p>
                  ),
                },
                {
                  required: true,
                  message: (
                    <p className="text-lg my-2 max-sm:text-base">
                      Vui lòng nhập email *
                    </p>
                  ),
                },
              ]}
            >
              <Input
                onChange={(e) =>
                  setInputs({ ...inputs, email: e.target.value })
                }
                className="p-4 rounded-none  text-xl max-sm:text-base placeholder-gray-600"
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: (
                    <p className="text-lg my-2 max-sm:text-base">
                      Vui lòng nhập mật khẩu *
                    </p>
                  ),
                },
              ]}
            >
              <Input
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
                type="password"
                className="p-4 rounded-none  text-xl max-sm:text-base placeholder-gray-600"
                placeholder="Mật khẩu"
              />
            </Form.Item>
          </div>
        </div>
        <button
          onClick={handleSignIn}
          className="text-xl flex justify-center space-x-2 items-center rounded-none w-full max-sm:text-base hover:bg-green-800 max-lg:py-2 mt-5 font-bold uppercase bg-greenTheme text-white p-4 "
        >
          <span>Đăng nhập</span>
          <span>
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
              className="lucide lucide-log-in"
            >
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
              <polyline points="10 17 15 12 10 7" />
              <line x1="15" x2="3" y1="12" y2="12" />
            </svg>
          </span>
        </button>
        <div className="space-y-2 mt-5">
          {/* forgot password */}
          <div className="text-xl max-sm:text-base text-center">
            <p className=" ">
              Quên mật khẩu?{" "}
              <Link
                className="hover:text-greenTheme text-greenTheme"
                href={"/quen-mat-khau"}
              >
                Xác thực
              </Link>
            </p>
          </div>
          {/* signup */}
          <div className="text-center text-xl max-sm:text-base">
            <p>
              {" "}
              Tạo tài khoản mới?{" "}
              <Link
                className="hover:text-greenTheme text-greenTheme"
                href={"/dang-ky"}
              >
                Đăng ký
              </Link>
            </p>{" "}
          </div>
        </div>
      </Form>
    </section>
  );
};

export default DangNhap;
