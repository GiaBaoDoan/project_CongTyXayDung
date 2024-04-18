"use client";
import { phoneNumber } from "@/constants";
import React from "react";
import { Form, Input } from "antd";
import { Map } from "@/components";
const { TextArea } = Input;
const Contact = () => {
  return (
    <section className="flex px-10 py-20 gap-10">
      <Map />
      <div className="left-section flex-1 space-y-5">
        <div className="space-y-5">
          <h2 className="text-4xl font-bold ">Thông tin liên hệ</h2>
          <p className="text-2xl font-semibold ">
            CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ VỆ SINH CÔNG NGHIỆP
          </p>
          <p className="text-2xl">
            Là đơn vị có thâm niên trong ngành vệ sinh công nghiệp, chúng tôi
            tích lũy được nhiều kinh nghiệm khi thi công dịch vụ, với nhưng kinh
            nghiệm đó giúp chúng tôi rút ngắn được thời gian thic ông cũng như
            công đoạn vì vậy giá thành luôn được đàm bảo tốt nhất
          </p>
        </div>
        <ul className="space-y-5 list-disc px-5 text-2xl">
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
        >
          <div className="grid grid-cols-2 gap-5">
            <Form.Item
              name="username"
              rules={[{ required: true, message: "Vui lòng nhập họ và tên" }]}
            >
              <Input
                placeholder="Họ và Tên"
                className="p-4 text-2xl placeholder-gray-600"
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  message: "Email không hợp lệ",
                },
                {
                  required: true,
                  message: "Vui lòng nhập email",
                },
              ]}
            >
              <Input
                className="p-4 text-2xl placeholder-gray-600"
                placeholder="Địa chỉ email..."
              />
            </Form.Item>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <Form.Item
              name="địa chỉ"
              rules={[{ required: true, message: "Vui lòng nhập địa chỉ!" }]}
            >
              <Input
                placeholder="Địa chỉ"
                className="p-4 text-2xl placeholder-gray-600"
              />
            </Form.Item>
            <Form.Item
              name="Số điện thoại"
              rules={[
                {
                  type: "number",
                  message: "Số điện thoại không hợp lệ!",
                },
                {
                  required: true,
                  message: "Vui lòng nhập số điện thoại thoại!",
                },
              ]}
            >
              <Input
                className="p-4 text-2xl placeholder-gray-600"
                placeholder="Số điện thoại"
              />
            </Form.Item>
          </div>
          <div className="grid grid-cols-1 gap-5">
            <Form.Item
              name="dịch vụ"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập dịch vụ cần tư vấn !",
                },
              ]}
            >
              <Input
                placeholder="Dịch vụ cần tư vấn"
                className="p-4 text-2xl placeholder-gray-600"
              />
            </Form.Item>
          </div>
          <div className="grid grid-cols-1">
            <TextArea
              placeholder="Ghi chú thêm"
              className="!text-2xl placeholder-gray-600 !h-[200px]"
              autoSize={{ minRows: 3, maxRows: 5 }}
            />
          </div>
          <button className="text-2xl mt-5 rounded font-bold uppercase bg-greenTheme text-white p-4">
            Gửi liên hệ
          </button>
        </Form>
      </div>
    </section>
  );
};

export default Contact;
