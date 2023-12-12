import React from "react";

export default function Input({ placeholder, value, required }) {
  return (
    <input
      className="w-[476px] h-[70px] border-solid border-2 px-4 py-2 text-xl"
      type="text"
      placeholder={placeholder}
      value={value}
      required={required}
    />
  );
}
