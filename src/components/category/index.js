import React from "react";

const Category = (props) => {
  return (
    <div
      style={{ background: `${props.color}` }}
      className="flex flex-col items-center justify-center rounded-md p-4"
    >
      <div className="h-[250px] flex justify-center items-center">
        <img
          className="w-72 "
          src={require(`../../assets/images/${props.img}.png`)}
        />
      </div>
      <div className="font-bold text-xl">{props.name}</div>
    </div>
  );
};
export default Category;
