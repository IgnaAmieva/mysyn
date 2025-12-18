// components/Footer.tsx
export default function Footer() {
  return (
    <footer style={{ padding: "2rem 0", color: "rgba(14,31,49,.6)" }}>
      <div className="container-mysyn" style={{ display: "flex", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
        <p style={{ margin: 0 }}>© {new Date().getFullYear()} MYSYN.</p>
        <p style={{ margin: 0 }}>Gestión sincronizada · producción y stock</p>
      </div>
    </footer>
  );
}
