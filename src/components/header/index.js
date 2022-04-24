import React from "react";
import { Select } from "antd";
import { Link } from "react-router-dom";
import {
  WalletOutlined,
  HeartOutlined,
  UserOutlined,
  SearchOutlined,
} from "@ant-design/icons";

const { Option } = Select;
const Header = () => {
  const onChange = (e) => {
    console.log(e);
  };
  return (
    <div>
      <div className="text-white bg-[#0083BF] flex justify-center items-center w-full space-x-16 mx-auto h-24">
        <div className="flex items-center">
          <Link to="/">
            <img
              className="h-24"
              src={require(`../../assets/images/ger.png`)}
            />
          </Link>
          <Link to="/">
            <div className="font-bold text-lg text-white">MyHuduu.mn</div>
          </Link>
        </div>
        <div className="bg-white h-[32px] flex items-center rounded-lg space-x-4">
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
          <div className="text-[#5F5F5F]">
            <SearchOutlined
              style={{
                fontSize: "16px",
                marginRight: 8,
                marginBottom: 5,
              }}
            />
          </div>
        </div>
        <div className=" flex items-center space-x-3">
          <div className="flex mt-4 space-x-2">
            <div>
              <button className="bg-[#339CCC] pb-2 px-3 rounded-full ml-3">
                <HeartOutlined />
              </button>
              <div className="pr-3">Хадгалсан</div>
            </div>
            <div>
              <button className="bg-[#339CCC] pb-2 px-3 rounded-full ">
                <WalletOutlined style={{ fontSize: "1₮px" }} />
              </button>
              <div className="pr-3">Хэтэвч</div>
            </div>
          </div>

          <Link to="/login">
            <div className="bg-[#339CCC] py-2 px-6 rounded-full ml-3 flex items-center space-x-2">
              <UserOutlined style={{ color: "white" }} />
              <span className="text-white">Нэвтрэх</span>
            </div>
          </Link>
          <button className="bg-[#E28025] flex items-center py-[3px] px-5 rounded-2xl space-x-1  font-bold">
            <div className="text-xl">+</div>
            <Link to="/login">
              <div className="text-white"> Зар оруулах</div>
            </Link>
          </button>
        </div>
      </div>
      <div>
        <img src={require(`../../assets/images/navbot.png`)} />
      </div>
    </div>
  );
};
export default Header;
