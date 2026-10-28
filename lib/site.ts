/** +55 (61) 99988-7130 em formato internacional, só dígitos. */
const WHATSAPP_PHONE = "5561999887130";

/** Mensagem já digitada na conversa quando a pessoa abre o WhatsApp. */
export const WHATSAPP_MESSAGE = "Olá, Gostaria de saber mais informações!";

export const site = {
  name: "ABEMP",
  fullName: "Associação Brasileira de Empreendedorismo",
  tagline: "Atuação Nacional | Fomento • Conexão • Inovação",
  phoneDisplay: "(61) 99988-7130",
  phoneHref: `tel:+${WHATSAPP_PHONE}`,
  whatsappUrl: `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE,
  )}`,
  /**
   * Domínio real do site. Defina NEXT_PUBLIC_SITE_URL no ambiente
   * (ex.: nas variáveis do projeto na Vercel) antes de publicar.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

/** Pilares declarados na assinatura da logo oficial. */
export const pillars = [
  {
    title: "Fomento",
    description:
      "Apoio a quem empreende, do primeiro passo ao crescimento do negócio.",
  },
  {
    title: "Conexão",
    description:
      "Aproximação entre empreendedores, instituições e parceiros em todo o país.",
  },
  {
    title: "Inovação",
    description:
      "Incentivo a novas práticas, tecnologias e formas de organizar o trabalho.",
  },
] as const;
