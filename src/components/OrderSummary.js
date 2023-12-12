import { useMemo } from "react";
import OrderSummaryItem from "./OrderSummaryItem";
import Button from "./Button";

export default function OrderSummary({ items }) {
  const totalPrice = useMemo(
    () => items.reduce((total, item) => total + item.price, 0),
    [items]
  );

  function onRemoveItem(itemID) {
    console.log(`remove item ${itemID}`);
  }

  function handleCompleteOrder() {}

  return (
    <>
      <h1 className="text-[1.75rem]">Your Order</h1>
      <div>
        {items.map((item) => (
          <OrderSummaryItem key={item.id} {...item} onRemove={onRemoveItem} />
        ))}
      </div>
      <hr />
      <p className="text-[1.25rem]">
        <span>Total Price: </span>
        <span>${totalPrice}</span>
      </p>
      <Button text="Complete Order" onCLick={handleCompleteOrder} />
    </>
  );
}
