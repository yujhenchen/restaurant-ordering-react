export default function AddButton({ onAdd, sizeClasses }) {
  return (
    <button
      onClick={onAdd}
      className={`${sizeClasses} border-solid	rounded-full bg-white border`}
    >
      +
    </button>
  );
}
