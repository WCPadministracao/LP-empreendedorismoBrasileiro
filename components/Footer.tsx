import Image from "next/image";
import { site } from "@/lib/site";

const navLinks = [
  { href: "#apresentacao", label: "Apresentação" },
  { href: "#institucional", label: "Quem somos" },
  { href: "#contato", label: "Contato" },
];

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/70">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.5fr)_1fr_1fr] lg:gap-16">
          <div>
            {/*
              A logo oficial não tem fundo transparente: em vez de recortá-la ou
              espremê-la, ela ganha uma placa clara própria, em tamanho que deixa
              a assinatura legível.
            */}
            <div className="inline-block rounded-2xl bg-white p-6 sm:p-7">
              <Image
                src="/abemp-logo.png"
                alt={`${site.fullName} (${site.name})`}
                width={1519}
                height={580}
                sizes="(max-width: 640px) 272px, 336px"
                className="h-auto w-68 sm:w-84"
              />
            </div>
            <p className="mt-6 max-w-[38ch] text-[0.975rem] leading-relaxed text-white">
              {site.fullName}
            </p>
            {/*
              A assinatura existe dentro do PNG, mas renderiza com ~6px de altura
              em tamanho de rodapé. Repetida como texto, fica legível e chega aos
              leitores de tela.
            */}
            <p className="mt-2 max-w-[38ch] text-[0.9rem] leading-relaxed">
              {site.tagline}
            </p>
          </div>

          <nav aria-label="Rodapé">
            <h2 className="font-display text-[0.95rem] font-semibold tracking-wide text-white">
              Navegação
            </h2>
            <ul className="mt-4 space-y-2.5 text-[0.975rem]">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition-colors duration-150 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-[0.95rem] font-semibold tracking-wide text-white">
              Contato
            </h2>
            <address className="mt-4 space-y-2.5 text-[0.975rem] not-italic">
              <p>
                <a
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-150 hover:text-white"
                >
                  WhatsApp {site.phoneDisplay}
                </a>
              </p>
              <p>
                <a
                  href={site.phoneHref}
                  className="transition-colors duration-150 hover:text-white"
                >
                  Telefone {site.phoneDisplay}
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 pt-6 pb-24 text-[0.85rem] text-white/55 sm:px-8 sm:pb-6">
          © {site.name} — {site.fullName}.
        </p>
      </div>
    </footer>
  );
}
