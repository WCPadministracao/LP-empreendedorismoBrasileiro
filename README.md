# ABEMP — Landing page institucional

Página única institucional da **Associação Brasileira de Empreendedorismo (ABEMP)**.
Next.js (App Router) + TypeScript + Tailwind CSS v4. Sem dependências além do scaffold.

## Rodar

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de produção (100% estático)
```

## Identidade visual

Os tokens de cor em `app/globals.css` foram **extraídos por contagem de pixels da logo
oficial**, não escolhidos à mão:

| Token | Hex | Papel |
| --- | --- | --- |
| `--color-navy` | `#001E55` | cor dominante da logo; hero, títulos, botão do header |
| `--color-navy-deep` | `#001043` | navy mais escuro da logo |
| `--color-blue` | `#0082D5` | azul da seta; foco e links |
| `--color-green` | `#02873C` | verde da faixa; CTA de contato |
| `--color-yellow` | `#FDCA14` | amarelo da faixa; reservado para destaque pontual |
| `--color-green-deep` | `#04632F` | verde escurecido para o CTA primário |
| `--color-surface-green` | `#E3EFE6` | superfície clara esverdeada das seções de leitura |

Tipografia: **Lexend** (títulos) + **Source Sans 3** (texto), carregadas via `next/font`
(self-hosted, sem requisição externa).

### Vídeo do hero

O hero é uma **seção inteira dedicada à marca**, e o vídeo **preenche o bloco todo**
(`object-cover`, sem moldura). Altura: `calc(100svh - 4.5rem)` — a tela menos o header,
então header + hero ocupam exatamente uma tela. O texto de apresentação fica na seção
seguinte (`components/Intro.tsx`).

`public/video/` guarda as duas peças, recomprimidas a partir dos originais com o áudio
removido:

| Arquivo | Formato | Tamanho | Usado em |
| --- | --- | --- | --- |
| `hero-desktop.mp4` | 1600×900 (16:9) | 332 KB (era 1,9 MB) | janela em paisagem |
| `hero-mobile.mp4` | 720×1280 (9:16) | 160 KB (era 1,3 MB) | janela em retrato |

A peça é escolhida pela **orientação** da janela (`matchMedia("(min-aspect-ratio: 1/1)")`),
não pela largura. Com `object-cover` o corte depende da proporção: um tablet em retrato
(768×1024) com a peça 16:9 perderia ~460px de cada lado e cortaria a logo. Por orientação,
cada formato recebe a peça mais próxima e o corte cai na margem vazia — medida nos
pósteres, a arte ocupa 8,8%–89,5% da largura no 16:9 e 7,2%–87,8% no 9:16.

Só um arquivo é baixado por sessão. Com `prefers-reduced-motion` o vídeo não é reproduzido
nem baixado — fica o poster `.jpg`.

A pastilha "Conheça a ABEMP" tem fundo próprio em vez de um gradiente de largura inteira:
no 16:9 a arte chega a 92% da altura, e um véu no rodapé cobriria a logo.

Para trocar as peças, substitua os dois `.mp4` e os dois `.jpg` mantendo os nomes.

### Emblema e logo

Há dois arquivos de marca, com papéis diferentes:

- `public/emblema-abemp.png` — só o símbolo (mapa + seta), **com transparência real**.
  Usado no header e como favicon (`app/icon.png`). O original fornecido era RGB com o
  xadrez de transparência *pintado nos pixels*; o fundo foi recortado por saturação (a
  arte é toda saturada, o xadrez é cinza), com borda suavizada.
- `public/abemp-logo.png` — a logo completa, **cópia intacta do original** (1519×580, sem
  transparência). Fica no rodapé, sobre uma placa branca própria, já que não tem fundo
  transparente.

No rodapé a assinatura "Atuação Nacional | Fomento • Conexão • Inovação" também aparece
como **texto real**: dentro do PNG ela renderiza com ~6px de altura em tamanho de rodapé,
ilegível e invisível para leitores de tela.

### Ritmo de cores das seções

Nenhuma seção é branca. A alternância claro/escuro usa só a paleta da logo, com o verde
presente tanto na superfície clara quanto nos CTAs:

| Seção | Fundo |
| --- | --- |
| Hero (vídeo) | `--color-navy` `#001E55` |
| Apresentação | `--color-surface-green` `#E3EFE6` |
| Quem somos | `--color-navy` `#001E55` |
| Fale com a ABEMP | `--color-surface-green` `#E3EFE6` |
| Rodapé | `--color-navy-deep` `#001043` |

O CTA primário de WhatsApp é `--color-green-deep` `#04632F`.

## Conteúdo a substituir

Todo o texto institucional é **neutro e propositalmente genérico**, para ser trocado pela
redação oficial sem mexer no layout:

- `components/About.tsx` — os três parágrafos de "Quem somos".
- `lib/site.ts` — nome, telefone, link do WhatsApp e as descrições dos três pilares.

Nenhum dado foi inventado: anos de atuação, número de associados, certificações,
serviços e resultados **não** aparecem na página.

## Publicação

No ar em **https://abemp.vercel.app** (projeto Vercel `yamautimatheuseng-5058s-projects/abemp`,
vinculado por `.vercel/`).

A variável `NEXT_PUBLIC_SITE_URL` já está definida no ambiente de produção como
`https://abemp.vercel.app` — é ela que alimenta o `metadataBase` e as URLs absolutas do
Open Graph. **Ao apontar um domínio próprio, atualize essa variável e republique**, senão
as prévias de link continuarão apontando para o domínio `.vercel.app`:

```bash
vercel env rm NEXT_PUBLIC_SITE_URL production
printf 'https://seu-dominio.com.br' | vercel env add NEXT_PUBLIC_SITE_URL production
vercel --prod
```

Para publicar de novo depois de mudar o código:

```bash
vercel --prod
```

## WhatsApp

Todos os 5 botões apontam para o mesmo link, em nova aba, com
`rel="noopener noreferrer"` e nome acessível "Conversar pelo WhatsApp".

A conversa já abre com a mensagem digitada:

```
Olá, Gostaria de saber mais informações!
```

Número **+55 (61) 99988-7130** (`WHATSAPP_PHONE`) e mensagem (`WHATSAPP_MESSAGE`) ficam
centralizados em `lib/site.ts`, e alimentam os botões, o `tel:` e o link `wa.me`, e a URL é
montada com `encodeURIComponent` — para mudar o texto, edite só essa constante.
