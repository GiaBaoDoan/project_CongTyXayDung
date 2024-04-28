"use client";
import { instance } from "@/config";
import { store } from "@/store";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
const Timer = () => {
  const [seconds, setSeconds] = useState(10);
  const [reload, setReload] = useState(false);
  const { email } = store();
  const handelTimer = () => {
    setSeconds(10);
    setReload(true);
  };
  const resendCode = async () => {
    const res = await instance.post("/account/forgotCode", { email });
    if (res.data.code === 200) {
      handelTimer();
      return toast.success("Mã xác minh đã được gửi tới email của bạn");
    } else if (res.data.code === 404)
      return toast.error("Không tìm thấy tài khoản");
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
    <div className="text-center">
      <p className="text-xl text-greenTheme">
        {seconds === 0 ? (
          <span className="cursor-pointer" onClick={resendCode}>
            Lấy lại mã
          </span>
        ) : (
          <span>
            {Math.floor(seconds / 60)}:{seconds % 60 < 10 ? "0" : ""}
            {seconds % 60}
          </span>
        )}
      </p>
    </div>
  );
};

export default Timer;
