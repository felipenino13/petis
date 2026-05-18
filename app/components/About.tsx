export function About() {
  return (
    <section id="que-es" className="bg-white px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ef5366]">
            Qué es Petis
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#183e5b] sm:text-5xl">
            Una forma bonita de conservar lo que tu mascota significa para ti.
          </h2>
        </div>
        <div className="rounded-lg border border-[#ead9c8] bg-[#fffaf3] p-7 shadow-[0_20px_55px_rgba(39,56,74,0.08)] sm:p-10">
          <p className="text-lg leading-8 text-[#5f6470]">
            Petis convierte el amor por las mascotas en calendarios de escritorio
            personalizados: recuerdos físicos pensados para celebrar su personalidad,
            sus días favoritos y la manera en que acompañaron tu vida.
          </p>
          <p className="mt-5 text-lg leading-8 text-[#5f6470]">
            No se trata de olvidar ni de quedarse en la tristeza. Se trata de mirar
            su historia con gratitud y crear algo cálido, moderno y profundamente
            personal.
          </p>
        </div>
      </div>
    </section>
  );
}
