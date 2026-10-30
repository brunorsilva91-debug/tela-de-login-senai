import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js App Master",
  description: "Estrutura limpa, moderna e otimizada",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <div class="container">
          <header class="header">
            <div class="logo">NextApp.</div>
            <nav class="nav-links">
              <a href="/" class="active">Início</a>
              <a href="/sobre">Sobre</a>
              <a href="/contato">Contato</a>
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
