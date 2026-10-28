import { pillars, site } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

/**
 * O bloco de texto que antes ficava sobreposto ao vídeo, agora em seção
 * própria logo abaixo do hero.
 */
export function Intro() {
  return (
    <section
      id="apresentacao"
      aria-labelledby="apresentacao-titulo"
      className="scroll-mt-20 bg-surface-green"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
        <h1
          id="apresentacao-titulo"
          className="max-w-[17ch] hyphens-auto text-[2rem] leading-[1.08] font-semibold sm:text-[3rem] lg:text-[3.6rem]"
        >
          A associação do empreendedorismo brasileiro.
        </h1>

        <p className="mt-7 max-w-[46ch] text-lg sm:text-xl">
          A {site.name} reúne quem empreende em todo o país. Atuação nacional,
          com foco em fomento, conexão e inovação.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            role="button"
            aria-label="Conversar pelo WhatsApp"
            className="inline-flex h-13 items-center justify-center gap-2.5 rounded-full bg-green-deep px-7 text-[1.0625rem] font-semibold text-white transition-[background-color,transform] duration-150 ease-out hover:bg-navy active:scale-[0.98]"
          >
            <WhatsAppIcon className="size-5" />
            Entre em contato
          </a>

          <a
            href="#institucional"
            className="inline-flex h-13 items-center justify-center rounded-full border border-navy/25 px-7 text-[1.0625rem] font-medium text-navy transition-colors duration-150 hover:border-navy/60"
          >
            Conhecer a {site.name}
          </a>
        </div>

        {/* Eco do filete verde→azul que fecha a assinatura da logo. */}
        <div
          aria-hidden="true"
          className="mt-16 h-[3px] w-full rounded-full bg-gradient-to-r from-green to-blue"
        />

        <dl className="mt-8 grid gap-8 sm:grid-cols-3 sm:gap-10">
          {pillars.map((pillar) => (
            <div key={pillar.title}>
              <dt className="font-display text-lg font-semibold text-navy">
                {pillar.title}
              </dt>
              <dd className="mt-2 max-w-[34ch] text-[0.975rem] leading-relaxed">
                {pillar.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
