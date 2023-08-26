"use client";
import InputComponent from "@components/FormElements/InputComponent";
import { createNewProduct } from "@services/products";
import {
  addProductFormControls,
  firebaseConfig,
  firebaseStorageURL,
} from "@utils";
import { initializeApp } from "firebase/app";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useState } from "react";

const app = initializeApp(firebaseConfig);
const storage = getStorage(app, firebaseStorageURL);

function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    imageUrl: "",
    description: "",
    type: "",
  });

  const createFileName = (file) => {
    const timeStamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 12);

    return `${file.name}-${timeStamp}-${randomString}`;
  };

  async function firebaseImageUpload(file) {
    const fileName = createFileName(file);
    const storageReference = ref(storage, `productImages/${fileName}`);
    const uploadImage = uploadBytesResumable(storageReference, file);

    return new Promise((resolve, reject) => {
      uploadImage.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
          reject(error);
        },
        () => {
          getDownloadURL(uploadImage.snapshot.ref)
            .then((downloadUrl) => resolve(downloadUrl))
            .catch((error) => reject(error));
        }
      );
    });
  }

  async function handleImage(e) {
    const extractedImageUrl = await firebaseImageUpload(e.target.files[0]);

    if (extractedImageUrl !== "") {
      setFormData({
        ...formData,
        imageUrl: extractedImageUrl,
      });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await createNewProduct(formData);
    console.log(res);
  }

  console.log(formData);
  return (
    <div className="bg-white flex-center flex-col w-full p-10 gap-10">
      <h1 className="text-3xl font-bold">NEW PRODUCT</h1>
      <input
        accept="image/*"
        max="1000000"
        type="file"
        onChange={handleImage}
      />
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex-center flex-col w-full gap-10"
      >
        {addProductFormControls.map((item) => (
          <InputComponent
            name={item.id}
            key={item.id}
            label={item.label}
            type={item.type}
            placeholder={item.placeholder}
            value={formData[item.id]}
            onChange={(event) =>
              setFormData((prevFormData) => ({
                ...prevFormData,
                [item.id]: event.target.value,
              }))
            }
          />
        ))}
        <button className="py-3 px-5 bg-green-500 rounded-md hover:bg-green-600">
          Add New Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
