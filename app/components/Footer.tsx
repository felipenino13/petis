export function Footer() {
  return (
    <footer className="border-t border-[#ead9c8] bg-[#fffaf3] px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-[#68707b] sm:flex-row">
        <p className="font-semibold text-[#183e5b]">Petis</p>
        <p>Recuerdos especiales para mascotas.</p>
        <a href="https://www.instagram.com/petis.club/" className="hover:text-[#183e5b]">
          Instagram @petis.club
        </a>
      </div>
    </footer>
  );
}
