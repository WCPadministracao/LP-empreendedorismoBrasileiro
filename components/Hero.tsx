import { site } from "@/lib/site";
import { HeroMedia } from "./HeroMedia";

/**
 * Seção inteira dedicada à marca: o vídeo preenche todo o bloco.
 * O texto de apresentação vive na seção seguinte (Intro).
 */
export function Hero() {
  return (
    <section
      aria-label="Apresentação da marca ABEMP"
      className="relative isolate min-h-[calc(100svh-4.5rem)] overflow-hidden bg-navy"
    >
      <HeroMedia />

      {/*
        Pastilha compacta em vez de um véu de largura inteira: a arte das peças
        chega a 92% da altura no 16:9, e um gradiente no rodapé cobriria a logo.
      */}
      <a
        href="#apresentacao"
        className="group absolute bottom-5 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full bg-navy/80 px-5 py-3 text-[0.9rem] font-medium text-white backdrop-blur-sm transition-colors duration-150 hover:bg-navy sm:bottom-7"
      >
        Conheça a {site.name}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="size-4 transition-transform duration-200 ease-out group-hover:translate-y-0.5"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}
