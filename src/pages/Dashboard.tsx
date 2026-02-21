import { Sidebar } from "../components/layout/Sidebar";
import { SummaryCards } from "../components/layout/SummaryCards";
import { TransactionTable } from "../components/layout/TransactionTable";

// IMPORTANDO OS NOVOS GRÁFICOS (RECHARTS)
import { CategoryChart } from "../components/charts/CategoryChart";
import { ComparisonChart } from "../components/charts/ComparisonChart";
import { FinanceChart } from "../components/charts/FinanceChart";

export function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#020617] text-slate-100">
      <Sidebar />
      
      <main className="flex-1 ml-64 p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-white tracking-tight">Estatísticas</h1>
          <p className="text-slate-500 mt-1">Dados atualizados em tempo real.</p>
        </header>

        <div className="flex flex-col gap-8">
          {/* CARDS SUPERIORES */}
          <SummaryCards />

          {/* GRÁFICOS LADO A LADO */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <FinanceChart />      {/* O gráfico de área (Receita x Despesa) */}
            <ComparisonChart />   {/* O gráfico de barras roxas */}
          </div>

          {/* RODAPÉ COM ROSCA E TABELA */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <CategoryChart />   {/* O gráfico de rosca */}
            </div>
            <div className="lg:col-span-2">
              <TransactionTable /> {/* Sua tabela de transações */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}