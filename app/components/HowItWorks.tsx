const steps = [
  "Comparte fotos de tu mascota.",
  "Cuéntanos su historia.",
  "Creamos un recuerdo especial.",
  "Lo recibes y lo conservas para siempre.",
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-[#fffaf3] px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b24f48]">
            Cómo funciona
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#183e5b] sm:text-5xl">
            Un proceso simple, sensible y muy personal.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {steps.map((step, index) => (
            <article key={step} className="rounded-lg bg-white p-6 shadow-sm">
              <span className="text-sm font-semibold text-[#ef5366]">
                Paso {index + 1}
              </span>
              <h3 className="mt-4 text-xl font-semibold leading-7 text-[#183e5b]">
                {step}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
