💹 Financeiro DashboardUma solução moderna de Business Intelligence para finanças pessoais ou empresariais. Esta aplicação transforma dados brutos em insights visuais através de gráficos interativos e uma interface limpa, focada em performance e usabilidade.🏗️ Arquitetura do ProjetoA estrutura segue o padrão de Feature-Based Folder Structure, facilitando a escalabilidade e o isolamento de componentes:Bashsrc/
├── components/
│   ├── charts/      # Visualizações: Category, Comparison e FinanceChart
│   ├── layout/      # Estrutura: Sidebar, SummaryCards e TransactionTable
│   └── ui/          # Design System: Componentes base (Botões, Inputs)
├── hooks/           # Business Logic: useFinanceData.ts (Custom Hooks)
├── pages/           # Views: Dashboard principal e rotas
├── data/            # Persistência: Mock de dados via db.json
├── lib/             # Configurações de bibliotecas externas
└── styles/          # Core: Estilização global e Tailwind Config
🛠️ Stack TecnológicaCamadaFerramentaDescriçãoFrontendReactBiblioteca core para interfaces reativas.TipagemTypeScriptGarantia de integridade de dados e DX (Developer Experience).Build ToolViteFerramenta de build de próxima geração com HMR instantâneo.CSSTailwindFramework utility-first para estilização rápida e responsiva.MockingJSON ServerSimulação de API REST para persistência local.🚀 Como ExecutarPré-requisitosNode.js (v18+)Gerenciador de pacotes (NPM, Yarn ou PNPM)Passo a PassoClone o repositório:Bashgit clone https://github.com/seu-usuario/financeiro-dashboard.git
cd financeiro-dashboard
Instale as dependências:Bashnpm install
Suba o Mock de Dados (Opcional/Se aplicável):Bashnpx json-server --watch src/data/db.json --port 3001
Inicie o servidor de desenvolvimento:Bashnpm run dev
📈 Funcionalidades ChaveDashboard Executivo: Visão holística de receitas e despesas.Análise de Categorias: Gráficos detalhando para onde o capital está sendo direcionado.Gestão de Fluxo: Tabela de transações com histórico completo.Responsividade Total: Interface adaptável para Mobile, Tablet e Desktop.Custom Hooks: Abstração de toda a lógica de fetch e estados financeiros.📄 LicençaEste projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.ContatoDesenvolvido por Fernando Dias