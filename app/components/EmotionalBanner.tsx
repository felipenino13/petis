import { EmotionalVideo } from "./EmotionalVideo";

export function EmotionalBanner() {
  return (
    <section className="bg-[#183e5b] px-5 py-24 text-white sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="relative overflow-hidden rounded-lg bg-[#102f46] shadow-[0_28px_80px_rgba(24,62,91,0.24)]">
          <EmotionalVideo />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ffc62a]">
            Historias que permanecen
          </p>
          <blockquote className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl">
            “Porque algunas huellas no se borran, se transforman en recuerdos.”
          </blockquote>
          <p className="mt-6 text-lg leading-8 text-[#dce7ec]">
            Una imagen, una fecha o una frase pueden convertirse en una manera
            serena de seguir celebrando todo lo que compartieron.
          </p>
        </div>
      </div>
    </section>
  );
}
