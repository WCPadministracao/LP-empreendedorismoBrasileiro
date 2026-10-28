"use client";

import { useEffect, useState } from "react";

type Source = { src: string; poster: string };

const LANDSCAPE: Source = {
  src: "/video/hero-desktop.mp4",
  poster: "/video/hero-desktop.jpg",
};

const PORTRAIT: Source = {
  src: "/video/hero-mobile.mp4",
  poster: "/video/hero-mobile.jpg",
};

/**
 * Vídeo de apresentação da marca, preenchendo o bloco inteiro do hero.
 *
 * A peça é escolhida pela ORIENTAÇÃO da janela, não pela largura: com
 * `object-cover` o corte depende da proporção, e um tablet em retrato (768×1024)
 * receberia a peça 16:9 e perderia ~460px de cada lado — cortando a logo.
 * Por orientação, cada formato recebe a peça mais próxima e o corte fica dentro
 * da margem vazia das peças (a arte ocupa 8,8%–89,5% no 16:9 e 7,2%–87,8% no 9:16).
 *
 * - Baixa um único arquivo: o que a janela vai usar.
 * - Com prefers-reduced-motion não reproduz nem baixa o vídeo: fica o poster.
 */
export function HeroMedia() {
  const [source, setSource] = useState<Source | null>(null);
  const [stillOnly, setStillOnly] = useState(false);

  useEffect(() => {
    const landscape = window.matchMedia("(min-aspect-ratio: 1/1)");
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");

    const sync = () => {
      setSource(landscape.matches ? LANDSCAPE : PORTRAIT);
      setStillOnly(calm.matches);
    };

    sync();
    landscape.addEventListener("change", sync);
    calm.addEventListener("change", sync);
    return () => {
      landscape.removeEventListener("change", sync);
      calm.removeEventListener("change", sync);
    };
  }, []);

  if (!source) return null;

  return (
    <video
      key={source.src}
      src={source.src}
      poster={source.poster}
      autoPlay={!stillOnly}
      preload={stillOnly ? "none" : "auto"}
      muted
      loop
      playsInline
      disablePictureInPicture
      tabIndex={-1}
      aria-label="Vídeo de apresentação da marca ABEMP"
      className="absolute inset-0 size-full object-cover"
    />
  );
}
