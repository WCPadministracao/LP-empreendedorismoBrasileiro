import type { Metadata, Viewport } from "next";
import { Lexend, Source_Sans_3 } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} — ${site.fullName}`,
  description:
    "A ABEMP é uma associação brasileira dedicada ao empreendedorismo, com atuação nacional em fomento, conexão e inovação. Fale com a equipe pelo WhatsApp.",
  applicationName: site.name,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.name,
    title: `${site.name} — ${site.fullName}`,
    description:
      "Associação brasileira dedicada ao empreendedorismo. Atuação nacional em fomento, conexão e inovação.",
    images: [{ url: "/abemp-logo.png", width: 1519, height: 580 }],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#001e55",
  viewportFit: "cover",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${lexend.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
