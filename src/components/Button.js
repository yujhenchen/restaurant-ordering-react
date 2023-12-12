export default function Button({ text, onCLick }) {
  return (
    <button
      className="w-full h-[60px] bg-[#16DB99] text-white text-xl"
      onClick={onCLick}
    >
      {text}
    </button>
  );
}
