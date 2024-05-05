"use client";
import { email, phoneNumber } from "@/constants";
import React from "react";
const Contact = () => {
  return (
    <section className="flex max-lg:flex-col px-5 py-10 pb-24 gap-10">
      <div className="left-section space-y-5 flex-1">
        <h2 className="text-2xl max-sm:text-lg text-greenTheme">
          Cảm ơn bạn đã dành thời gian để tìm hiểu về các hoạt động của Công ty
          Trần Lê{" "}
        </h2>
        <div className="space-y-5">
          <h3 className="text-xl font-bold max-sm:text-base">
            Thông tin liên hệ
          </h3>
          <p className="text-xl max-sm:text-base font-semibold ">
            CÔNG TY TNHH DỊCH VỤ VỆ SINH CÔNG NGHIỆP TRẦN LÊ
          </p>
          <p className="text-xl max-sm:text-base">
            Là đơn vị có thâm niên trong ngành vệ sinh công nghiệp, chúng tôi
            tích lũy được nhiều kinh nghiệm khi thi công dịch vụ, với nhưng kinh
            nghiệm đó giúp chúng tôi rút ngắn được thời gian thi công cũng như
            công đoạn vì vậy giá thành luôn được đảm bảo tốt nhất
          </p>
        </div>
        <ul className="space-y-5 list-disc px-5 text-xl max-sm:text-base">
          <li>
            <span>
              {" "}
              <strong>Liên hệ</strong>: Công ty vệ sinh xây dựng Trần Lê
            </span>
          </li>
          <li>
            <span>
              {" "}
              <strong>Liên hệ</strong>: {phoneNumber}
            </span>
          </li>
          <li>
            <span>
              {" "}
              <strong>Email</strong>: {email}
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
