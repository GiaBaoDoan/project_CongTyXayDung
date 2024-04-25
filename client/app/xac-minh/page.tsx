"use client";
import { base_url } from "@/constants/baseUrl";
import axios from "axios";
import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
const VerifyCode = () => {
  const router = useRouter();
  const [otp, setOTP] = useState("");
  const handleChange = (otp: string) => {
    setOTP(otp);
  };
  const checkVerify = otp.length < 6;
  const verifyAccount = async () => {
    const res = await axios.post(`${base_url}/account/verify`, {
      id: localStorage.getItem("userId"),
      code: otp,
    });
    if (res.data.code == 200) {
      toast.success("Tài khoản đã được xác thực !!");
      router.push("/dang-nhap");
    } else {
      toast.error("Mã nhập không chính xác !!");
    }
  };
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
          <span className="text-greenTheme underline">Gửi lại</span>
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
