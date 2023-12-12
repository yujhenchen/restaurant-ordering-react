export default function Section({ children, customStyle = "" }) {
  return (
    <section className={`w-full px-[46px] h-[320px] bg-white ${customStyle}`}>
      {children}
    </section>
  );
}
