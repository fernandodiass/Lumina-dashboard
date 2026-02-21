import { useEffect, useState } from "react";
import dashboardData from "../data/db.json";

export const useFinanceData = () => {
  const [data, setData] = useState(dashboardData);

  useEffect(() => {
    setData(dashboardData);
  }, []);

  // Função auxiliar para transformar "R$ 25.400,00" em um número (25400)
  const parseCurrency = (value: string) => {
    return Number(value.replace(/\D/g, "")) / 100;
  };

  // Função para formatar o número de volta para Real
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  const valorReceitas = parseCurrency(data?.resumo?.receitas || "0");
  const valorDespesas = parseCurrency(data?.resumo?.despesas || "0");
  
  // A LÓGICA: Receitas - Despesas
  const calculoSaldo = valorReceitas - valorDespesas;

  return {
    saldoTotal: formatCurrency(calculoSaldo), // Saldo calculado automaticamente
    receitas: data?.resumo?.receitas || "R$ 0,00",
    despesas: data?.resumo?.despesas || "R$ 0,00",
    grafico: data?.grafico || [],
    categorias: data?.categorias || [],
    comparativoMensal: data?.comparativoMensal || [],
    transacoes: data?.transacoes || []
  };
};