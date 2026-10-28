import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

const links = [
  { href: "#institucional", label: "Institucional" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 h-18 border-b border-white/10 bg-navy">
      <div className="mx-auto flex h-full max-w-6xl items-center gap-4 px-5 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 text-white"
          aria-label={`${site.name} — ${site.fullName}`}
        >
          <Image
            src="/emblema-abemp.png"
            alt=""
            width={512}
            height={512}
            priority
            sizes="44px"
            className="size-9 shrink-0 sm:size-10"
          />
          <span className="font-display text-xl font-semibold tracking-[0.06em]">
            {site.name}
          </span>
          <span
            aria-hidden="true"
            className="hidden h-7 w-px bg-white/25 lg:block"
          />
          <span
            aria-hidden="true"
            className="hidden max-w-[20ch] text-[0.8rem] leading-tight text-white/65 lg:block"
          >
            {site.fullName}
          </span>
        </Link>

        <nav aria-label="Seções da página" className="ml-auto hidden md:block">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex min-h-11 items-center text-[0.95rem] text-white/75 transition-colors duration-150 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={site.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          role="button"
          aria-label="Conversar pelo WhatsApp"
          className="ml-auto inline-flex h-11 items-center gap-2 rounded-full border border-white/35 px-4 text-[0.95rem] font-medium text-white transition-[background-color,border-color,transform] duration-150 ease-out hover:border-white/70 hover:bg-white/10 active:scale-[0.98] sm:px-5 md:ml-0"
        >
          <WhatsAppIcon className="size-[18px]" />
          <span className="hidden sm:inline">Falar no WhatsApp</span>
        </a>
      </div>
    </header>
  );
}
