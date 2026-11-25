import { site } from "@/lib/site";
import { PresidentPhoto } from "./PresidentPhoto";

/*
  Texto institucional neutro e propositalmente genérico: substituível pela
  redação oficial da associação sem alterar o layout.
*/
export function About() {
  return (
    <section
      id="institucional"
      aria-labelledby="institucional-titulo"
      className="scroll-mt-20 bg-navy text-white"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[18rem_minmax(0,1fr)] lg:gap-20">
        <div>
          <h2
            id="institucional-titulo"
            className="text-[1.75rem] leading-tight font-semibold text-white sm:text-[2rem]"
          >
            Quem somos
          </h2>
          <div
            aria-hidden="true"
            className="mt-5 h-[3px] w-16 rounded-full bg-gradient-to-r from-green to-blue"
          />
        </div>

        <div className="max-w-[62ch] space-y-5 text-lg text-white/85">
          <p>
            A {site.name} é uma associação brasileira dedicada ao
            empreendedorismo. Reúne pessoas e organizações interessadas em
            fortalecer quem empreende, em diferentes regiões e setores do país.
          </p>
          <p>
            O trabalho da associação se organiza em três frentes: fomentar
            iniciativas, conectar pessoas e instituições, e apoiar a inovação.
          </p>
          <p>
            Para conhecer a atuação da associação, as formas de participação ou
            possibilidades de parceria, fale diretamente com a equipe.
          </p>
        </div>
      </div>

      <section
        aria-labelledby="palavra-do-presidente"
        className="border-t border-rule bg-white text-ink"
      >
        <div className="grid lg:grid-cols-[minmax(0,11fr)_minmax(0,9fr)]">
          <PresidentPhoto />

          <div className="w-full max-w-2xl self-center px-5 py-12 sm:px-8 sm:py-16 xl:px-14">
            <h2
              id="palavra-do-presidente"
              className="text-3xl leading-tight font-semibold sm:text-4xl"
            >
              Palavra do presidente
            </h2>

            <div className="mt-6 space-y-4 text-lg leading-relaxed">
              <p>
                Acreditamos que o empreendedorismo é uma das maiores forças de
                transformação econômica e social do Brasil. É por meio da
                coragem de empreender, da inovação e da capacidade de superar
                desafios que construímos oportunidades, geramos empregos e
                impulsionamos o desenvolvimento do nosso país.
              </p>
              <p>
                A ABEMP — Associação Brasileira de Empreendedorismo tem o
                compromisso de unir pessoas, fortalecer negócios, ampliar
                oportunidades e dar voz a quem acredita no potencial de
                empreender.
              </p>
              <p>
                Mais do que representar empreendedores, queremos construir
                conexões, estimular o conhecimento, defender a competitividade
                e contribuir para um ambiente de negócios mais justo, moderno e
                próspero.
              </p>
              <p>
                Nosso propósito é claro:{" "}
                <strong className="font-semibold text-green-deep">
                  “Fortalecendo quem empreende. Transformando o Brasil.”
                </strong>
              </p>
              <p>
                Porque acreditamos que um Brasil mais forte começa com
                empreendedores mais fortes.
              </p>
            </div>

            <div className="mt-7 border-t border-rule pt-5">
              <p className="font-display text-lg font-semibold text-navy">
                André Ursini
              </p>
              <p className="mt-1 text-base text-ink-muted">
                Presidente da ABEMP — Associação Brasileira de Empreendedorismo
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
