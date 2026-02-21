# 💹 LUMINA DASHBOARD FINANCEIRO

Uma solução moderna de Business Intelligence para finanças pessoais ou empresariais.  
Esta aplicação transforma dados brutos em insights visuais através de gráficos interativos e uma interface limpa, focada em performance e usabilidade.

🏗️ ARQUITETURA DO PROJETO

A estrutura segue o padrão **Feature-Based Folder Structure**, facilitando a escalabilidade e o isolamento de componentes:

```bash
src/
├── components/
│   ├── charts/      # Visualizações: Category, Comparison e FinanceChart
│   ├── layout/      # Estrutura: Sidebar, SummaryCards e TransactionTable
│   └── ui/          # Design System: Componentes base (Botões, Inputs)
├── hooks/           # Business Logic: useFinanceData.ts (Custom Hooks)
├── pages/           # Views: Dashboard principal e rotas
├── data/            # Persistência: Mock de dados via db.json
├── lib/             # Configurações de bibliotecas externas
└── styles/          # Core: Estilização global e Tailwind Config

🛠️ STACK TECNOLÓGICA

| Camada     | Ferramenta  | Descrição                                                     |
| ---------- | ----------- | ------------------------------------------------------------- |
| Frontend   | React       | Biblioteca core para interfaces reativas.                     |
| Tipagem    | TypeScript  | Garantia de integridade de dados e DX (Developer Experience). |
| Build Tool | Vite        | Ferramenta de build de próxima geração com HMR instantâneo.   |
| CSS        | Tailwind    | Framework utility-first para estilização rápida e responsiva. |
| Mocking    | JSON Server | Simulação de API REST para persistência local.                |

🚀 COMO EXECUTAR

Pré-requisitos

- Node.js (v18+)
- Gerenciador de pacotes (NPM, Yarn ou PNPM)

Passo a passo

1. Clone o repositório:
git clone https://github.com/seu-usuario/financeiro-dashboard.git
cd financeiro-dashboard

2. Instale as dependências:
npm install

3. Suba o mock de dados (opcional / se aplicável):
npx json-server --watch src/data/db.json --port 3001

4. Inicie o servidor de desenvolvimento:
npm run dev

📈 FUNCIONALIDADES

Dashboard Executivo: visão holística de receitas e despesas.

Análise de Categorias: gráficos detalhando para onde o capital está sendo direcionado.

Gestão de Fluxo: tabela de transações com histórico completo.

Responsividade Total: interface adaptável para Mobile, Tablet e Desktop.

Custom Hooks: abstração de toda a lógica de fetch e estados financeiros.

📄 LICENÇA

Este projeto está sob a licença MIT.
Veja o arquivo LICENSE para mais detalhes.

📬 CONTATO

Desenvolvido por Fernando Dias