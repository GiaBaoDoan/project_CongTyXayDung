import React from "react";
import Title from "./Title";
import { listCard } from "../constants";
import CardInfor from "./CardInfor";
const Service = () => {
  return (
    <section className="py-16 px-10">
      <div className="flex justify-center">
        <Title content="Dịch vụ" />
      </div>
      <div className="flex flex-wrap mt-10 gap-10 justify-center xl:justify-start">
        {listCard.map((item) => {
          return <CardInfor content={item.content} title={item.title} />;
        })}
      </div>
    </section>
  );
};

export default Service;
