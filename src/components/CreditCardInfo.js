import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

export default function CreditCardInfo({ onPay }) {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvc, setCVC] = useState("");

  function onChangeName(value) {
    setName(value);
  }

  function onChangeCardNumber(value) {
    setCardNumber(value);
  }

  function onChangeCVC(value) {
    setCVC(value);
  }

  return (
    <form className="p-4 grid grid-col gap-6">
      <p className="text-2xl text-center mx-auto py-8 font-bold">
        Enter card details
      </p>
      <Input
        placeholder="Enter your name"
        value={name}
        required={true}
        onChange={onChangeName}
      />
      <Input
        placeholder="Enter card number"
        value={cardNumber}
        required={true}
        pattern="\d*"
        onChange={onChangeCardNumber}
      />
      <Input
        placeholder="Enter CVC"
        value={cvc}
        required={true}
        pattern="\d*"
        maxLength={3}
        onChange={onChangeCVC}
      />
      <Button
        text="Pay"
        onCLick={(event) => onPay(event, name, cardNumber, cvc)}
        disabled={false}
      />
    </form>
  );
}
