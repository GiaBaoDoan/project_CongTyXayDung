import { CardProps } from "@/types";
import { Card } from "antd";
import Image from "next/image";
import React from "react";
const { Meta } = Card;

const CardInfor = ({ title, content }: CardProps) => {
  return (
    <Card
      className="w-[400px]"
      hoverable
      cover={
        <Image
          src={"/banner.png"}
          width={400}
          height={300}
          className="object-contain"
          alt={"banner"}
        />
      }
    >
      <Meta
        title={<h3 className="text-redTheme text-2xl uppercase">{title}</h3>}
        description={
          <span className="text-lg text-black font-medium">
            {content.length > 200 ? content.slice(0, 200) + "..." : content}
          </span>
        }
      />
    </Card>
  );
};

export default CardInfor;
