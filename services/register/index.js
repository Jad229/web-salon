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

    // Access the response data directly from the "data" property
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
