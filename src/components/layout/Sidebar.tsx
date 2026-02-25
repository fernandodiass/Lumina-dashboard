import {
  FileText,
  LayoutDashboard,
  LogOut,
  Menu,
  Settings,
  TrendingUp,
  User,
  Wallet,
  X
} from 'lucide-react';
import { useState } from 'react';

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* --- TOPBAR MOBILE (Fica fixa no topo apenas em telas pequenas) --- */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-[#0f172a] border-b border-slate-800 flex items-center justify-between px-4 z-[50]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <TrendingUp size={18} className="text-white" />
          </div>
          <span className="text-xl font-bold text-white tracking-tight">Lumina</span>
        </div>
        
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="p-2 text-slate-400 hover:text-white transition-colors"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* --- OVERLAY (Escurece o fundo ao abrir no mobile) --- */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] lg:hidden" 
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* --- SIDEBAR CONTAINER --- */}
      <aside className={`
        fixed top-0 left-0 z-[60] h-full w-64 bg-[#0f172a] border-r border-slate-800 
        transition-transform duration-300 ease-in-out flex flex-col
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
      `}>
        
        {/* PARTE SUPERIOR: LOGO E MENU */}
        <div className="p-6 flex-1">
          {/* Logo (Exibida apenas no Desktop para não duplicar com a Topbar) */}
          <div className="hidden lg:flex items-center gap-3 mb-10 px-2">
            <div className="w-9 h-9 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <TrendingUp size={22} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">Lumina</h2>
          </div>
          
          <nav className="space-y-1">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 mb-4">
              Menu Principal
            </p>
            
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/10">
              <LayoutDashboard size={20} />
              <span className="font-medium">Dashboard</span>
            </a>

            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-slate-800/50 hover:text-white transition-all">
              <Wallet size={20} />
              <span className="font-medium">Transações</span>
            </a>

            {/* ITEM ADICIONADO: RELATÓRIOS */}
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-slate-800/50 hover:text-white transition-all">
              <FileText size={20} />
              <span className="font-medium">Relatórios</span>
            </a>

            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-slate-800/50 hover:text-white transition-all">
              <Settings size={20} />
              <span className="font-medium">Configurações</span>
            </a>
          </nav>
        </div>

        {/* PARTE INFERIOR: PERFIL E SAIR */}
        <div className="p-4 border-t border-slate-800 bg-[#0d1321]">
          {/* INFO USUÁRIO */}
          <div className="flex items-center gap-3 px-2 mb-4">
            <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-indigo-400">
              <User size={24} />
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="text-sm font-semibold text-white truncate">Fernando D.</span>
              <span className="text-xs text-slate-500 truncate">fernando@email.com</span>
            </div>
          </div>

          {/* BOTÃO DE LOGOUT */}
          <button className="flex items-center gap-3 w-full px-4 py-2 rounded-lg text-rose-400 hover:bg-rose-500/10 hover:text-rose-300 transition-all group">
            <LogOut size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium text-sm">Sair do Sistema</span>
          </button>
        </div>

      </aside>
    </>
  );
}