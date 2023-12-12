import { useMemo } from "react";
import OrderSummaryItem from "./OrderSummaryItem";
import Button from "./Button";
import Modal from "./Modal";

export default function OrderSummary({ items, onRemoveItem }) {
  const totalPrice = useMemo(
    () => items.reduce((total, item) => total + item.price, 0),
    [items]
  );

  const groupItems = useMemo(() => {
    const groupArr = [];
    items.forEach((item) => {
      let foundItem = groupArr.find(
        (groupArrItem) => groupArrItem.id === item.id
      );

      if (foundItem) {
        foundItem = { ...foundItem, qty: foundItem.qty++ };
      } else {
        groupArr.push({ ...item, qty: 1 });
      }
    });
    return groupArr;
  }, [items]);

  function handleCompleteOrder() {}

  return (
    <>
      <h1 className="text-[1.75rem] text-center">Your Order</h1>
      <div className="overflow-auto">
        {groupItems.map((item) => (
          <OrderSummaryItem key={item.id} {...item} onRemove={onRemoveItem} />
        ))}
      </div>
      <hr className="my-4 border-1 border-[#0E0E0E]" />
      <p className="text-[1.25rem] flex place-content-between py-2">
        <span>Total Price: </span>
        <span>${totalPrice}</span>
      </p>
      <Button text="Complete Order" onCLick={handleCompleteOrder} />
      <Modal />
    </>
  );
}
