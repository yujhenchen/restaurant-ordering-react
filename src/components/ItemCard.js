import React from "react";
import RoundedButton from "./RoundedButton";

export default function ItemCard({
  name,
  ingredients,
  id,
  price,
  emoji,
  onAdd,
}) {
  return (
    <div className="w-full relative bg-white">
      <p className="text-[4.375rem] inline-block align-top">{emoji}</p>
      <div className="inline-block">
        <p className="text-2xl">{name}</p>
        <p className="text-base">{ingredients.join(", ")}</p>
        <p className="text-base">${price}</p>
      </div>
      <RoundedButton
        onClick={() => onAdd(id)}
        sizeClasses="w-[50px] h-[50px] absolute right-px top-px"
        text="+"
      />
      <hr />
    </div>
  );
}
