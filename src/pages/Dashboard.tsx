import { Sidebar } from "../components/layout/Sidebar";
import { SummaryCards } from "../components/layout/SummaryCards";
import { TransactionTable } from "../components/layout/TransactionTable";

// IMPORTANDO OS COMPONENTES DE GRÁFICOS
import { CategoryChart } from "../components/charts/CategoryChart";
import { ComparisonChart } from "../components/charts/ComparisonChart";
import { FinanceChart } from "../components/charts/FinanceChart";

export function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#020617] text-slate-100 overflow-x-hidden">
      {/* A Sidebar agora inclui internamente a Topbar para mobile.
          Ela gerencia o estado de abrir/fechar sozinha.
      */}
      <Sidebar />
      
      {/* CONTEÚDO PRINCIPAL (main):
          - lg:ml-64: No desktop, reserva o espaço para a sidebar fixa.
          - pt-24: No mobile, dá espaço para a Topbar fixa (h-16 + respiro).
          - lg:pt-10: No desktop, volta para um padding padrão.
          - w-full: Garante que o conteúdo ocupe a largura disponível sem vazar.
      */}
      <main className="flex-1 w-full lg:ml-64 p-4 md:p-8 pt-24 lg:pt-10 transition-all duration-300">
        
        {/* CABEÇALHO DA PÁGINA */}
        <header className="mb-8 max-w-[1400px] mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Estatísticas Financeiras
          </h1>
          <p className="text-slate-500 mt-1 text-sm md:text-base">
            Visualize os indicadores financeiros para tomada de decisões.
          </p>
        </header>

        {/* CONTAINER DOS COMPONENTES (ORGANIZADOS EM COLUNA) */}
        <div className="flex flex-col gap-6 md:gap-8 max-w-[1400px] mx-auto">
          
          {/* CARDS DE RESUMO (Geralmente 1 a 4 colunas dependendo do componente interno) */}
          <section className="w-full">
  <SummaryCards />
</section>

          {/* GRÁFICOS PRINCIPAIS: 
              - 1 coluna no mobile e tablet (md)
              - 2 colunas no desktop (lg)
          */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-slate-900/40 p-4 md:p-6 rounded-2xl border border-slate-800/60 backdrop-blur-sm">
              <FinanceChart />
            </div>
            <div className="bg-slate-900/40 p-4 md:p-6 rounded-2xl border border-slate-800/60 backdrop-blur-sm">
              <ComparisonChart />
            </div>
          </section>

          {/* RODAPÉ: GRÁFICO DE CATEGORIA + TABELA
              - lg:col-span-1 para a rosca (esquerda)
              - lg:col-span-2 para a tabela (direita)
          */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            
            <div className="lg:col-span-1 bg-slate-900/40 p-4 md:p-6 rounded-2xl border border-slate-800/60">
              <h3 className="text-lg font-semibold mb-4 text-white">Despesas por Categoria</h3>
              <CategoryChart />
            </div>
            
            {/* TABELA COM SCROLL HORIZONTAL PARA MOBILE */}
            <div className="lg:col-span-2 bg-slate-900/40 rounded-2xl border border-slate-800/60 overflow-hidden">
              <div className="p-4 md:p-6">
                <h3 className="text-lg font-semibold mb-4 text-white">Transações Recentes</h3>
                <div className="overflow-x-auto w-full">
                  <TransactionTable />
                </div>
              </div>
            </div>
            
          </section>
        </div>
      </main>
    </div>
  );
}