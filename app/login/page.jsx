"use client";
import InputComponent from "@components/FormElements/InputComponent";
import { loginFormControls } from "@utils";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";

import { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  console.log(formData);

  function isValidForm() {
    return (
      formData &&
      formData.email &&
      formData.email.trim() !== "" &&
      formData.password &&
      formData.password.trim() !== ""
    );
  }

  async function handleLogin() {
    try {
      const res = await signIn("credentials", formData);

      redirect("/products");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="relative bg-white my-12 p-12 w-full max-w-screen-sm rounded-xl drop-shadow-xl">
      <h1 className="text-center mb-12 font-bold text-4xl">Sign In</h1>
      <div className="flex-center flex-col gap-5">
        {loginFormControls.map((item) => (
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
      </div>
      <div className="flex-center py-4">
        <button
          className="disabled:opacity-50 w-full bg-black py-5 text-white hover:bg-transparent hover:text-black border border-black rounded-lg"
          disabled={!isValidForm()}
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
      <Link href="/register">
        <p className="text-gray-500 mb-2">Don't have an account?</p>
        <button className="w-full bg-black py-5 text-white hover:bg-transparent hover:text-black border border-black rounded-lg">
          Register
        </button>
      </Link>
    </div>
  );
}
