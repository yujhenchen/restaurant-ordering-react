export default function Notification({ text }) {
  return (
    <div className="h-[120px] w-[504px] bg-[#ECFDF5] text-[#065F46] flex place-content-center items-center text-xl">
      {text}
    </div>
  );
}
