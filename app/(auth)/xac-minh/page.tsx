"use client";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { instance } from "@/config";
import { _redirect } from "@/action";
const VerifyCode = () => {
  const [count, setCount] = useState<number>(0);
  const [otp, setOTP] = useState<string>("");
  const [id, setId] = useState<string>("");
  const countRef = useRef<number>(0);
  useEffect(() => {
    const getId = localStorage.getItem("uid");
    if (!getId) return _redirect("/dang-ky");
    setId(getId);
  }, []);
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
  const resendCode = async () => {
    countDown(true);
    try {
      const res = await instance.post("/account/reverify/", {
        id,
      });
      if (res.status === 200) {
        return toast.success("Mã của bạn đã được gửi lại");
      }
    } catch (err: any) {
      toast.error(err.response.data);
    }
  };
  const verifyAccount = async () => {
    try {
      const res = await instance.post(`/account/verify/`, {
        id,
        code: otp,
      });
      if (res.status === 200) {
        toast.success("Tài khoản đã được xác thực !!");
        _redirect("/");
      }
    } catch (err: any) {
      toast.error(err.response.data);
    }
  };

  return (
    <section className="flex justify-center items-center py-10">
      <div
        style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
        className="bg-white p-12 rouned-2xl flex flex-col space-y-5 items-center"
      >
        <h2 className="font-bold text-center text-2xl">OTP Verification</h2>
        <p className="text-xl">Mã đã được đến email của bạn</p>
        <div className="inputs flex justify-center space-x-5">
          <input
            onChange={(e) => setOTP(e.target.value)}
            type="number"
            placeholder="Nhập mã xác minh"
            className="input input-bordered bg-white w-full"
          />
        </div>

        <div className="flex gap-3">
          <button
            onClick={resendCode}
            disabled={count !== 0}
            className={`btn text-black border-none ${count !== 0 ? "cursor-no-drop bg-[#FF5861]/20" : "bg-[#FF5861] hover:bg-[#FF5861]/90"}`}
          >
            {count > 0 ? `Thử lại sau ${count}` : "Gửi lại mã"}
          </button>

          <button
            onClick={verifyAccount}
            disabled={otp.length !== 6}
            className={`btn text-black border-none ${otp.length !== 6 ? "cursor-no-drop bg-[#00A96E]/20" : "bg-[#00A96E] hover:bg-[#00A96E]/90"}`}
          >
            Xác nhận
          </button>
        </div>
      </div>
    </section>
  );
};

export default VerifyCode;
