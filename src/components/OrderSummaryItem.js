export default function OrderSummaryItem({ id, name, price, qty, onRemove }) {
  return (
    <div className="flex place-content-between text-[1.75rem]">
      <div className="flex space-x-8">
        <span>{name}</span>
        <button
          className="text-[0.75rem] bg-[#16DB99] self-center text-white py-1 px-2"
          onClick={() => onRemove(id)}
        >
          remove
        </button>
      </div>

      <div className="flex space-x-8">
        <span className="text-[1.25rem]">
          QTY <span>{qty}</span>
        </span>
        <span className="text-[1.25rem]">
          $ <span>{price}</span>
        </span>
      </div>
    </div>
  );
}
