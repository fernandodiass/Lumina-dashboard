import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { useFinanceData } from "../../hooks/useFinanceData";

// Cores vibrantes para combinar com o tema roxo
const COLORS = ['#a855f7', '#ec4899', '#6366f1', '#06b6d4', '#14b8a6'];

export function CategoryChart() {
  const { categorias } = useFinanceData();

  return (
    <div className="bg-slate-900/50 p-6 rounded-[24px] border border-slate-800 h-full">
      <h3 className="text-white font-semibold mb-2 text-lg">Distribuição de Gastos</h3>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={categorias}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={90}
              paddingAngle={10}
              dataKey="value"
            >
              {categorias.map((entry: any, index: number) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
              ))}
            </Pie>
            
            {/* CONFIGURAÇÃO DO MOUSE OVER (Letra Branca) */}
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#0f172a', 
                border: '1px solid #334155', 
                borderRadius: '12px',
                color: '#ffffff' 
              }}
              itemStyle={{ color: '#ffffff' }} // Força a cor branca no texto do item
            />
            
            {/* CONFIGURAÇÃO DA LEGENDA (Letra Branca) */}
            <Legend 
              verticalAlign="bottom" 
              height={36}
              formatter={(value) => (
                <span className="text-white font-medium ml-2">{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}