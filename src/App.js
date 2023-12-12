import "./styles.css";
import { menuArray } from "./data.js";
import Header from "./components/Header";
import ItemCard from "./components/ItemCard";
import OrderSummary from "./components/OrderSummary";
import Section from "./components/Section";
import { useMemo, useState } from "react";

export default function App() {
  const menuItems = useMemo(() => menuArray, [menuArray]);

  const [addedItems, setAddedItems] = useState([]);

  function onAddItem(itemID) {
    const newItem = menuItems.find((item) => item.id === itemID);
    if (newItem) setAddedItems((items) => [...items, newItem]);
    else
      console.log(`Error: onAddItem: Cannot find the item with id ${itemID}`);
  }

  function onRemoveItem(itemID) {
    setAddedItems((items) => items.filter((item) => item.id !== itemID));
  }

  return (
    <main className="flex flex-col w-[600px] min-h-screen max-h-screen mx-auto">
      <Header />

      <Section customStyle="py-16 grid gap-10 overflow-auto flex-1">
        {menuItems.map((item) => (
          <ItemCard key={item.id} {...item} onAdd={onAddItem} />
        ))}
      </Section>

      <Section customStyle="h-[320px] py-4 shadow-lg flex flex-col">
        <OrderSummary items={addedItems} onRemoveItem={onRemoveItem} />
      </Section>
    </main>
  );
}
