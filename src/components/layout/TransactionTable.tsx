import { useFinanceData } from "../../hooks/useFinanceData";

export function TransactionTable() {
  const { transacoes } = useFinanceData();

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-slate-800 text-slate-400 text-sm">
            <th className="py-4 px-2 font-medium">Descrição</th>
            <th className="py-4 px-2 font-medium">Categoria</th>
            <th className="py-4 px-2 font-medium text-right">Valor</th>
            <th className="py-4 px-2 font-medium text-center">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800">
          {transacoes.map((item: any) => (
            <tr key={item.id} className="group hover:bg-slate-800/50 transition-colors">
              <td className="py-4 px-2 text-slate-200 font-medium">{item.name}</td>
              <td className="py-4 px-2 text-slate-400">{item.category}</td>
              <td className="py-4 px-2 text-right text-slate-200 font-semibold">
                {item.amount}
              </td>
              <td className="py-4 px-2 text-center">
                <span className={`px-2 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                  item.status === 'concluido' 
                    ? 'bg-emerald-500/10 text-emerald-500' 
                    : 'bg-amber-500/10 text-amber-500'
                }`}>
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}