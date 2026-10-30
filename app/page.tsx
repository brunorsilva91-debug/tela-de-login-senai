export default function Home() {
  return (
    <main style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      minHeight: "100vh",
      padding: "2rem",
      textAlign: "center"
    }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "#111" }}>
        O projeto está funcionando! 🚀
      </h1>
      <p style={{ color: "#666", fontSize: "1.1rem" }}>
        O erro de compilação no arquivo <code style={{ background: "#eee", padding: "0.2rem 0.4rem", borderRadius: "4px" }}>layout.tsx</code> foi corrigido e a página inicial foi criada.
      </p>
    </main>
  );
}
