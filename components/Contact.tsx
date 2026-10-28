import { site } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Contact() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-titulo"
      className="scroll-mt-20 bg-surface-green"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <h2
          id="contato-titulo"
          className="max-w-[20ch] text-[1.75rem] leading-tight font-semibold sm:text-[2.25rem]"
        >
          Fale com a {site.name}
        </h2>
        <p className="mt-5 max-w-[52ch] text-lg">
          A conversa começa no WhatsApp. Envie sua mensagem e a equipe responde
          por lá.
        </p>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-7">
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            role="button"
            aria-label="Conversar pelo WhatsApp"
            className="inline-flex h-13 items-center justify-center gap-2.5 rounded-full bg-green-deep px-7 text-[1.0625rem] font-semibold text-white transition-[background-color,transform] duration-150 ease-out hover:bg-navy active:scale-[0.98]"
          >
            <WhatsAppIcon className="size-5" />
            Conversar no WhatsApp
          </a>

          <a
            href={site.phoneHref}
            className="text-lg text-navy underline decoration-rule-green decoration-2 underline-offset-4 transition-colors duration-150 hover:decoration-green"
          >
            {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
