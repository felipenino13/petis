export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-81px)] overflow-hidden bg-[#183e5b]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/cover-facebook.webp"
        aria-hidden="true"
      >
        <source src="/estrellas.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-[#183e5b]/92 via-[#183e5b]/64 to-[#183e5b]/22" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_45%,rgba(239,83,102,0.28),transparent_32%),radial-gradient(circle_at_78%_18%,rgba(255,198,42,0.18),transparent_28%)]" />
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-81px)] max-w-7xl items-center px-5 py-20 sm:px-8 lg:px-10">
        <div className="w-full min-w-0 max-w-[22rem] text-white sm:max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-white/25 bg-white/14 px-4 py-2 text-sm font-semibold text-[#ffe7d8] shadow-sm backdrop-blur">
            Recuerdos boutique para mascotas
          </p>
          <h1 className="text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
            Celebra el amor que dejó huella.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#f6e8dc] sm:text-xl">
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
              className="w-full rounded-full border border-white/35 bg-white/12 px-7 py-4 text-center text-base font-semibold text-white backdrop-blur transition hover:bg-white/20 sm:w-auto"
            >
              Ver Instagram
            </a>
          </div>
          <div className="mt-10 grid max-w-xl gap-4 text-sm text-[#f9eee6] sm:grid-cols-3">
            <span className="border-l border-white/35 pl-4">Fotos reales</span>
            <span className="border-l border-white/35 pl-4">Calendarios</span>
            <span className="border-l border-white/35 pl-4">Historias con amor</span>
          </div>
        </div>
      </div>
    </section>
  );
}
