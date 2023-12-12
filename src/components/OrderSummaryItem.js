export default function OrderSummaryItem({ id, name, price, onRemove }) {
  return (
    <p className="flex place-content-between text-[1.75rem]">
      <span>
        {name}
        <button className="text-[0.75rem]" onClick={() => onRemove(id)}>
          remove
        </button>
      </span>

      <span className="text-[1.25rem]">${price}</span>
    </p>
  );
}
