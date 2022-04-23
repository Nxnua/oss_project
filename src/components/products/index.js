import React from "react";
import { Card } from "antd";

const Products = (props) => {
  return (
    <Card style={{ width: 210, margin: 10 }}>
      <div className="">
        <div className="flex flex-col h-60">
          <img src={require(`../../assets/images/${props.img}.png`)} />
          <div className="mt-5 mb-6 text-center">{props.name}</div>
        </div>
        <div className=" font-bold text-center">{props.price}</div>
      </div>
    </Card>
  );
};
export default Products;
