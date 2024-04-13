import React from "react";
import Title from "./Title";
import { listCard } from "@/constants";
import CardInfor from "./CardInfor";

const News = () => {
  return (
    <section className="py-16 px-10">
      <div className="flex justify-center">
        <Title content="TIN TUC" />
      </div>
      <div className="mt-10 flex flex-wrap gap-10">
        {listCard.map((item) => {
          return <CardInfor content={item.content} title={""} />;
        })}
      </div>
    </section>
  );
};

export default News;
