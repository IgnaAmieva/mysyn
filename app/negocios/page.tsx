import Link from "next/link";
import RevealOnScroll from "../../components/RevealOnScroll";

const WHATSAPP_URL = "https://wa.me/549XXXXXXXXXX";

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="icon-li">
      <span className="bullet-ico" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
          <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
      <span>{children}</span>
    </li>
  );
}

function FlowIcon({ type }: { type: "buy" | "make" | "cost" }) {
  if (type === "buy") {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
        <path d="M21 8l-9 5-9-5 9-5 9 5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M3 8v10l9 5 9-5V8" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      </svg>
    );
  }
  if (type === "make") {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
        <path d="M6 18h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M8 18V8a4 4 0 1 1 8 0v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <path d="M12 2v20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <path
        d="M16 6.5c0-1.7-1.8-3-4-3s-4 1.3-4 3 1.2 2.7 4 3 4 1.3 4 3-1.8 3-4 3-4-1.3-4-3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function NegociosPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container-mysyn">
          <div className="breadcrumb">
            <Link href="/">Inicio</Link> <span aria-hidden="true">/</span> <span>Negocios</span>
          </div>

          <RevealOnScroll>
            <h1 className="h1 center">
              Negocios: recetas y costos <span>con stock real</span>
            </h1>

            {/* ✅ centrado */}
            <p className="lead center">
              Panaderías, rotiserías, fábricas: lotes, recetas, costos por tanda y documentación.
            </p>

            <div className="cta-row">
              <a className="btn btn-primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                Pedir demo
              </a>
              <Link className="btn btn-ghost" href="/#segmentos">
                Ver otros rubros
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section">
        <div className="container-mysyn page-grid">
          <RevealOnScroll>
            <div className="surface surface-pad">
              <h2 className="h2 center">Problemas típicos</h2>

              {/* ✅ lista alineada a la izquierda dentro de la card */}
              <ul className="icon-list icon-list-left">
                <Bullet>No saber el costo real (stock mal cargado).</Bullet>
                <Bullet>Merma y vencimientos “invisibles”.</Bullet>
                <Bullet>Trazabilidad incompleta por tandas múltiples.</Bullet>
                <Bullet>Documentación desordenada ante controles.</Bullet>
              </ul>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={90}>
            <div className="surface surface-pad">
              <h2 className="h2 center">Lo que hace MYSYN</h2>

              {/* ✅ lista alineada a la izquierda dentro de la card */}
              <ul className="icon-list icon-list-left">
                <Bullet>Recetas por gramos + consumo automático.</Bullet>
                <Bullet>Stock en vivo + FEFO.</Bullet>
                <Bullet>Lotes vinculados (insumo y producción).</Bullet>
                <Bullet>Costeo real por tanda con insumos reales.</Bullet>
              </ul>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section">
        <div className="container-mysyn">
          <RevealOnScroll>
            <h2 className="h2 center">Cómo funciona</h2>
            <p className="p center sub">Producción por receta = stock real = costo real.</p>
          </RevealOnScroll>

          <div className="flow">
            <RevealOnScroll>
              <div className="flow-step surface">
                <div className="flow-ico"><FlowIcon type="buy" /></div>
                <div className="flow-title">1) Compras</div>
                <div className="flow-desc">Lote + vencimiento + costo.</div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={90}>
              <div className="flow-step surface">
                <div className="flow-ico"><FlowIcon type="make" /></div>
                <div className="flow-title">2) Producción</div>
                <div className="flow-desc">Receta → descuenta gramos exactos.</div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={180}>
              <div className="flow-step surface">
                <div className="flow-ico"><FlowIcon type="cost" /></div>
                <div className="flow-title">3) Costos</div>
                <div className="flow-desc">Costo real por tanda + trazabilidad.</div>
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll>
            <div className="cta surface" style={{ marginTop: "1.2rem" }}>
              <div className="cta-left" style={{ textAlign: "center" }}>
                <h2 className="h2">¿Querés ver tu costo real por tanda?</h2>
                <p className="p center">En la demo lo armamos con 2–3 recetas tuyas.</p>
              </div>
              <div className="cta-right">
                <a className="btn btn-primary w-full" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  Hablar por WhatsApp
                </a>
                <Link className="btn btn-outline w-full" href="/">
                  Volver al inicio
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
}