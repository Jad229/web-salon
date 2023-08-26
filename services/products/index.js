import axios from "axios";

export const createNewProduct = async (formData) => {
  try {
    const res = await axios.post("/api/products", JSON.stringify(formData), {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
