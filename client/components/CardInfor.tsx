import { CardProps } from "@/types";
import { Card } from "antd";
import Image from "next/image";
import React from "react";
const { Meta } = Card;

const CardInfor = ({ title, content }: CardProps) => {
  return (
    <Card
      hoverable
      style={{ width: 400, marginTop: "30px" }}
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
        title={
          <span className="text-redTheme text-2xl uppercase">{title}</span>
        }
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
