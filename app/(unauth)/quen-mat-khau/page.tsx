"use client";
import { _redirect } from "@/action";
import { instance } from "@/config";
import React, { MouseEvent, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const modelRef = useRef<null | HTMLDialogElement>(null);
  const submitRef = useRef<null | HTMLButtonElement>(null);
  const countRef = useRef<number>(0);

  const handleSendOtp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await instance.get(
        `/account/recoveryPassword?email=${email}`,
      );
      if (res.status === 200) {
        toast.success("Mã xác minh đã được gửi tới email của bạn");
        modelRef.current?.showModal();
      }
    } catch (err: any) {
      toast.error(err.response.data);
    }
  };

  const countDown = (first: boolean) => {
    setTimeout(() => {
      if (first) {
        countRef.current = 60;
      }
      if (countRef.current > 0) {
        countRef.current--;
        setCount(countRef.current);
        countDown(false);
      } else {
        return;
      }
    }, 1000);
  };

  const resendCode = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const res = await instance.get(
        `/account/recoveryPassword?email=${email}`,
      );
      if (res.status === 200) {
        countDown(true);
        toast.success("Mã của bạn đã được gửi lại");
      }
    } catch (err: any) {
      toast.error(err.reposne.data);
    }
  };

  const verifyCode = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!email || !otp || !password) {
      return toast.error("Vui lòng nhập đầy đủ các trường");
    }
    try {
      const res = await instance.post("/account/recoveryPassword/", {
        email,
        code: otp,
        password,
      });
      if (res.status === 200) {
        toast.success("Đổi mật khẩu thành công");
        _redirect("/dang-nhap");
      }
    } catch (err: any) {
      toast.error(err.response.data);
    }
  };

  useEffect(() => {
    const onKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        e.preventDefault();
        submitRef.current?.click();
      }
    };
    if (window) window.addEventListener("keypress", onKeyPress);

    return () => window.removeEventListener("keypress", onKeyPress);
  }, []);
  return (
    <section className="flex justify-center py-10">
      <form
        onSubmit={handleSendOtp}
        style={{
          padding: 30,
          paddingBottom: 70,
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        }}
        className="relative space-y-7 w-[500px] max-sm:w-[320px]"
      >
        <div>
          <h2 className="text-2xl text-center font-bold max-sm:text-lg">
            Quên mật khẩu
          </h2>
          <p className="text-center block mb-5 text-xl my-3 max-sm:text-base">
            Sử dụng email bạn đăng kí để tìm lại mật khẩu{" "}
          </p>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="input input-bordered w-full"
          />
          <button
            type="submit"
            className="text-xl flex justify-center space-x-2 items-center rounded-none w-full max-sm:text-base hover:bg-green-800 max-lg:py-2 mt-5 font-bold uppercase bg-greenTheme text-white p-4 "
          >
            Gửi
          </button>
        </div>
      </form>

      <dialog ref={modelRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg text-center mb-5">
            Vui lòng nhập mã xác minh và mật khẩu mới!
          </h3>
          <form className="flex flex-col items-center gap-5">
            <input
              type="number"
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Nhập mã xác minh"
              className="input w-[85%] bg-white input-bordered"
            />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Nhập mật khẩu mới"
              className="input w-[85%] bg-white input-bordered"
            />
            <div className="modal-action self-end mr-8">
              <button
                tabIndex={-1}
                onClick={resendCode}
                disabled={count !== 0}
                className={`btn text-black border-none ${count !== 0 ? "cursor-no-drop bg-[#FF5861]/20" : "bg-[#FF5861] hover:bg-[#FF5861]/90"}`}
              >
                {count > 0 ? `Thử lại sau ${count}` : "Gửi lại mã"}
              </button>

              <button
                onClick={verifyCode}
                disabled={
                  otp.length !== 6 ||
                  password.length < 8 ||
                  password.length > 32
                }
                className={`btn text-black border-none ${otp.length !== 6 || password.length < 8 || password.length > 32 ? "cursor-no-drop bg-[#00A96E]/20" : "bg-[#00A96E] hover:bg-[#00A96E]/90"}`}
              >
                Xác nhận
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </section>
  );
};

export default ForgotPassword;
