"use client";
import React from "react";
import {
  FacebookOutlined,
  PhoneOutlined,
  TwitterOutlined,
  GooglePlusOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { email, phoneNumber } from "@/constants";

const Footer: React.FC = () => {
  return (
    <footer
      className="p-12 h-[70vh] px-5 pb-24 max-lg:h-[100vh] text-[#c0c0c0]"
      style={{
        backgroundSize: "cover",
        background:
          "url('https://vesinhcongnghiep.giaodienwebmau.com/wp-content/uploads/2019/05/bg-footer.jpg')",
      }}
    >
      <div className="grid grid-cols-4 max-lg:grid-cols-1 gap-10 ">
        <div className="flex flex-col space-y-5">
          <p className="text-xl max-sm:text-base">
            Là đơn vị có thâm niên trong ngành vệ sinh công nghiệp, chúng tôi
            tích lũy được nhiều kinh nghiệm khi thi công dịch vụ, với nhưng kinh
            nghiệm đó giúp chúng tôi rút ngắn được thời gian thic ông cũng như
            công đoạn vì vậy giá thành luôn được đàm bảo tốt nhất
          </p>
        </div>
        <div className="flex space-y-5 flex-col max-lg:hidden">
          <h3 className="text-2xl text-white font-bold">Hỗ trợ</h3>
          <ul className="space-y-5 pl-5 list-disc">
            <li className="text-xl hover:text-white max-sm:text-base">
              <Link href={"/"}>Liên hệ</Link>
            </li>
            <li className="text-xl hover:text-white max-sm:text-base">
              <Link href={"/"}>Câu hỏi thường gặp</Link>
            </li>
            <li className="text-xl hover:text-white max-sm:text-base">
              <Link href={"/"}>Điều khoản sử dụng</Link>
            </li>
            <li className="text-xl hover:text-white max-sm:text-base">
              <Link href={"/"}>Chính sách bảo mật</Link>
            </li>
            <li className="text-xl hover:text-white max-sm:text-base">
              <Link href={"/"}>Giải quyết khiếu nại</Link>
            </li>
          </ul>
        </div>
        <div className="flex space-y-5 flex-col max-lg:hidden">
          <h3 className="text-2xl text-white font-bold">Giới thiệu chung</h3>
          <ul className="space-y-5 pl-5 list-disc">
            <li className="text-xl max-sm:text-base hover:text-white">
              <Link href={"/"}>Vệ sinh văn phòng</Link>
            </li>
            <li className="text-xl max-sm:text-base hover:text-white">
              <Link href={"/"}>Vệ sinh công nghiệp</Link>
            </li>
            <li className="text-xl max-sm:text-base hover:text-white">
              <Link href={"/"}>Lau kính nhà cao tầng</Link>
            </li>
            <li className="text-xl max-sm:text-base hover:text-white">
              <Link href={"/"}>Sửa chữa nhà cửa</Link>
            </li>
          </ul>
        </div>
        <div className="flex space-y-5 flex-col">
          <h3 className="text-2xl text-white font-bold max-sm:text-lg">
            Thông tin liên hệ
          </h3>
          <div>
            <ul className="space-y-3 pl-5 break-words list-disc">
              <li className="text-xl max-sm:text-base hover:text-white">
                <Link href={"/"}>
                  <p>Email: {email}</p>
                </Link>
              </li>
              <li className="text-xl max-sm:text-base hover:text-white">
                <Link href={"/"}>
                  <p>Website: giuseart.com / ninhbinhweb.com</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <p className="text-greenTheme font-bold text-2xl max-sm:text-base">
              Holine: {phoneNumber}
            </p>
            <ul className="flex space-x-5 mt-5">
              <li>
                <Link href={"/"}>
                  <FacebookOutlined style={{ fontSize: "30px" }} />
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <TwitterOutlined style={{ fontSize: "30px" }} />
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <PhoneOutlined style={{ fontSize: "30px" }} />
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <GooglePlusOutlined style={{ fontSize: "30px" }} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
