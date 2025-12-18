"use client";

import Image from "next/image";
import RevealOnScroll from "../components/RevealOnScroll";

const WHATSAPP_URL = "https://wa.me/549XXXXXXXXXX"; // poné tu número

function Icon({ children }: { children: React.ReactNode }) {
  return <span className="icon-pill">{children}</span>;
}

function ITrace() {
  return (
    <svg viewBox="0 0 24 24" className="ico" fill="none" aria-hidden="true">
      <path
        d="M6 7h12M6 12h9M6 17h7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M18.5 14.5l1.7 1.7 3-3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IStock() {
  return (
    <svg viewBox="0 0 24 24" className="ico" fill="none" aria-hidden="true">
      <path
        d="M21 8l-9 5-9-5 9-5 9 5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M3 8v10l9 5 9-5V8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M12 13v10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
function IPdf() {
  return (
    <svg viewBox="0 0 24 24" className="ico" fill="none" aria-hidden="true">
      <path
        d="M7 3h7l3 3v15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M14 3v4h4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M8 12h8M8 15h8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
function IVoice() {
  return (
    <svg viewBox="0 0 24 24" className="ico" fill="none" aria-hidden="true">
      <path
        d="M12 14a3 3 0 0 0 3-3V7a3 3 0 0 0-6 0v4a3 3 0 0 0 3 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M19 11a7 7 0 0 1-14 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 18v3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
function IWarn() {
  return (
    <svg viewBox="0 0 24 24" className="ico" fill="none" aria-hidden="true">
      <path
        d="M12 3l10 18H2L12 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M12 9v5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="12" cy="17" r="1" fill="currentColor" />
    </svg>
  );
}
function ICost() {
  return (
    <svg viewBox="0 0 24 24" className="ico" fill="none" aria-hidden="true">
      <path
        d="M12 2v20"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M16 6.5c0-1.7-1.8-3-4-3s-4 1.3-4 3 1.2 2.7 4 3 4 1.3 4 3-1.8 3-4 3-4-1.3-4-3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="card surface">
      <div className="card-top">
        {icon}
        <h3 className="card-title">{title}</h3>
      </div>
      <p className="card-desc">{desc}</p>
    </div>
  );
}

function Step({
  n,
  title,
  desc,
}: {
  n: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="step surface">
      <div className="step-badge">{n}</div>
      <div className="step-body">
        <div className="step-title">{title}</div>
        <div className="step-desc">{desc}</div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      {/* ===== HERO (más cerca del navbar + más aire visual) ===== */}
      <section className="hero">
        <div className="container-mysyn hero-inner">
          <RevealOnScroll>
            <div className="hero-center">
              <div className="mysyn-logo-lockup" aria-label="MYSYN">
                <Image
                  src="/22.png"
                  alt="MYSYN ciclo"
                  width={520}
                  height={520}
                  priority
                  className="mysyn-logo-ring"
                />
                <Image
                  src="/111.png"
                  alt="MYSYN"
                  width={260}
                  height={260}
                  priority
                  className="mysyn-logo-core"
                />
              </div>

              <p className="kicker">
                GESTIÓN BROMATOLÓGICA · TRAZABILIDAD · STOCK · PRODUCCIÓN
              </p>

              <h1 className="h1">
                Todo bajo control, <span>sin planillas</span>.
              </h1>

              <p className="lead">
                Registrá compras y producción por receta, controlá freezer y calidad, y generá
                los PDFs que te piden.
              </p>

              <div className="cta-row">
                <a
                  className="btn btn-primary"
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  Pedir demo
                </a>
                <a className="btn btn-ghost" href="#como-funciona">
                  Cómo funciona
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== Beneficios (cards redondas, poco texto, simétrico) ===== */}
      <section className="section" id="beneficios">
        <div className="container-mysyn">
          <RevealOnScroll>
            <h2 className="h2 center">Lo que te soluciona</h2>
            <p className="p center sub">
              Lo importante, rápido. Lo demás lo ves en la demo.
            </p>
          </RevealOnScroll>

          <div className="grid-3 mt">
            <RevealOnScroll>
              <FeatureCard
                icon={
                  <Icon>
                    <ITrace />
                  </Icon>
                }
                title="Trazabilidad real"
                desc="De la harina al producto vendido, por lote."
              />
            </RevealOnScroll>

            <RevealOnScroll delay={90}>
              <FeatureCard
                icon={
                  <Icon>
                    <IStock />
                  </Icon>
                }
                title="Stock en vivo"
                desc="Descuento automático por receta y por gramos."
              />
            </RevealOnScroll>

            <RevealOnScroll delay={180}>
              <FeatureCard
                icon={
                  <Icon>
                    <IPdf />
                  </Icon>
                }
                title="Papeles listos"
                desc="POES, temperaturas y planillas: en PDF."
              />
            </RevealOnScroll>
          </div>

          <div className="grid-3 mt">
            <RevealOnScroll>
              <FeatureCard
                icon={
                  <Icon>
                    <IVoice />
                  </Icon>
                }
                title="IA por voz"
                desc="Cargá producción sin tocar la pantalla."
              />
            </RevealOnScroll>

            <RevealOnScroll delay={90}>
              <FeatureCard
                icon={
                  <Icon>
                    <IWarn />
                  </Icon>
                }
                title="Alertas útiles"
                desc="Vencimientos, freezer y stock crítico."
              />
            </RevealOnScroll>

            <RevealOnScroll delay={180}>
              <FeatureCard
                icon={
                  <Icon>
                    <ICost />
                  </Icon>
                }
                title="Costo al centavo"
                desc="Costo real según insumos usados en esa tanda."
              />
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ===== Cómo funciona (sin “corte”, fondo suave) ===== */}
      <section className="section section-soft" id="como-funciona">
        <div className="container-mysyn">
          <RevealOnScroll>
            <h2 className="h2 center">Cómo funciona</h2>
            <p className="p center sub">
              Registrás el flujo real y MYSYN conecta todo solo.
            </p>
          </RevealOnScroll>

          <div className="stepper">
            <div className="stepper-line" aria-hidden="true" />
            <RevealOnScroll>
              <Step n="1" title="Comprás" desc="Lote + vencimiento + costo." />
            </RevealOnScroll>
            <RevealOnScroll delay={70}>
              <Step n="2" title="Producís" desc="Receta → FEFO + P-XXXX." />
            </RevealOnScroll>
            <RevealOnScroll delay={140}>
              <Step n="3" title="Freezer" desc="Sobró → L-XXXX vinculado." />
            </RevealOnScroll>
            <RevealOnScroll delay={210}>
              <Step n="4" title="Terminás" desc="Descuenta exacto en gramos." />
            </RevealOnScroll>
            <RevealOnScroll delay={280}>
              <Step n="5" title="Calidad" desc="Pesos + etiqueta + control." />
            </RevealOnScroll>
            <RevealOnScroll delay={350}>
              <Step n="6" title="Vendés" desc="Baja stock y ajusta desarme." />
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ===== IA por voz (bloque corto) ===== */}
      <section className="section" id="ia">
        <div className="container-mysyn">
          <RevealOnScroll>
            <div className="cta surface cta--single">
              <div className="cta-left">
                <h2 className="h2">IA por voz en producción</h2>
                <p className="p">
                  Ideal cuando estás con las manos ocupadas: dictás y listo.
                </p>
              </div>
              <div className="cta-right">
                <a
                  className="btn btn-outline w-full"
                  href="#cta"
                >
                  Quiero verlo
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== CTA final ===== */}
      <section className="section" id="cta">
        <div className="container-mysyn">
          <RevealOnScroll>
            <div className="cta surface">
              <div className="cta-left">
                <h2 className="h2">¿Te muestro una demo con tu negocio?</h2>
                <p className="p">
                  Me decís qué producís y qué planillas te piden, y lo adaptamos a tu flujo.
                </p>
              </div>
              <div className="cta-right">
                <a
                  className="btn btn-primary w-full"
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  Hablar por WhatsApp
                </a>
                <a className="btn btn-outline w-full" href="#beneficios">
                  Ver beneficios
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
}
