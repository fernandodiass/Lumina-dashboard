import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useFinanceData } from "../../hooks/useFinanceData";

export function ComparisonChart() {
  const { comparativoMensal } = useFinanceData();

  return (
    <div className="bg-slate-900/50 p-6 rounded-[24px] border border-slate-800 shadow-2xl">
      <h3 className="text-white font-semibold mb-6 text-lg">Faturamento Mensal</h3>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={comparativoMensal} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
            <XAxis 
              dataKey="mes" 
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
              cursor={{fill: 'rgba(248, 240, 240, 0.05)'}}
              contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '12px' }}
              itemStyle={{ color: '#a855f7' }}
            />
            <Bar 
              dataKey="Faturamento" 
              fill="#a855f7" 
              radius={[8, 8, 8, 8]} 
              barSize={40}
            >
              {comparativoMensal.map((entry: any, index: number) => (
                <Cell key={`cell-${index}`} fillOpacity={0.8 + (index * 0.05)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}