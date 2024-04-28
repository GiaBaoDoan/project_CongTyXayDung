"use client";
import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { instance } from "@/config";
const VerifyCode = () => {
  const [reload, setReload] = useState(false);
  const [seconds, setSeconds] = useState(60);
  const handelTimer = () => {
    setSeconds(60);
    setReload(true);
  };
  const router = useRouter();
  const id = localStorage.getItem("id");
  const [otp, setOTP] = useState("");
  const handleChange = (otp: string) => {
    setOTP(otp);
  };
  const resendCode = async () => {
    const res = await instance.post("/account/reverify/", {
      id: localStorage.getItem("id"),
    });
    handelTimer();
    if (res.data.code === 200) {
      return toast.success("Mã của bạn đã được gửi lại");
    }
  };
  const checkVerify = otp.length < 6;
  const verifyAccount = async () => {
    const res = await instance.post(`/account/verify`, {
      id: localStorage.getItem("id"),
      code: otp,
    });
    if (res.data.code == 200) {
      toast.success("Tài khoản đã được xác thực !!");
      router.push("/dang-nhap");
    } else {
      toast.error("Mã nhập không chính xác !!");
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds: any) => {
        if (prevSeconds === 0) {
          clearInterval(interval);
          setReload(true);
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);
    // Xóa interval khi component unmount hoặc khi seconds đạt giá trị 0
    return () => clearInterval(interval);
  }, [reload]);
  return (
    <section className="flex justify-center items-center py-10">
      <div
        style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
        className="bg-white p-12 rouned-2xl flex flex-col space-y-5 items-center"
      >
        <h2 className="font-bold text-center text-2xl">OTP Verifycation</h2>
        <p className="text-xl">Mã đã được đến email của bạn</p>
        <div className="inputs flex justify-center space-x-5">
          <OtpInput
            value={otp}
            onChange={handleChange}
            numInputs={6}
            inputType="number"
            renderSeparator={<span className="mr-10"></span>}
            renderInput={(props) => (
              <input
                {...props}
                className="!w-14 h-14 outline-greenTheme text-center text-xl rounded-md border"
              />
            )}
          />
        </div>
        <p className="text-xl">
          Chưa nhận được mã{" "}
          {seconds === 0 ? (
            <button onClick={resendCode}>
              <span className="text-greenTheme underline">Gửi lại</span>
            </button>
          ) : (
            <button>
              <span className="text-greenTheme">
                {Math.floor(seconds / 60)}:{seconds % 60 < 10 ? "0" : ""}
                {seconds % 60}
              </span>
            </button>
          )}
        </p>
        <button
          onClick={verifyAccount}
          disabled={otp.length < 6}
          className={`${
            checkVerify ? "opacity-20 cursor-no-drop" : ""
          } bg-greenTheme rounded p-3 font-bold px-4 text-white`}
        >
          Xác thực
        </button>
      </div>
    </section>
  );
};

export default VerifyCode;
