import React, { useState } from "react";
import storage from "../../firebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
const AddItem = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const uploadImage = () => {
    if (imageUpload === null) return;
    const imageRef = ref(storage, `image/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then(() => alert("Image uploaded"));
  };
  return (
    <div>
      <input
        type={"file"}
        onChange={(e) => setImageUpload(e.target.files[0])}
      />
      <button onClick={uploadImage}>Оруулах</button>
    </div>
  );
};
export default AddItem;
