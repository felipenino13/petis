import Image from "next/image";

export function InstagramCTA() {
  return (
    <section id="contacto" className="bg-[#fffaf3] px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div className="relative aspect-square overflow-hidden rounded-lg bg-[#183e5b] shadow-[0_24px_70px_rgba(39,56,74,0.1)]">
          <Image
            src="/logo-petis-100.webp"
            alt="Logo de Petis"
            fill
            sizes="(max-width: 1024px) 100vw, 36vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ef5366]">
            @petis.club
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#183e5b] sm:text-5xl">
            Estamos creando una marca para recordar con amor.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#68707b]">
            Síguenos en Instagram para ver lanzamientos, inspiración y primeras
            colecciones. Si ya tienes una historia en mente, podemos empezar por
            una foto y un recuerdo favorito.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://www.instagram.com/petis.club/"
              className="rounded-full bg-[#183e5b] px-7 py-4 text-center font-semibold text-white transition hover:bg-[#245476]"
            >
              Síguenos en Instagram
            </a>
            <a
              href="mailto:hola@petis.club?subject=Quiero%20crear%20un%20recuerdo%20Petis"
              className="rounded-full border border-[#d8c3b2] bg-white px-7 py-4 text-center font-semibold text-[#183e5b] transition hover:border-[#183e5b]/35"
            >
              Crea un recuerdo para tu mascota
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
