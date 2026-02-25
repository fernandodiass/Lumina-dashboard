import { TrendingDown, TrendingUp, Wallet } from "lucide-react";
import { useFinanceData } from "../../hooks/useFinanceData";

export function SummaryCards() {
  const { saldoTotal, receitas, despesas } = useFinanceData();

  const items = [
    { title: "Saldo Total", value: saldoTotal, icon: <Wallet className="text-violet-400" />, color: "border-t-violet-500" },
    { title: "Receitas", value: receitas, icon: <TrendingUp className="text-emerald-400" />, color: "border-t-emerald-500" },
    { title: "Despesas", value: despesas, icon: <TrendingDown className="text-rose-400" />, color: "border-t-rose-500" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {items.map((item) => (
        <div key={item.title} className={`bg-slate-900/50 p-6 rounded-3xl border-t-4 ${item.color} border-x border-b border-slate-800 shadow-xl backdrop-blur-md`}>
          <div className="flex justify-between items-center mb-4">
            <span className="text-slate-400 text-sm font-medium uppercase tracking-wider">{item.title}</span>
            {item.icon}
          </div>
          <div className="text-3xl font-bold text-white">{item.value}</div>
        </div>
      ))}
    </div>
  );
}