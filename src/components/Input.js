import React from "react";

export default function Input({
  placeholder,
  value,
  required,
  pattern = "",
  maxLength = 30,
  onChange,
}) {
  return (
    <input
      className="w-[476px] h-[70px] border-solid border-2 px-4 py-2 text-xl"
      type="text"
      placeholder={placeholder}
      value={value}
      required={required}
      pattern={pattern ? pattern : null}
      maxLength={maxLength}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}
