import {
  ArrowDownCircle,
  ArrowUpCircle,
  BarChart3,
  LayoutDashboard,
  LogOut,
  Settings,
  Wallet
} from "lucide-react";

const menuItems = [
  { icon: <LayoutDashboard size={20} />, label: "Dashboard", active: true },
  { icon: <Wallet size={20} />, label: "Contas e Cartões", active: false },
  { icon: <ArrowUpCircle size={20} />, label: "Receitas", active: false },
  { icon: <ArrowDownCircle size={20} />, label: "Despesas", active: false },
  { icon: <BarChart3 size={20} />, label: "Relatórios", active: false },
];

export function Sidebar() {
  return (
    <aside className="w-64 bg-[#020617] border-r border-slate-800 h-screen fixed left-0 top-0 flex flex-col p-6">
      <div className="flex items-center gap-3 mb-10 px-2">
        <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
          <Wallet className="text-white" size={18} />
        </div>
        <span className="text-xl font-bold text-white tracking-tight">Lumina Finance</span>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              item.active 
                ? "bg-violet-600/10 text-violet-400 border border-violet-600/20" 
                : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
            }`}
          >
            {item.icon}
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="pt-6 border-t border-slate-800 space-y-2">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-slate-800/50 hover:text-slate-200 transition-all">
          <Settings size={20} />
          <span className="font-medium">Definições</span>
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-rose-400 hover:bg-rose-400/10 transition-all">
          <LogOut size={20} />
          <span className="font-medium">Sair</span>
        </button>
      </div>
    </aside>
  );
}