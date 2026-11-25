"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export function PresidentPhoto() {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const image = imageRef.current;
    if (!image || !("IntersectionObserver" in window)) return;

    // Preserva a foto se a página já abrir com ela visível.
    const { top, bottom } = image.getBoundingClientRect();
    if (top < window.innerHeight && bottom > 0) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;

        image.removeAttribute("data-reveal-pending");
        observer.disconnect();
      },
      { threshold: 0.1 },
    );

    image.setAttribute("data-reveal-pending", "");
    observer.observe(image);

    return () => {
      observer.disconnect();
      image.removeAttribute("data-reveal-pending");
    };
  }, []);

  return (
    <div className="relative aspect-960/1036 lg:aspect-auto lg:min-h-[clamp(36rem,48vw,54rem)]">
      <Image
        ref={imageRef}
        src="/andre-ursini.webp"
        alt="André Ursini, presidente da ABEMP"
        fill
        sizes="(min-width: 1024px) 55vw, 100vw"
        className="president-photo object-cover object-top"
      />
    </div>
  );
}
