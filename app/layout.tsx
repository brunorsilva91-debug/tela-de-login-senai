import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Supabase Login",
  description: "Autenticação integrada ao Supabase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body style={{ fontFamily: "system-ui, -apple-system, sans-serif", margin: 0, backgroundColor: "#f9fafb" }}>
        {children}
      </body>
    </html>
  );
}