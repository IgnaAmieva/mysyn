// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://mysyn.vercel.app"), // cambiá cuando tengas dominio real
  title: "MYSYN · Gestión bromatológica y trazabilidad",
  description:
    "ERP para producción de alimentos: trazabilidad por lotes, stock en tiempo real, recetas, control de calidad y documentación bromatológica. Con IA por voz.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: "MYSYN · Gestión bromatológica y trazabilidad",
    description:
      "Trazabilidad total, stock en vivo, recetas y documentación legal (POES, temperaturas, lotes). Integrado con IA por voz.",
    url: "/",
    siteName: "MYSYN",
    images: [
      {
        url: "/mysyn-icon.png",
        width: 800,
        height: 800,
        alt: "MYSYN",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MYSYN",
    description:
      "ERP para producción de alimentos: trazabilidad, stock en vivo y bromatología con IA por voz.",
    images: ["/mysyn-icon.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <a href="#main-content" className="skip-link">
          Saltar al contenido
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
