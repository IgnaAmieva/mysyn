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

function FlowIcon({ type }: { type: "buy" | "use" | "alert" }) {
  if (type === "buy") {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
        <path d="M21 8l-9 5-9-5 9-5 9 5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M3 8v10l9 5 9-5V8" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      </svg>
    );
  }
  if (type === "use") {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
        <path d="M8 7h8M7 11h10M9 15h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M6 3h12v18H6z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <path d="M12 3l10 18H2L12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M12 9v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="12" cy="17" r="1" fill="currentColor" />
    </svg>
  );
}

export default function InstitucionesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container-mysyn">
          <div className="breadcrumb">
            <Link href="/">Inicio</Link> <span aria-hidden="true">/</span> <span>Instituciones</span>
          </div>

          <RevealOnScroll>
            <h1 className="h1 center">
              Instituciones: stock y vencimientos <span>sin estrés</span>
            </h1>

            {/* ✅ centrado */}
            <p className="lead center">
              Comedores, escuelas, clubes: registrás lo mínimo y MYSYN mantiene ordenado el depósito.
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
              <ul className="icon-list icon-list-left">
                <Bullet>Vencimientos que se pasan por falta de control.</Bullet>
                <Bullet>Compras duplicadas por no saber stock real.</Bullet>
                <Bullet>Consumo/entrega sin registro claro.</Bullet>
                <Bullet>Planillas que nadie sostiene.</Bullet>
              </ul>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={90}>
            <div className="surface surface-pad">
              <h2 className="h2 center">Lo que hace MYSYN</h2>
              <ul className="icon-list icon-list-left">
                <Bullet>Ingreso con lote + vencimiento.</Bullet>
                <Bullet>FEFO automático.</Bullet>
                <Bullet>Consumo por receta o consumo directo.</Bullet>
                <Bullet>Alertas y reportes simples.</Bullet>
              </ul>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section">
        <div className="container-mysyn">
          <RevealOnScroll>
            <h2 className="h2 center">Cómo funciona</h2>
            <p className="p center sub">Flujo liviano, pero profesional.</p>
          </RevealOnScroll>

          <div className="flow">
            <RevealOnScroll>
              <div className="flow-step surface">
                <div className="flow-ico"><FlowIcon type="buy" /></div>
                <div className="flow-title">1) Compras</div>
                <div className="flow-desc">Cargás insumos con vencimiento.</div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={90}>
              <div className="flow-step surface">
                <div className="flow-ico"><FlowIcon type="use" /></div>
                <div className="flow-title">2) Uso</div>
                <div className="flow-desc">Descuenta stock con lógica clara.</div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={180}>
              <div className="flow-step surface">
                <div className="flow-ico"><FlowIcon type="alert" /></div>
                <div className="flow-title">3) Alertas</div>
                <div className="flow-desc">Vencimientos + stock crítico.</div>
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll>
            <div className="cta surface" style={{ marginTop: "1.2rem" }}>
              <div className="cta-left" style={{ textAlign: "center" }}>
                <h2 className="h2">¿Lo adaptamos a tu institución?</h2>
                <p className="p center">Lo vemos con tu rutina real (depósito, cocina, entrega).</p>
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