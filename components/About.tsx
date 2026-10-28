import { site } from "@/lib/site";

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
    </section>
  );
}
