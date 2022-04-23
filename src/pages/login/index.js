import React from "react";
import { Form } from "antd";
import Config from "../../database";
import axios from "axios";

const Login = () => {
  const [allUser, setAllUser] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("https://hureechain-default-rtdb.firebaseio.com/user.json")
      .then((res) => setAllUser(res.data))
      .then(() => console.log(allUser));
  }, []);
  const onFinish = (el) => {
    allUser.map((e) => {
      if (e.name == el.name && e.password == el.password)
        return () => alert("success");
      else alert("Error");
    });
  };
  return (
    <div className="flex h-screen">
      <div className="bg-[#0083BF] w-1/2"></div>
      <div className="flex w-1/2 flex-col justify-center items-center">
        <div className="text-[#0083BF] text-3xl mb-8">Нэвтрэх</div>
        <Form
          onFinish={onFinish}
          layout="vertical"
          className="flex justify-center items-center flex-col"
        >
          <Form.Item name={"name"} label="Нэвтрэх нэр">
            <input className="border-b-2 w-60 focus:outline-none" />
          </Form.Item>
          <Form.Item name={"password"} label="Нууц үг">
            <input
              type={"password"}
              className="border-b-2 w-60 focus:outline-none"
            />
          </Form.Item>
          <Form.Item>
            <button
              htmlType="submit"
              className="bg-[#0083BF] px-9 py-1 rounded-2xl text-white"
            >
              Нэвтрэх
            </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Login;
