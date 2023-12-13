export default function Section({ children, customStyle = "" }) {
  return (
    <section className={`w-full px-[3em] h-[320px] bg-white ${customStyle}`}>
      {children}
    </section>
  );
}
