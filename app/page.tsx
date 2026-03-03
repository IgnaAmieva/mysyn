"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";
import RevealOnScroll from "../components/RevealOnScroll";

const WHATSAPP_URL = "https://wa.me/549XXXXXXXXXX"; // poné tu número

function useCoinTilt() {
  return useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rx = ((y / rect.height) - 0.5) * -10;
    const ry = ((x / rect.width) - 0.5) * 12;

    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`;
  }, []);
}
function resetTilt(e: React.MouseEvent<HTMLAnchorElement>) {
  e.currentTarget.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
}

/* ===== Icons ===== */
function IHospitalBig() {
  return (
    <svg viewBox="0 0 24 24" className="coin-ico" fill="none" aria-hidden="true">
      <path d="M4 20V9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v11" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round"/>
      <path d="M9 20v-6h6v6" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round"/>
      <path d="M12 9v4M10 11h4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"/>
    </svg>
  );
}
function IInstitucionBig() {
  return (
    <svg viewBox="0 0 24 24" className="coin-ico" fill="none" aria-hidden="true">
      <path d="M3 10l9-6 9 6" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round"/>
      <path d="M5 10v10h14V10" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round"/>
      <path d="M9 20v-7h6v7" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round"/>
    </svg>
  );
}
function INegocioBig() {
  return (
    <svg viewBox="0 0 24 24" className="coin-ico" fill="none" aria-hidden="true">
      <path d="M4 10V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round"/>
      <path d="M3 10h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10Z" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round"/>
      <path d="M9 14h6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"/>
    </svg>
  );
}

/* Small icons */
function ILink() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <path d="M10 13a5 5 0 0 1 0-7l1-1a5 5 0 0 1 7 7l-1 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M14 11a5 5 0 0 1 0 7l-1 1a5 5 0 0 1-7-7l1-1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}
function IBox() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <path d="M21 8l-9 5-9-5 9-5 9 5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M3 8v10l9 5 9-5V8" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
    </svg>
  );
}
function IPdf() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <path d="M7 3h7l3 3v15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M14 3v4h4" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M8 12h8M8 15h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
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
        <span className="icon-pill">{icon}</span>
        <h3 className="card-title">{title}</h3>
      </div>
      <p className="card-desc">{desc}</p>
    </div>
  );
}

function Coin({
  href,
  title,
  icon,
  caption,
  delay,
}: {
  href: string;
  title: string;
  icon: React.ReactNode;
  caption: string;
  delay?: number;
}) {
  const tilt = useCoinTilt();

  return (
    <RevealOnScroll delay={delay}>
      <div className="segment-wrap">
        <Link
          href={href}
          className="coin"
          onMouseMove={tilt}
          onMouseLeave={resetTilt}
          onFocus={(e) =>
            (e.currentTarget.style.transform =
              "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(-2px)")
          }
          onBlur={(e) =>
            (e.currentTarget.style.transform =
              "perspective(900px) rotateX(0deg) rotateY(0deg)")
          }
        >
          <div className="coin-inner">
            {icon}
            <div className="coin-title">{title}</div>
          </div>
        </Link>
        <div className="coin-caption">{caption}</div>
      </div>
    </RevealOnScroll>
  );
}

export default function Home() {
  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="container-mysyn hero-inner">
          <RevealOnScroll>
            <div className="hero-center">
              <div className="hero-stack">
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

                <div className="hero-copy">
                  <p className="kicker">TRAZABILIDAD · STOCK · PRODUCCIÓN · DOCUMENTACIÓN</p>

                  <h1 className="h1">
                    Control total de alimentos, <span>sin planillas</span>.
                  </h1>

                  {/* ✅ centrado */}
                  <p className="lead center">
                    MYSYN registra compras y producción por receta, controla stock (FEFO) y genera
                    documentación lista para auditorías.
                  </p>
                </div>

                <div className="cta-row">
                  <a className="btn btn-primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                    Pedir demo
                  </a>
                  <a className="btn btn-ghost" href="#segmentos">
                    Ver por rubro
                  </a>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== SEGMENTOS ===== */}
      <section className="section" id="segmentos">
        <div className="container-mysyn">
          <RevealOnScroll>
            <h2 className="h2 center">Elegí tu rubro</h2>
          </RevealOnScroll>

          <div className="grid-3 mt">
            <Coin
              href="/hospitales"
              title="Hospitales"
              icon={<IHospitalBig />}
              caption="Dietas, porciones, cadena fría y trazabilidad por lote."
            />
            <Coin
              href="/instituciones"
              title="Instituciones"
              icon={<IInstitucionBig />}
              caption="Comedores, escuelas, clubes: stock simple, vencimientos y control."
              delay={90}
            />
            <Coin
              href="/negocios"
              title="Negocios"
              icon={<INegocioBig />}
              caption="Panaderías, rotiserías, fábricas: recetas, costos y lotes."
              delay={180}
            />
          </div>
        </div>
      </section>

      {/* ===== Qué hace ===== */}
      <section className="section" id="beneficios">
        <div className="container-mysyn">
          <RevealOnScroll>
            <h2 className="h2 center">Qué hace MYSYN</h2>
          </RevealOnScroll>

          <div className="grid-3 mt">
            <RevealOnScroll>
              <FeatureCard
                icon={<ILink />}
                title="Trazabilidad real"
                desc="Insumo → producción → producto. Todo queda vinculado."
              />
            </RevealOnScroll>

            <RevealOnScroll delay={90}>
              <FeatureCard
                icon={<IBox />}
                title="Stock en vivo"
                desc="Consumo por receta + FEFO + vencimientos."
              />
            </RevealOnScroll>

            <RevealOnScroll delay={180}>
              <FeatureCard
                icon={<IPdf />}
                title="PDFs listos"
                desc="Planillas y documentos en un clic."
              />
            </RevealOnScroll>
          </div>

          <RevealOnScroll>
            <div className="cta surface" style={{ marginTop: "1.2rem" }}>
              <div className="cta-left" style={{ textAlign: "center" }}>
                <h2 className="h2">¿Te muestro una demo con tu caso?</h2>
                {/* ✅ centrado */}
                <p className="p center">
                  Lo armamos con tu flujo real y 2–3 ejemplos concretos.
                </p>
              </div>
              <div className="cta-right">
                <a className="btn btn-primary w-full" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  Hablar por WhatsApp
                </a>
                <a className="btn btn-outline w-full" href="#segmentos">
                  Ver rubros
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
}