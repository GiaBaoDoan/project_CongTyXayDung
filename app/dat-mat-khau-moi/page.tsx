"use client";
import { Form, Input } from "antd";
import Link from "next/link";
import React, { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { instance } from "@/config";
const DatLaiMatKhau = () => {
  const router = useRouter();
  const [inputs, setInputs] = useState({
    email: "",
    code: "",
    password: "",
  });

  const handelOnchange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const handelSetNewPassword = async () => {
    const res = await instance.post("/account/verifyForgotCode/", inputs);
    if (res.data.code === 200) {
      toast.success("Cập nhật thành công");
      router.push("/dang-nhap");
    } else if (res.data.code === 404)
      return toast.error("Không tìm thấy tài khoản");
    else if (res.data.code === 403)
      return toast.error("Mã xác thực không chính xác");
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
            Đặt mật khẩu mới
          </h2>
          <div className="mt-5">
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  message: (
                    <p className="text-lg my-2 max-sm:text-base">
                      Vui lòng nhập email !
                    </p>
                  ),
                },
                {
                  required: true,
                  message: (
                    <p className="text-lg my-2 max-sm:text-base">Email</p>
                  ),
                },
              ]}
            >
              <Input
                name="email"
                onChange={handelOnchange}
                className="p-4 rounded-none  text-xl max-sm:text-base placeholder-gray-600"
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              name="code"
              rules={[
                {
                  type: "string",
                  message: (
                    <p className="text-lg my-2 max-sm:text-base">
                      Vui lòng nhập mã code
                    </p>
                  ),
                },
                {
                  required: true,
                  message: (
                    <p className="text-lg my-2 max-sm:text-base">
                      Nhập mã code gồm 6 chữ số
                    </p>
                  ),
                },
              ]}
            >
              <Input
                name="code"
                onChange={handelOnchange}
                className="p-4 rounded-none  text-xl max-sm:text-base placeholder-gray-600"
                placeholder="code"
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
                placeholder="Nhập mật khẩu mới"
              />
            </Form.Item>
          </div>
        </div>
        <button
          onClick={handelSetNewPassword}
          className="text-xl flex justify-center space-x-2 items-center rounded-none w-full max-sm:text-base hover:bg-green-800 max-lg:py-2 mt-5 font-bold uppercase bg-greenTheme text-white p-4 "
        >
          <span>Cập nhật</span>
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
              <Link
                className="hover:text-greenTheme text-greenTheme"
                href={"/quen-mat-khau"}
              >
                Lấy lại mã ?
              </Link>
            </p>{" "}
          </div>
        </div>
      </Form>
    </section>
  );
};

export default DatLaiMatKhau;
