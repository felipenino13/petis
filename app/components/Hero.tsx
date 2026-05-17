import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#fffaf3]">
      <div className="absolute left-0 top-16 h-72 w-72 rounded-full bg-[#ef5366]/12 blur-3xl" />
      <div className="absolute bottom-8 right-0 h-80 w-80 rounded-full bg-[#56a7df]/16 blur-3xl" />
      <div className="mx-auto grid min-h-[calc(100vh-81px)] w-full max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:px-10">
        <div className="relative z-10 w-full min-w-0 max-w-[22rem] sm:max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-[#ef5366]/20 bg-white/70 px-4 py-2 text-sm font-semibold text-[#b24f48] shadow-sm">
            Recuerdos boutique para mascotas
          </p>
          <h1 className="text-5xl font-semibold leading-[1.02] text-[#183e5b] sm:text-6xl lg:text-7xl">
            Celebra el amor que dejó huella.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f6470] sm:text-xl">
            Petis transforma fotos, historias y momentos de tu mascota en recuerdos
            visuales, físicos y digitales para conservar su presencia con ternura.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contacto"
              className="w-full rounded-full bg-[#ef5366] px-7 py-4 text-center text-base font-semibold text-white shadow-[0_20px_40px_rgba(239,83,102,0.22)] transition hover:bg-[#dc4358] sm:w-auto"
            >
              Quiero crear un recuerdo
            </a>
            <a
              href="https://www.instagram.com/petis.club/"
              className="w-full rounded-full border border-[#d8c3b2] bg-white/75 px-7 py-4 text-center text-base font-semibold text-[#183e5b] transition hover:border-[#183e5b]/35 hover:bg-white sm:w-auto"
            >
              Ver Instagram
            </a>
          </div>
        </div>

        <div className="relative z-10 w-full min-w-0 max-w-[22rem] sm:mx-auto sm:max-w-xl">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#f5dccd] shadow-[0_28px_80px_rgba(39,56,74,0.16)]">
            <div className="absolute inset-4 rounded-[1.55rem] border border-white/60" />
            <div className="absolute left-8 top-8 rounded-3xl bg-white/78 p-4 shadow-xl backdrop-blur">
              <Image
                src="/petis-logo.jpg"
                alt="Ilustración de perro y gato de Petis"
                width={176}
                height={176}
                className="rounded-2xl"
              />
            </div>
            <div className="absolute bottom-10 left-8 right-8 rounded-[1.35rem] bg-[#fffaf3]/92 p-6 shadow-2xl backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ef5366]">
                Recuerdo 01
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-[#183e5b]">
                Su historia, guardada con amor.
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#68707b]">
                Un retrato, una fecha especial, una frase y ese detalle que solo tú
                reconoces.
              </p>
            </div>
            <div className="absolute right-8 top-16 rounded-2xl bg-[#ffc62a] px-4 py-3 text-sm font-bold text-[#183e5b] shadow-xl">
              12 momentos
            </div>
            <div className="absolute bottom-36 right-8 rounded-full bg-[#56a7df] px-5 py-3 text-sm font-bold text-white shadow-xl">
              Para siempre
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
