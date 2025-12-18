// components/SponsorMarquee.tsx
"use client";

const items = [
  "Compras / Insumos",
  "Stock en vivo",
  "Recetas y masas",
  "FEFO automático",
  "Lotes (P-XXXX / L-XXXX)",
  "Freezer + vencimientos",
  "Calidad y envasado",
  "POES + Planillas",
  "Temperaturas",
  "Trazabilidad completa",
  "Costos en vivo",
  "IA por voz (Gemini)",
];

export default function SponsorMarquee() {
  // duplicamos para loop infinito
  const loop = [...items, ...items];

  return (
    <section aria-label="Módulos MYSYN" className="pt-2 pb-6">
      <div className="container-mysyn">
        <div className="marquee">
          <div className="marquee__row">
            {loop.map((t, idx) => (
              <div className="marquee__item" key={`${t}-${idx}`}>
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
