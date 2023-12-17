export default function Button({ text, onCLick, ...buttonProps }) {
  console.log(buttonProps);
  return (
    <button
      className="w-full h-[60px] bg-[#16DB99] text-white text-xl disabled:bg-gray-300"
      onClick={onCLick}
      {...buttonProps}
    >
      {text}
    </button>
  );
}
