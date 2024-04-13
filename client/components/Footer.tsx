"use client";
import React from "react";
import {
  EnvironmentOutlined,
  WhatsAppOutlined,
  MailOutlined,
  FacebookOutlined,
  InstagramOutlined,
  PhoneOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Button, Col, Form, Input, InputNumber, Row } from "antd";
import TextArea from "antd/es/input/TextArea";

const Footer: React.FC = () => {
  const handleFinish = (values: any) => {
    console.log("Received values:", values);
  };
  return (
    <footer>
      <div className="footer p-20 border">
        <Row gutter={[16, 16]} justify="space-between">
          <Col xxl={6} xl={6} lg={6} md={6} sm={24} xs={24}>
            <ul className="footer__info">
              <li className="footer__logo pb-5 text-lg font-bold">
                <h2 className="text-xl text-redTheme">
                  CÔNG TY XÂY DỰNG TRẦN LÊ
                </h2>
              </li>
              <li className="footer__address text-lg mb-4">
                <p className="text-lg flex items-center space-x-3 font-medium hover:text-redTheme transition-all">
                  <EnvironmentOutlined className="text-2xl" />
                  <span className="text-lg">
                    {" "}
                    1/40/37A Thanh Đa, Phường 27, Quận Bình Thạnh, Thành phố Hồ
                    Chí Minh
                  </span>
                </p>
              </li>
              <li className="footer__phone text-lg pb-4">
                <a
                  className="text-lg hover:text-redTheme space-x-3"
                  href="tel:0318 372 190<"
                >
                  <WhatsAppOutlined className="text-2xl font-medium transition-all" />{" "}
                  <span className="text-lg font-medium">0318.372.190</span>
                </a>
              </li>
              <li className="footer__email text-lg ">
                <p className="text-lg flex items-center space-x-3 font-medium hover:text-redTheme transition-all">
                  <MailOutlined className="text-2xl" />
                  <span className="text-lg">xaydungtranle@gmail.com</span>
                </p>
              </li>
            </ul>
          </Col>
          <Col xxl={6} xl={6} lg={6} md={6} sm={24} xs={24}>
            <div className="footer__contactform">
              <h4 className="title-menu pb-4 text-xl text-redTheme font-bold">
                <a role="button">THÔNG TIN LIÊN HỆ</a>
              </h4>
              <Form
                name="nest-messages"
                onFinish={handleFinish}
                style={{ maxWidth: 600 }}
              >
                <Form.Item name={["user", "name"]} rules={[{ required: true }]}>
                  <Input className="p-4 text-lg" placeholder="Họ và tên..." />
                </Form.Item>
                <Form.Item name={["user", "phone"]}>
                  <Input
                    className="p-4 text-lg"
                    placeholder="Số điện thoại..."
                  />
                </Form.Item>
                <Form.Item name={["user", "contact-content"]}>
                  <TextArea
                    rows={4}
                    className="text-lg"
                    placeholder="Nội dung liên hệ..."
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    className="text-xl inline-flex items-center justify-center bg-redTheme w-full p-5 text-white"
                    htmlType="submit"
                  >
                    Gửi liên hệ đến chúng tôi
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
          <Col xxl={6} xl={6} lg={6} md={6} sm={24} xs={24}>
            <div className="footer__social">
              <h4 className="title-menu pb-4 text-redTheme text-xl font-bold">
                <a>VỀ CHÚNG TÔI</a>
              </h4>
              <ul className="list-menu space-y-2">
                <li className="li-menu text-lg">
                  <a className="text-lg font-medium" href="/">
                    Trang chủ
                  </a>
                </li>
                <li className="li-menu text-lg">
                  <a className="text-lg font-medium" href="/gioi-thieu">
                    Giới thiệu
                  </a>
                </li>
                <li className="li-menu text-lg">
                  <a className="text-lg font-medium" href="/dich-vu">
                    Dịch vụ
                  </a>
                </li>
                <li className="li-menu text-lg">
                  <a className="text-lg font-medium" href="/lien-he">
                    Liên hệ
                  </a>
                </li>
              </ul>
              <div className="social-icon text-lg space-x-5 mt-[24px]">
                <a href="#">
                  <div
                    style={{
                      borderRadius: "50%",
                      padding: "5px 8px",
                      background: "#0866FF",
                      display: "inline-block",
                    }}
                  >
                    <FacebookOutlined
                      style={{ fontSize: "24px", color: "white" }}
                    />
                  </div>
                </a>

                <a href="#">
                  <div
                    style={{
                      borderRadius: "50%",
                      padding: "5px 8px",
                      background: "#E4405F",
                      display: "inline-block",
                    }}
                  >
                    <InstagramOutlined
                      style={{ fontSize: "24px", color: "white" }}
                    />
                  </div>
                </a>
                <a href="#">
                  <div
                    style={{
                      borderRadius: "50%",
                      padding: "5px 8px",
                      background: "green",
                      display: "inline-block",
                    }}
                  >
                    <PhoneOutlined
                      style={{ fontSize: "24px", color: "white" }}
                    />
                  </div>
                </a>
                <a href="#">
                  <div
                    style={{
                      borderRadius: "50%",
                      padding: "5px 8px",
                      background: "red",
                      display: "inline-block",
                    }}
                  >
                    <YoutubeOutlined
                      style={{ fontSize: "24px", color: "white" }}
                    />
                  </div>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="flex justify-center items-center p-4 border bg-slate-200">
        <p>Copyright © 2024 CÔNG TY XÂY DỰNG TRẦN LÊ - design by TIVATECH.VN</p>
      </div>
    </footer>
  );
};

export default Footer;
