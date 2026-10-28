import { site } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

/**
 * Botão flutuante fixo no canto inferior direito.
 * Afastado das bordas com env(safe-area-inset-*) para não cair sobre a
 * barra de gestos do iOS.
 */
export function WhatsAppFloat() {
  return (
    <a
      href={site.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      role="button"
      aria-label="Conversar pelo WhatsApp"
      className="fixed right-5 bottom-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_6px_20px_rgba(2,76,32,0.3)] transition-transform duration-150 ease-out hover:scale-105 active:scale-95 sm:size-[3.75rem]"
      style={{
        right: "max(1.25rem, env(safe-area-inset-right))",
        bottom: "max(1.25rem, env(safe-area-inset-bottom))",
      }}
    >
      <WhatsAppIcon className="size-7 sm:size-8" />
    </a>
  );
}
