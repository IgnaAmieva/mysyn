"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/#beneficios", label: "Beneficios" },
  { href: "/#como-funciona", label: "Cómo funciona" },
  { href: "/#ia", label: "IA por voz" },
  { href: "/#cta", label: "Pedir demo" },
];

export default function Navbar() {
  const [glass, setGlass] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setGlass(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cierro el menú si cambia el tamaño (por ejemplo pasás a desktop)
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 860) setOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className={`navbar ${glass ? "navbar--glass" : ""}`} role="banner">
      <div className="container-mysyn nav-row">
        <Link href="/" className="nav-brand" aria-label="Inicio">
          <Image
            src="/33.png"
            alt="MYSYN"
            width={120}
            height={48}
            priority
            className="nav-logo"
          />
          <span className="nav-name">MYSYN</span>
        </Link>

        <nav className="nav-links" aria-label="Navegación principal">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="nav-burger"
          aria-label="Abrir menú"
          aria-expanded={open}
          aria-controls="nav-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Siempre renderizado: se abre/cierra por CSS (mejor para que no “no aparezca”) */}
      <div
        id="nav-mobile"
        className={`nav-mobile ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        <div className="container-mysyn nav-mobile-inner">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link nav-link--mobile"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
