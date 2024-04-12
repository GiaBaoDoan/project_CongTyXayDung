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
    <>
      <div className="footer px-20 ">
        <Row gutter={[16, 16]} justify="space-between">
          <Col xxl={6} xl={6} lg={6} md={6} sm={24} xs={24}>
            <ul className="footer__info">
              <li className="footer__logo pb-5 text-lg font-bold">
                <h2 className="text-lg">CÔNG TY XÂY DỰNG TRẦN LÊ</h2>
              </li>
              <li className="footer__address text-lg mb-4">
                <p>
                  <EnvironmentOutlined />
                  1/40/37A Thanh Đa, Phường 27, Quận Bình Thạnh, Thành phố Hồ
                  Chí Minh
                </p>
              </li>
              <li className="footer__phone text-lg pb-4">
                <a href="tel:0318 372 190<">
                  <WhatsAppOutlined /> 0318.372.190
                </a>
              </li>
              <li className="footer__email text-lg ">
                <p>
                  <MailOutlined />
                  xaydungtranle@gmail.com
                </p>
              </li>
            </ul>
          </Col>
          <Col xxl={6} xl={6} lg={6} md={6} sm={24} xs={24}>
            <div className="footer__contactform">
              <h4 className="title-menu pb-4 text-lg font-bold">
                <a role="button">THÔNG TIN LIÊN HỆ</a>
              </h4>
              <Form
                name="nest-messages"
                onFinish={handleFinish}
                style={{ maxWidth: 600 }}
              >
                <Form.Item name={["user", "name"]} rules={[{ required: true }]}>
                  <Input placeholder="Họ và tên..." />
                </Form.Item>
                <Form.Item name={["user", "phone"]}>
                  <Input placeholder="Số điện thoại..." />
                </Form.Item>
                <Form.Item name={["user", "contact-content"]}>
                  <TextArea placeholder="Nội dung liên hệ..." />
                </Form.Item>
                <Form.Item>
                  <Button danger type="primary" htmlType="submit">
                    Gửi liên hệ đến chúng tôi
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
          <Col xxl={6} xl={6} lg={6} md={6} sm={24} xs={24}>
            <div className="footer__social">
              <h4 className="title-menu pb-4 text-lg font-bold">
                <a>VỀ CHÚNG TÔI</a>
              </h4>
              <ul className="list-menu ml-5">
                <li className="li-menu text-lg mb-2">
                  <a href="/">Trang chủ</a>
                </li>
                <li className="li-menu text-lg mb-2">
                  <a href="/gioi-thieu">Giới thiệu</a>
                </li>
                <li className="li-menu text-lg mb-2">
                  <a href="/dich-vu">Dịch vụ</a>
                </li>
                <li className="li-menu text-lg mb-2">
                  <a href="/lien-he">Liên hệ</a>
                </li>
              </ul>
              <div className="social-icon ml-5 text-lg mb-2">
                <a href="#" className="mr-4">
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

                <a href="#" className="mr-4">
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
                <a href="#" className="mr-4">
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
    </>
  );
};

export default Footer;
