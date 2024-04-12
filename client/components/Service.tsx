import React from "react";
import Title from "./Title";
import { listCard } from "../constants";
import CardInfor from "./CardInfor";
const Service = () => {
  return (
    <div className="py-16 px-10 ">
      <div className="flex justify-center">
        <Title content="Dịch vụ" />
      </div>
      <div className="grid max-md:grid-cols-3 grid-cols-4 mt-10">
        {listCard.map((item) => {
          return <CardInfor content={item.content} title={item.title} />;
        })}
      </div>
    </div>
  );
};

export default Service;
