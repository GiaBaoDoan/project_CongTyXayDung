"use client";
import { _redirect } from "@/action";
import { instance } from "@/config";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
const DangNhap = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      return toast.error("Vui lòng nhập đầy đủ các trường");
    }
    try {
      const res = await instance.post("/account/signin/", {
        email,
        password,
      });
      if (res.status === 200) {
        toast.success("Đăng nhập thành công");
        return _redirect("/");
      }
    } catch (err: any) {
      console.log(err);
      toast.error(err.response.data);
    }
  };

  return (
    <section className="py-10 flex justify-center">
      <form
        onSubmit={handleSignIn}
        style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
        className="space-y-7 w-[500px] p-10  max-sm:w-[320px] rounded"
      >
        <div className="">
          <h2 className="text-2xl max-sm:text-lg text-center font-bold">
            Đăng nhập tài khoản
          </h2>
          <div className="mt-5 space-y-5">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                name="email"
                className="grow"
                placeholder="Email"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                placeholder="*******"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                className="grow"
              />
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="text-xl rounded flex justify-center space-x-2 items-center w-full max-sm:text-base hover:bg-green-800 max-lg:py-2 mt-5 font-bold uppercase bg-greenTheme text-white p-4 "
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
          <div className="text-xl max-sm:text-base text-center">
            <p className=" ">
              Quên mật khẩu?{" "}
              <Link
                className="hover:text-greenTheme text-greenTheme"
                href={"/quen-mat-khau"}
              >
                Lấy lại mật khẩu
              </Link>
            </p>
          </div>
          <div className="text-center text-xl max-sm:text-base">
            <p>
              Tạo tài khoản mới?{" "}
              <Link
                className="hover:text-greenTheme text-greenTheme"
                href={"/dang-ky"}
              >
                Đăng ký
              </Link>
            </p>
          </div>
        </div>
      </form>
    </section>
  );
};

export default DangNhap;
