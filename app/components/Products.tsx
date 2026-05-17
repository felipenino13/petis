const products = [
  {
    title: "Calendarios personalizados",
    text: "Doce meses con fotos, fechas y detalles que hacen única su historia.",
    accent: "bg-[#ffc62a]",
  },
  {
    title: "Retratos ilustrados",
    text: "Ilustraciones cálidas para capturar su expresión, su energía y su presencia.",
    accent: "bg-[#56a7df]",
  },
  {
    title: "Álbumes de recuerdos",
    text: "Una colección cuidada de momentos, frases y pequeñas escenas compartidas.",
    accent: "bg-[#ef5366]",
  },
  {
    title: "Cartas conmemorativas",
    text: "Mensajes escritos con sensibilidad para honrar lo vivido sin exagerar la nostalgia.",
    accent: "bg-[#c98d6c]",
  },
  {
    title: "Kits de memoria",
    text: "Piezas físicas y digitales para guardar fotos, nombres, fechas y símbolos importantes.",
    accent: "bg-[#183e5b]",
  },
];

export function Products() {
  return (
    <section id="productos" className="bg-white px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ef5366]">
              Posibles productos
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#183e5b] sm:text-5xl">
              Recuerdos diseñados para vivir en casa, en papel o en digital.
            </h2>
          </div>
          <p className="max-w-md text-lg leading-8 text-[#68707b]">
            Una línea flexible para que cada familia encuentre una forma cercana de
            recordar.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <article
              key={product.title}
              className="group rounded-lg border border-[#ead9c8] bg-[#fffaf3] p-5 shadow-[0_18px_45px_rgba(39,56,74,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(39,56,74,0.12)]"
            >
              <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-lg bg-white">
                <div className={`absolute inset-x-0 bottom-0 h-1/2 ${product.accent}`} />
                <div className="absolute left-5 top-5 h-16 w-12 rounded-lg border-2 border-[#183e5b]/18 bg-white shadow-sm" />
                <div className="absolute bottom-5 right-5 h-16 w-16 rounded-full border-8 border-white bg-[#f5dccd] shadow-sm" />
                <div className="absolute left-8 top-16 h-3 w-16 rounded-full bg-[#183e5b]/18" />
              </div>
              <h3 className="text-lg font-semibold leading-6 text-[#183e5b]">
                {product.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#68707b]">{product.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
