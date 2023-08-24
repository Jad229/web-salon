import axios from "axios";

export const registerNewUser = async (formData) => {
  try {
    const response = await axios.post(
      "/api/register",
      JSON.stringify(formData),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const finalData = response.json();

    return finalData;
  } catch (error) {
    console.log(error);
  }
};
