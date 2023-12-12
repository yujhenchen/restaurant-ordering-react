export default function RoundedButton({ onClick, sizeClasses, text }) {
  return (
    <button
      onClick={onClick}
      className={`${sizeClasses} border-solid	rounded-full bg-white border text-2xl`}
    >
      {text}
    </button>
  );
}
