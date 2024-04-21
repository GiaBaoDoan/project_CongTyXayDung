"use client";
import { phoneNumber } from "@/constants";
import React from "react";
import { Form, Input } from "antd";
const { TextArea } = Input;
const Contact = () => {
  return (
    <section className="flex max-lg:flex-col px-5 py-20 gap-10">
      <div className="left-section space-y-5 flex-1">
        <div className="space-y-5">
          <h2 className="text-3xl font-bold max-sm:text-xl">
            Thông tin liên hệ
          </h2>
          <p className="text-xl max-sm:text-lg font-semibold ">
            CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ VỆ SINH CÔNG NGHIỆP
          </p>
          <p className="text-xl max-sm:text-base">
            Là đơn vị có thâm niên trong ngành vệ sinh công nghiệp, chúng tôi
            tích lũy được nhiều kinh nghiệm khi thi công dịch vụ, với nhưng kinh
            nghiệm đó giúp chúng tôi rút ngắn được thời gian thic ông cũng như
            công đoạn vì vậy giá thành luôn được đàm bảo tốt nhất
          </p>
        </div>
        <ul className="space-y-5 list-disc px-5 text-xl max-sm:text-base">
          <li>
            <span>
              {" "}
              <strong>Liên hệ</strong>: Công ty Xây dựng vệ sinh AB
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
              <strong>Email</strong>: vesinhcongnghiep@gmail.com
            </span>
          </li>
          <li>
            <span>
              {" "}
              <strong>Website</strong>: www.vesinhcongnghiep
            </span>
          </li>
        </ul>
      </div>
      <div className="right-section">
        <Form
          name="basic"
          style={{
            padding: 30,
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          }}
          initialValues={{ remember: true }}
          autoComplete="off"
          className="max-lg:!px-3"
        >
          <div className="grid grid-cols-2 max-lg:grid-cols-1 lg:gap-5">
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: (
                    <span className="py-3 text-lg max-sm:text-base">
                      Vui lòng nhập họ và tên !
                    </span>
                  ),
                },
              ]}
            >
              <Input
                placeholder="Họ và Tên"
                className="p-4  text-xl max-sm:text-base placeholder-gray-600"
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  message: (
                    <span className="py-3 text-lg max-sm:text-base">
                      Email không hợp lệ !
                    </span>
                  ),
                },
                {
                  required: true,
                  message: (
                    <span className="py-3 text-lg max-sm:text-base">
                      Vui lòng nhập email !
                    </span>
                  ),
                },
              ]}
            >
              <Input
                className="p-4  text-xl max-sm:text-base placeholder-gray-600"
                placeholder="Địa chỉ email..."
              />
            </Form.Item>
          </div>
          <div className="grid grid-cols-2 max-lg:grid-cols-1 lg:gap-5">
            <Form.Item
              name="địa chỉ"
              rules={[
                {
                  required: true,
                  message: (
                    <span className="py-3 text-lg max-sm:text-base">
                      {" "}
                      Vui lòng nhập địa chỉ !
                    </span>
                  ),
                },
              ]}
            >
              <Input
                placeholder="Địa chỉ"
                className="p-4  text-xl max-sm:text-base placeholder-gray-600"
              />
            </Form.Item>
            <Form.Item
              name="Số điện thoại"
              rules={[
                {
                  required: true,
                  message: (
                    <span className="py-3 text-lg max-sm:text-base">
                      {" "}
                      Vui lòng nhập số điện thoại thoại !
                    </span>
                  ),
                },
              ]}
            >
              <Input
                className="p-4  text-xl max-sm:text-base placeholder-gray-600"
                placeholder="Số điện thoại"
              />
            </Form.Item>
          </div>
          <div className="grid grid-cols-1 lg:gap-5">
            <Form.Item
              name="dịch vụ"
              rules={[
                {
                  required: true,
                  message: (
                    <span className="py-3 text-lg max-sm:text-base">
                      Vui lòng nhập dịch vụ cần tư vấn !
                    </span>
                  ),
                },
              ]}
            >
              <Input
                placeholder="Dịch vụ cần tư vấn"
                className="p-4  text-xl max-sm:text-base placeholder-gray-600"
              />
            </Form.Item>
          </div>
          <div className="grid grid-cols-1">
            <TextArea
              placeholder="Ghi chú thêm"
              className="text-xl max-sm:text-base placeholder-gray-600 !h-[200px]"
              autoSize={{ minRows: 3, maxRows: 5 }}
            />
          </div>
          <button className="text-xl max-sm:text-base max-lg:py-2 mt-5 rounded font-bold uppercase bg-greenTheme text-white p-4 ">
            Gửi liên hệ
          </button>
        </Form>
      </div>
    </section>
  );
};

export default Contact;
