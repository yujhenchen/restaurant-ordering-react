import "./styles.css";
import { menuArray } from "./data.js";
import Header from "./components/Header";
import ItemCard from "./components/ItemCard";

export default function App() {
  function onAddItem(itemID) {}

  return (
    <main className="w-[600px] min-h-screen mx-auto">
      <Header />
      <section className="w-full px-[46px] py-16 grid gap-10">
        {menuArray.map((item) => (
          <ItemCard key={item.id} {...item} onAdd={onAddItem} />
        ))}
      </section>
    </main>
  );
}
