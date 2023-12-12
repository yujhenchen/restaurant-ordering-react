import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

export default function CreditCardInfo({ onPay }) {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCVV] = useState("");

  return (
    <div className="p-4 grid grid-col gap-6">
      <p className="text-2xl text-center mx-auto py-8 font-bold">
        Enter card details
      </p>
      <Input placeholder="Enter your name" value={name} required={true} />
      <Input
        placeholder="Enter card number"
        value={cardNumber}
        required={true}
      />
      <Input placeholder="Enter CVV" value={cvv} required={true} />
      <Button text="Pay" onCLick={() => onPay(name, cardNumber, cvv)} />
    </div>
  );
}
