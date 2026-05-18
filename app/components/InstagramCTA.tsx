import Image from "next/image";

const whatsappUrl =
  "https://wa.me/573208921784?text=Hola%20Petis%2C%20quiero%20crear%20un%20calendario%20para%20mi%20mascota";

export function InstagramCTA() {
  return (
    <section id="contacto" className="bg-[#fffaf3] px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div className="relative aspect-square overflow-hidden rounded-lg bg-[#183e5b] shadow-[0_24px_70px_rgba(39,56,74,0.1)]">
          <Image
            src="/petis-story.webp"
            alt="Perro y gato rodeados de recuerdos felices"
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
            Síguenos en Instagram para ver lanzamientos e inspiración. Si ya tienes
            una historia en mente, escríbenos por WhatsApp Business o correo y
            empezamos por una foto y un recuerdo favorito.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href={whatsappUrl}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#25d366] px-7 py-4 text-center font-semibold text-[#123327] shadow-[0_18px_36px_rgba(37,211,102,0.22)] transition hover:bg-[#20c35d]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.04 2C6.57 2 2.12 6.45 2.12 11.92c0 1.75.46 3.45 1.33 4.95L2 22l5.26-1.38a9.9 9.9 0 0 0 4.78 1.22h.01c5.47 0 9.92-4.45 9.92-9.92C21.97 6.45 17.52 2 12.04 2Zm0 18.16h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.25-4.39c0-4.54 3.69-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.82c0 4.55-3.69 8.24-8.23 8.24Zm4.51-6.17c-.25-.12-1.46-.72-1.68-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.96-.14.17-.29.18-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.55c.12.17 1.73 2.64 4.19 3.7.59.25 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.46-.6 1.66-1.17.2-.58.2-1.07.14-1.17-.06-.11-.22-.17-.47-.29Z" />
              </svg>
              WhatsApp Business
            </a>
            <a
              href="mailto:petis.club@gmail.com?subject=Quiero%20crear%20un%20calendario%20Petis"
              className="rounded-full border border-[#d8c3b2] bg-white px-7 py-4 text-center font-semibold text-[#183e5b] transition hover:border-[#183e5b]/35"
            >
              petis.club@gmail.com
            </a>
            <a
              href="https://www.instagram.com/petis.club/"
              className="rounded-full border border-[#d8c3b2] bg-white px-7 py-4 text-center font-semibold text-[#183e5b] transition hover:border-[#183e5b]/35"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram @petis.club
            </a>
          </div>
          <p className="mt-5 text-sm font-medium text-[#68707b]">
            WhatsApp Business: +57 320 8921784
          </p>
        </div>
      </div>
    </section>
  );
}
