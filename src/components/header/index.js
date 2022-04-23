import React from "react";
import { Select } from "antd";
import { Link } from "react-router-dom";

const { Option } = Select;
const Header = () => {
  const onChange = (e) => {
    console.log(e);
  };
  return (
    <div className="text-white bg-orange-600 flex justify-center items-center w-full space-x-16 mx-auto h-24">
      <div className="font-bold text-lg">E-Commerce</div>
      <div className="bg-white h-[32px] rounded-lg space-x-4">
        <Select defaultValue="Категори" onChange={onChange}>
          <Option value="product">Цагаан идээ</Option>
          <Option value="meat">Мах</Option>
          <Option value="vegetable">Хүнсний ногоо</Option>
          <Option value="fruit">Жимс</Option>
        </Select>
        <input
          className="text-black w-64 px-10 focus:outline-none"
          type={"text"}
          placeholder="Хайх утгаа энд оруулна уу!"
        />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className=" flex items-center space-x-3">
        <button className="">Тусламж</button>
        <button className="">Нэвтрэх</button>
        <button className="bg-blue-600 flex items-center py-[3px] px-5 rounded-2xl space-x-1 font-bold">
          <div className="text-xl">+</div>
          <Link to="/login">
            <button> Зар оруулах</button>
          </Link>
        </button>
      </div>
    </div>
  );
};
export default Header;
