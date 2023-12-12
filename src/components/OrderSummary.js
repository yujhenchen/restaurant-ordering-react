import { useMemo, useState } from "react";
import OrderSummaryItem from "./OrderSummaryItem";
import Button from "./Button";
import Modal from "./Modal";
import CreditCardInfo from "./CreditCardInfo";

export default function OrderSummary({ items, onRemoveItem }) {
  const [openModal, setOpenModal] = useState(false);

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

  function handleCompleteOrder() {
    setOpenModal((openState) => !openState);
  }

  function onPay(event, ...cardData) {
    event.preventDefault();
    const [name, cardNumber, cvc] = cardData;
    console.log(name + " " + cardNumber + " " + cvc);
  }

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
      <Modal open={openModal} onCloseModal={handleCompleteOrder}>
        <CreditCardInfo onPay={onPay} />
      </Modal>
      {/* forward ref to child to open modal and close modal inside? */}
    </>
  );
}
