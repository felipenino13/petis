const benefits = [
  {
    title: "Celebra su historia",
    text: "Cada mascota tiene gestos, rutinas y pequeñas manías que merecen ser recordadas.",
    icon: "✦",
  },
  {
    title: "Conserva sus momentos",
    text: "Transforma fotos y fechas especiales en piezas que puedes ver, tocar o compartir.",
    icon: "♡",
  },
  {
    title: "Un recuerdo bonito",
    text: "Diseños sensibles y modernos para acompañarte sin sentirse pesados ni solemnes.",
    icon: "•",
  },
  {
    title: "Comparte su memoria",
    text: "Crea algo para quienes también la amaron y quieren tenerla cerca de otra manera.",
    icon: "✧",
  },
];

export function Benefits() {
  return (
    <section className="bg-[#fffaf3] px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b24f48]">
            Por qué importa
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#183e5b] sm:text-5xl">
            Los recuerdos nos ayudan a seguir sintiendo cerca lo que amamos.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="rounded-lg border border-[#ead9c8] bg-white p-6 shadow-[0_18px_45px_rgba(39,56,74,0.07)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#183e5b] text-xl font-semibold text-[#ffc62a]">
                {benefit.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#183e5b]">
                {benefit.title}
              </h3>
              <p className="mt-3 leading-7 text-[#68707b]">{benefit.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
