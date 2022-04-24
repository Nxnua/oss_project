import React, { useEffect, useState } from "react";
import storage from "../../firebase";
import Header from "../../components/header";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import ImageUploader from "react-images-upload";
import { v4 } from "uuid";
import { Button, Form, Input } from "antd";

const AddItem = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(storage, "image/");
  const uploadImage = () => {
    if (imageUpload === null) return;
    const imageRef = ref(storage, `image/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then(() => alert("Image uploaded"));
  };

  useEffect(() => {
    listAll(imageListRef).then((res) => {
      res.items.forEach((items) => {
        getDownloadURL(items).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);
  return (
    <div>
      {" "}
      <Header />
      <div className="flex max-w-6xl mx-auto">
        <div className="w-1/2 flex flex-col justify-center items-center">
          <div className="font-bold mb-14 text-2xl">Зар нэмэх</div>
          <div className="">
            <ImageUploader
              buttonText="Зураг оруулах"
              style={{
                width: 450,
                height: 300,
              }}
              withPreview={true}
              onChange={(e) => setImageUpload(e)}
            />
          </div>
        </div>
        <div className="w-1/2 py-16 mt-10 px-12 max-w-xl mx-auto">
          <Form className="flex flex-col space-y-1 ">
            <Form.Item>
              <label className="font-bold">Зарын нэр</label>
              <Input />
            </Form.Item>
            <Form.Item>
              <label>Категори</label>
              <Input />
            </Form.Item>
            <Form.Item>
              <label>Байршил</label>
              <Input />
            </Form.Item>
            <Form.Item>
              <label>Хаяг</label>
              <Input />
            </Form.Item>
            <Form.Item>
              <label>Үнэ</label>
              <Input />
            </Form.Item>
            <Form.Item>
              <label>Утас</label>
              <Input />
            </Form.Item>
            <Form.Item>
              <label>Хүргэлт</label>
              <Input />
            </Form.Item>
            <label>Тайлбар</label>
            <Form.Item>
              <Input.TextArea />
            </Form.Item>
            <Form.Item>
              <button
                className="bg-[#E28025] px-7 py-1 rounded-lg text-white mt-5 "
                onClick={uploadImage}
              >
                Зар оруулах
              </button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default AddItem;
