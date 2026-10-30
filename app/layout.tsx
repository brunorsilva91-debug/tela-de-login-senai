import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Supabase Login",
  description: "Sistema de autenticação com Next.js e Supabase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  style={
    fontFamily: "system-ui, -apple-system, sans-serif"
  }
  return (
    <html lang="pt-BR">
      <body style={style}>
        {children}
      </body>
    </html>
  );
}
