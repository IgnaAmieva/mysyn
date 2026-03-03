import Link from "next/link";
import RevealOnScroll from "../../components/RevealOnScroll";

const WHATSAPP_URL = "https://wa.me/549XXXXXXXXXX";

// ---------- Icons ----------
function ITrace() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
      <path d="M6 7h12M6 12h9M6 17h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
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
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
      <path d="M21 8l-9 5-9-5 9-5 9 5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M3 8v10l9 5 9-5V8" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}
function IRecipe() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
      <path d="M7 3h10v18H7z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9 7h6M9 11h6M9 15h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
function IServe() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
      <path d="M4 19h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M6 19c0-5 3-9 6-9s6 4 6 9" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M12 7v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
function ISearch() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.8" />
      <path d="M20 20l-3.2-3.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
function ICalendar() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
      <path d="M7 3v3M17 3v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M4 7h16v14H4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M8 11h3M13 11h3M8 15h3M13 15h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
function IPdf() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
      <path
        d="M7 3h7l3 3v15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M14 3v4h4" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M8 12h8M8 15h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
function IWarn() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
      <path d="M12 3l10 18H2L12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M12 9v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="17" r="1" fill="currentColor" />
    </svg>
  );
}
function ICheck() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ---------- UI helpers ----------
function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <RevealOnScroll>
      <h2 className="h2 center">{title}</h2>
      {subtitle ? <p className="p center sub">{subtitle}</p> : null}
    </RevealOnScroll>
  );
}

function IconCircle({ children }: { children: React.ReactNode }) {
  return <span className="hosp-ico">{children}</span>;
}

function FlowCard({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="hosp-flow-card">
      <IconCircle>{icon}</IconCircle>
      <div className="hosp-flow-title">{title}</div>
    </div>
  );
}

function ModuleCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="hosp-module surface">
      <div className="hosp-module-icon">
        <IconCircle>{icon}</IconCircle>
      </div>
      <div className="hosp-module-title">{title}</div>
      <div className="hosp-module-desc">{desc}</div>
    </div>
  );
}

export default function HospitalesPage() {
  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container-mysyn">
          <div className="breadcrumb">
            <Link href="/">Inicio</Link> <span aria-hidden="true">/</span> <span>Hospitales</span>
          </div>

          <RevealOnScroll>
            <h1 className="h1 center">
              Hospitales: trazabilidad y control <span>por turnos</span>
            </h1>

            <p className="lead">
              Insumo (lote) → receta → producción → entrega. Todo queda trazado por un código único para auditorías e incidentes.
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

      {/* ESQUEMA (ARREGLADO) */}
      <section className="section">
        <div className="container-mysyn">
          <SectionTitle
            title="Cómo se conecta todo"
            subtitle="Un flujo simple para trazabilidad total en cocina y entrega."
          />

          <RevealOnScroll>
            <div className="hosp-flow surface">
              <div className="hosp-flow-grid">
                <FlowCard icon={<IStock />} title="Insumo (lote)" />
                <FlowCard icon={<IRecipe />} title="Receta" />
                <FlowCard icon={<ITrace />} title="Producción" />
                <FlowCard icon={<IServe />} title="Entrega" />
                <FlowCard icon={<ISearch />} title="Auditoría" />
              </div>

              <p className="p center sub" style={{ marginTop: "1rem" }}>
                Todo queda conectado por un <b>código de producción</b> para reconstrucción rápida ante incidentes.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* PROBLEMA / ENTREGA (MISMA ALTURA) */}
      <section className="section">
        <div className="container-mysyn">
          <div className="hosp-two-col">
            <RevealOnScroll>
              <div className="surface surface-pad hosp-equal-card">
                <h2 className="h2 center">Qué problema resuelve</h2>

                <ul className="icon-list icon-list-left" style={{ marginTop: "1rem" }}>
                  <li className="icon-li">
                    <span className="bullet-ico" aria-hidden="true"><IWarn /></span>
                    <span>Reconstruir rápido qué se usó ante una intoxicación o incidente.</span>
                  </li>
                  <li className="icon-li">
                    <span className="bullet-ico" aria-hidden="true"><IWarn /></span>
                    <span>Saber qué lotes, quién preparó, en qué fecha/turno y quién entregó.</span>
                  </li>
                  <li className="icon-li">
                    <span className="bullet-ico" aria-hidden="true"><IWarn /></span>
                    <span>Generar planillas por turno sin llenar papeles a mano.</span>
                  </li>
                </ul>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={90}>
              <div className="surface surface-pad hosp-equal-card">
                <h2 className="h2 center">Qué entrega la app</h2>

                <ul className="icon-list icon-list-left" style={{ marginTop: "1rem" }}>
                  <li className="icon-li">
                    <span className="bullet-ico" aria-hidden="true"><ICheck /></span>
                    <span><b>Código de producción</b> para consultar toda la trazabilidad.</span>
                  </li>
                  <li className="icon-li">
                    <span className="bullet-ico" aria-hidden="true"><IPdf /></span>
                    <span><b>Planilla de producción</b> + <b>planilla de entrega</b> por turno.</span>
                  </li>
                  <li className="icon-li">
                    <span className="bullet-ico" aria-hidden="true"><ICalendar /></span>
                    <span>Responsables automáticos según calendario/turnos.</span>
                  </li>
                </ul>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* MÓDULOS (ARREGLADO) */}
      <section className="section" id="modulos">
        <div className="container-mysyn">
          <SectionTitle
            title="Módulos principales"
            subtitle="Cada rol ve solo lo necesario: nutrición, almacén, cocina, reparto y auditoría."
          />

          <div className="hosp-module-grid mt">
            <RevealOnScroll>
              <ModuleCard
                icon={<ICalendar />}
                title="Equipo, roles y turnos"
                desc="Permisos por módulo + calendario semanal. Planillas toman responsable del turno."
              />
            </RevealOnScroll>
            <RevealOnScroll delay={60}>
              <ModuleCard
                icon={<IRecipe />}
                title="Dietas + recetas"
                desc="Dietas con color. Recetas por porción (gramos) + pasos."
              />
            </RevealOnScroll>
            <RevealOnScroll delay={120}>
              <ModuleCard
                icon={<IStock />}
                title="Ingreso de insumos"
                desc="Lote, vencimiento, proveedor, fabricante, cantidad (precio opcional)."
              />
            </RevealOnScroll>
            <RevealOnScroll delay={180}>
              <ModuleCard
                icon={<ITrace />}
                title="Producción"
                desc="Genera código, descuenta stock y guarda lotes usados por ingrediente."
              />
            </RevealOnScroll>
            <RevealOnScroll delay={240}>
              <ModuleCard
                icon={<IServe />}
                title="Entrega"
                desc="Checklist por cama/dieta/color + planilla final del turno."
              />
            </RevealOnScroll>
            <RevealOnScroll delay={300}>
              <ModuleCard
                icon={<ISearch />}
                title="Búsqueda por código"
                desc="Consulta ingredientes, lotes, responsables y planillas asociadas."
              />
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" id="cta">
        <div className="container-mysyn">
          <RevealOnScroll>
            <div className="cta surface">
              <div className="cta-left" style={{ textAlign: "center" }}>
                <h2 className="h2">¿Te muestro una demo con tu hospital?</h2>
                <p className="p center sub">
                  Lo armamos con tus dietas, turnos y un ejemplo real de producción + entrega.
                </p>
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