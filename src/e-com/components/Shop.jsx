export default function Shop({ children }) {
  return (
    <section id="shop" className="h-full">
      <h2 className="text-center pb-5">Elegant Clothing For Everyone</h2>

      <ul id="products">{children}</ul>
    </section>
  );
}
