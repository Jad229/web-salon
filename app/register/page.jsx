"use client";
import InputComponent from "@components/FormElements/InputComponent";
import { registerNewUser } from "@services/register";
import { registerFormControls } from "@utils";
import { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  console.log(formData);

  function isConfirmPasswordValid() {
    return formData.confirmPassword === formData.password;
  }

  function isFormValid() {
    return formData &&
      formData.lastName &&
      formData.lastName.trim() !== "" &&
      formData.firstName &&
      formData.firstName.trim() !== "" &&
      formData.email &&
      formData.email.trim() !== "" &&
      formData.password &&
      formData.password.trim() !== "" &&
      formData.confirmPassword &&
      formData.confirmPassword.trim() !== ""
      ? true
      : false;
  }

  async function handleRegister() {
    const data = await registerNewUser(formData);

    console.log(data);
  }

  return (
    <div className="flex-center flex-col bg-white my-12 p-12 w-full max-w-screen-sm rounded-xl drop-shadow-xl">
      <h1 className="mb-12 font-bold text-4xl">Register New Account</h1>
      <div className="w-full flex-center flex-col gap-5">
        {registerFormControls.map((item) => (
          <InputComponent
            name={item.id}
            key={item.id}
            label={item.label}
            type={item.type}
            placeholder={item.placeholder}
            onChange={(event) =>
              setFormData((prevFormData) => ({
                ...prevFormData,
                [item.id]: event.target.value,
              }))
            }
            value={formData[item.id]}
          />
        ))}
      </div>
      <div className="w-full flex-center flex-col py-4">
        <span className="text-red-400">
          {formData.confirmPassword &&
            !isConfirmPasswordValid() &&
            "Passwords must match!"}
        </span>
        <button
          onClick={handleRegister}
          className="disabled:opacity-50 w-full bg-black py-5 text-white hover:bg-transparent hover:text-black border border-black rounded-lg"
          disabled={!isFormValid() && !isConfirmPasswordValid()}
        >
          Register
        </button>
      </div>
    </div>
  );
}
