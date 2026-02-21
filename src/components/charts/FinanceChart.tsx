import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useFinanceData } from "../../hooks/useFinanceData";

export function FinanceChart() {
  const { grafico } = useFinanceData();

  return (
    <div className="bg-slate-900/50 p-6 rounded-[24px] border border-slate-800 shadow-2xl">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-white font-semibold text-lg">Fluxo de Caixa</h3>
        <div className="flex gap-4 text-xs">
          <div className="flex items-center gap-1.5 text-violet-400">
            <span className="w-3 h-3 rounded-full bg-violet-500"></span> Receitas
          </div>
          <div className="flex items-center gap-1.5 text-slate-500">
            <span className="w-3 h-3 rounded-full bg-slate-600"></span> Despesas
          </div>
        </div>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={grafico} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              {/* Gradiente para Receitas (Roxo) */}
              <linearGradient id="colorReceita" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
              </linearGradient>
              {/* Gradiente para Despesas (Slate/Cinza) */}
              <linearGradient id="colorDespesa" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#64748b" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#64748b" stopOpacity={0}/>
              </linearGradient>
            </defs>
            
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
            
            <XAxis 
              dataKey="date" 
              axisLine={false} 
              tickLine={false} 
              tick={{fill: '#94a3b8', fontSize: 12}} 
              dy={10}
            />
            
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{fill: '#94a3b8', fontSize: 12}} 
            />

            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#0f172a', 
                border: '1px solid #334155', 
                borderRadius: '12px',
                color: '#fff'
              }}
            />

            <Area 
              type="monotone" 
              dataKey="Receita" 
              stroke="#a855f7" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorReceita)" 
            />
            
            <Area 
              type="monotone" 
              dataKey="Despesa" 
              stroke="#64748b" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorDespesa)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}