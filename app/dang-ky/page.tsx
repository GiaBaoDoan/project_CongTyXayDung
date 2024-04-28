"use client";
import { Form, Input } from "antd";
import axios from "axios";
import Link from "next/link";
import React, { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { instance } from "@/config";

const DangKy = () => {
  const router = useRouter();
  const [inputs, setInputs] = useState({
    email: "",
    name: "",
    password: "",
  });
  const handelOnchange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const singUpApi = async () => {
    const res = await instance.post(`/account/signup`, inputs);
    if (res.data.code === 200) {
      toast.success("Đăng kí thành công");
      router.push("/xac-minh");
      return localStorage.setItem("id", res.data.data.id);
    } else if (res.data.code === 400)
      return toast.error("email đã được đăng kí !!");
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
        className="space-y-5 w-[500px] max-sm:w-[320px]"
      >
        <div className="">
          <h2 className="text-2xl text-center font-bold max-sm:text-lg">
            Đăng ký tài khoản
          </h2>
          <div className="mt-5">
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: (
                    <p className="text-lg my-2 max-sm:text-base">
                      Vui lòng nhập họ tên
                    </p>
                  ),
                },
              ]}
            >
              <Input
                name="name"
                onChange={handelOnchange}
                className="p-4 rounded-none  text-xl max-sm:text-base placeholder-gray-600"
                placeholder="Tên đăng nhập"
              />
            </Form.Item>
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
                onChange={handelOnchange}
                name="email"
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
                name="password"
                onChange={handelOnchange}
                type="password"
                className="p-4 rounded-none  text-xl max-sm:text-base placeholder-gray-600"
                placeholder="Mật khẩu"
              />
            </Form.Item>
          </div>
        </div>
        <button
          onClick={singUpApi}
          className="text-xl flex justify-center space-x-2 items-center rounded-none w-full max-sm:text-base hover:bg-green-800 max-lg:py-2 mt-5 font-bold uppercase bg-greenTheme text-white p-4 "
        >
          <span> Đăng ký</span>
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
          {/* signup */}
          <div className="text-center text-xl max-sm:text-base">
            <p>
              {" "}
              Đã có tài khoản?{" "}
              <Link
                className="hover:text-greenTheme text-greenTheme"
                href={"/dang-nhap"}
              >
                Đăng nhập
              </Link>
            </p>{" "}
          </div>
        </div>
      </Form>
    </section>
  );
};

export default DangKy;
