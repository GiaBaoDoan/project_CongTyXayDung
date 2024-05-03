import { listAbout } from "@/constants";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <section className="px-10 max-lg:px-5 max-sm:px-2 py-20 gap-10 grid grid-cols-2 max-lg:grid-cols-1">
      <div className="left">
        <div className="grid grid-cols-3 max-lg:grid-cols-2 gap-5">
          {listAbout.map((item, i) => {
            return (
              <Link
                key={i}
                href={item.link}
                className="border cursor-pointer hover:text-greenTheme hover:translate-y-[-10px] transition-all flex flex-col space-y-5 p-6 max-sm:px-[10px] justify-center items-center rounded-xl border-greenTheme"
              >
                <Image
                  src={item.icon}
                  width={120}
                  height={50}
                  alt="icon"
                  className="max-sm:w-[70px]"
                />
                <p className="text-xl text-center max-sm:text-base">
                  {item.title}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="right">
        <div className="flex flex-col space-y-5  justify-between">
          <h2 className="text-2xl font-bold max-sm:text-lg">Về chúng tôi</h2>
          <p className="text-xl  max-sm:text-base">
            Là đơn vị có thâm niên trong ngành vệ sinh công nghiệp, chúng tôi
            tích lũy được nhiều kinh nghiệm khi thi công dịch vụ, với nhưng kinh
            nghiệm đó giúp chúng tôi rút ngắn được thời gian thi công cũng như
            công đoạn vì vậy giá thành luôn được đảm bảo tốt nhất. <br /> <br />{" "}
            Với đội ngũ nhân viên kỹ thuật dày dạng kinh nghiệm, trải dài khắp
            vùng miền và có thể huy động số lượng lớn nhân công cùng một lúc,
            chúng tôi thực hiện công việc trong thời gian rất ngắn. Bên cạnh đó,
            chúng tôi sử dụng các công cụ thiết bị vệ sinh hiện đại cùng với các
            sản phẩm hoạt chất tẩy rửa an toàn sẽ giúp bề bặt của công trình trở
            nên sạch như mới.
          </p>
          <button className="text-white text-xl max-sm:text-base hover:bg-opacity-45 self-start p-3 px-6 bg-greenTheme rounded-full">
            <Link href={"/gioi-thieu"}>Xem giới thiệu chi tiết</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
