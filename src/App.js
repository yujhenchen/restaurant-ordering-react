import "./styles.css";
import { menuArray } from "./data.js";
import Header from "./components/Header";
import ItemCard from "./components/ItemCard";
import OrderSummary from "./components/OrderSummary";
import Section from "./components/Section";

export default function App() {
  function onAddItem(itemID) {
    console.log(`onAddItem ${itemID}`);
  }

  return (
    <main className="flex flex-col w-[600px] min-h-screen max-h-screen mx-auto">
      <Header />

      <Section customStyle="py-16 grid gap-10 overflow-auto flex-1">
        {menuArray.map((item) => (
          <ItemCard key={item.id} {...item} onAdd={onAddItem} />
        ))}
      </Section>

      <Section customStyle="h-[320px]">
        <OrderSummary items={[]} />
      </Section>
    </main>
  );
}
