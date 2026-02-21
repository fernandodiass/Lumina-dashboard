💹 Lumina Dashboard

Aplicação de alta performance para gestão financeira, desenvolvida com foco em visualização de dados e experiência do usuário (UX). O sistema utiliza uma arquitetura modular que separa rigorosamente a lógica de negócio da camada de interface.

🧠 Arquitetura e Estrutura
A estrutura de diretórios foi projetada para escalabilidade e fácil manutenção:

Plaintext
src/
├── components/
│   ├── charts/    # Componentes de visualização (Category, Comparison, Finance)
│   ├── layout/    # Estrutura de navegação (Sidebar, SummaryCards, Tables)
│   └── ui/        # Átomos de interface e componentes base
├── hooks/         # Hooks customizados para gerenciamento de estado (useFinanceData)
├── pages/         # Views principais (Dashboard)
├── data/          # Camada de persistência local (db.json)
└── styles/        # Configurações globais de CSS e Tailwind

Decisões Técnicas
State Management: Uso de Custom Hooks (useFinanceData.ts) para encapsular a lógica de busca e filtragem de dados, permitindo que os componentes sejam puramente apresentacionais.

Data Fetching: Estrutura preparada para integração com APIs REST, atualmente utilizando um arquivo JSON como fonte de dados mockada.

Styling: Implementação de design responsivo via Tailwind CSS, garantindo consistência visual com baixo custo de performance.

🛠️ Tecnologias Principais
Core: React 18 + TypeScript

Build Tool: Vite (para Hot Module Replacement ultra-rápido)

Estilização: Tailwind CSS & PostCSS

Qualidade de Código: ESLint & Prettier (configuração padrão Vite)

🚀 Como Iniciar
Siga os passos abaixo para rodar o projeto localmente:

1. Clonar o repositório
Bash
git clone https://github.com/seu-usuario/financeiro-dashboard.git
2. Instalar dependências
Bash
npm install
# ou
yarn install
3. Executar o servidor de desenvolvimento
Bash
npm run dev
Nota: Se o projeto utilizar o db.json como API mock, certifique-se de rodar o json-server em uma porta separada ou conforme configurado no seu ambiente.

📋 Funcionalidades Implementadas
[x] Dashboard interativo com gráficos de categorias.

[x] Comparativo financeiro mensal/anual.

[x] Sidebar de navegação dinâmica.

[x] Cards de resumo com métricas principais (entradas/saídas).

[x] Tabela de transações detalhada.

Desenvolvido por Fernando Dias