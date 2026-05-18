export function Footer() {
  return (
    <footer className="border-t border-[#ead9c8] bg-[#fffaf3] px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-[#68707b] lg:flex-row lg:items-center">
        <p className="font-semibold text-[#183e5b]">Petis</p>
        <p>Calendarios de escritorio para recordar con amor.</p>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href="mailto:petis.club@gmail.com" className="hover:text-[#183e5b]">
            petis.club@gmail.com
          </a>
          <a
            href="https://wa.me/573208921784"
            className="hover:text-[#183e5b]"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp +57 320 8921784
          </a>
          <a
            href="https://www.instagram.com/petis.club/"
            className="hover:text-[#183e5b]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram @petis.club
          </a>
        </div>
      </div>
    </footer>
  );
}
