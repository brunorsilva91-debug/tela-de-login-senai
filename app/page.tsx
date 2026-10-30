export default function Home() {
  return (
    <main>
      <section class="hero">
        <h1>Construa Aplicações <span>Incríveis</span> com Next.js</h1>
        <p>
          Sua estrutura está totalmente corrigida, com tratamento de erros de tipo 
          TypeScript resolvido, rotas configuradas e um design Dark Mode integrado.
        </p>
        <a href="#recursos" class="btn-primary">Explorar Recursos</a>
      </section>

      <section id="recursos" class="grid">
        <div class="card">
          <h3>🚀 Desempenho Nativo</h3>
          <p>Renderização rápida no lado do servidor e otimização estática automática para a melhor experiência do usuário.</p>
        </div>
        <div class="card">
          <h3>🛠️ TypeScript Prontinho</h3>
          <p>Tipagem estática estrita configurada em todos os arquivos essenciais do layout às páginas de conteúdo.</p>
        </div>
        <div class="card">
          <h3>🎨 Design Limpo</h3>
          <p>Variáveis CSS modulares no padrão premium dark, desacopladas do código JSX para manutenção facilitada.</p>
        </div>
      </section>
    </main>
  );
}
