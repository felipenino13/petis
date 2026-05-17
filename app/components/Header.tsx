import Image from "next/image";

const navigation = [
  { label: "Qué es", href: "#que-es" },
  { label: "Recuerdos", href: "#productos" },
  { label: "Proceso", href: "#como-funciona" },
  { label: "Instagram", href: "https://www.instagram.com/petis.club/" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#ead9c8]/70 bg-[#fffaf3]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <a href="#" className="flex items-center gap-3" aria-label="Ir al inicio">
          <Image
            src="/petis-logo.jpg"
            alt="Petis"
            width={44}
            height={44}
            priority
            className="rounded-full border border-[#f0c9b6] shadow-sm"
          />
          <span className="text-lg font-semibold tracking-[0.08em] text-[#183e5b]">
            PETIS
          </span>
        </a>
        <div className="hidden items-center gap-7 text-sm font-medium text-[#5f6470] md:flex">
          {navigation.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-[#183e5b]">
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#contacto"
          className="hidden rounded-full bg-[#183e5b] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_35px_rgba(24,62,91,0.18)] transition hover:bg-[#245476] sm:inline-flex"
        >
          Crear recuerdo
        </a>
      </nav>
    </header>
  );
}
