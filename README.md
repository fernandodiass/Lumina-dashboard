💹 Financial Management Dashboard

Uma plataforma robusta de análise financeira projetada para fornecer insights em tempo real sobre transações, fluxos de caixa e distribuição de categorias. O sistema foca em performance, tipagem estrita e visualização de dados modular.

🏗️ Arquitetura e Decisões Técnicas

A aplicação foi estruturada seguindo princípios de Clean Code e Componentização Atômica:

- Custom Hooks Pattern: A lógica de consumo de dados e estados complexos foi abstraída em useFinanceData.ts, separando a regra de negócio da camada de apresentação (UI).
- Modular Charts: Os componentes de visualização (CategoryChart, ComparisonChart) são independentes e alimentados via props, facilitando a manutenção e a troca de bibliotecas de gráficos (como Recharts ou Chart.js).
- Type Safety: Uso extensivo de interfaces TypeScript para garantir a integridade dos dados financeiros em todo o fluxo da aplicação, desde o db.json até os componentes de UI.
- Utility-First CSS: Implementação de um design system responsivo e performático utilizando Tailwind CSS, garantindo um bundle final reduzido.

📂 Organização do Projeto

src/
├── components/
│   ├── charts/    # Visualizações complexas de dados.
│   ├── layout/    # Componentes estruturais (Sidebar, Navbar, Shell).
│   └── ui/        # Design System (Botões, Inputs, Cards).
├── hooks/         # Lógica de negócio reutilizável e fetch de dados.
├── lib/           # Configurações de bibliotecas externas e instâncias de API.
├── pages/         # Views principais da aplicação (Dashboard).
└── data/          # Mock local para simulação de persistência de dados.

🛠️ Stack Tecnológica

Camada       Tecnologia     Motivação
Frontend     React 18+      Reatividade eficiente e ecossistema maduro.
Linguagem    TypeScript     Robustez, autocompletação e prevenção de erros em runtime.
Estilização  Tailwind CSS   Agilidade no desenvolvimento e consistência visual.
Build Tool   Vite           Hot Module Replacement (HMR) instantâneo para DX superior.
Mocks        JSON Server    Simulação de ambiente de produção para testes de integração.

🚀 Como Executar o Projeto

1. **Clonagem e Dependências:**
Bash
git clone https://github.com/fernandodiass/Lumina-dashboard.git
cd finance-dashboard
npm install

2. **Ambiente de Desenvolvimento:**
Inicie o mock server e a aplicação simultaneamente (ou em terminais separados):

Bash
# Terminal 1: Mock API
npx json-server --watch src/data/db.json --port 3001

# Terminal 2: Vite Dev Server
npm run dev

3. **Build de Produção:**

Bash
npm run build

📈 Roadmap de Evolução:

- [ ] Integração com API Real (Node.js/Python).

- [ ] Autenticação via JWT ou NextAuth.

- [ ] Exportação de relatórios em PDF/CSV.

- [ ] Modo Escuro (Dark Mode) nativo.

Desenvolvido por Fernando Dias - 2026