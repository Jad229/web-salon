import React from "react";

function InputComponent({ name, label, placeholder, onChange, value, type }) {
  return (
    <div className="relative w-full">
      <p
        htmlFor={name}
        className="absolute top-0 left-3 -translate-y-1/2 text-gray-600 font-medium bg-white"
      >
        {label}
      </p>
      <input
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        className="border placeholder-gray-400 focus:outline-none focus:border-black w-full p-4 text-base block bg-white border-gray-300 rounded-lg"
      />
    </div>
  );
}

export default InputComponent;
