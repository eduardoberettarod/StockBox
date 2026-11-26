import { StockBoxResponse } from "@/database/useStockBoxDatabase";

export type Slice = { label: string; value: number; percent: number };

export function formatBRL(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export function formatCompactBRL(value: number) {
  if (value >= 1_000_000) return `R$ ${(value / 1_000_000).toFixed(1).replace(".", ",")}M`;
  if (value >= 1_000) return `R$ ${(value / 1_000).toFixed(1).replace(".", ",")}k`;
  return `R$ ${Math.round(value)}`;
}

export function formatNumber(value: number) {
  return new Intl.NumberFormat("pt-BR", { maximumFractionDigits: 2 }).format(value);
}

// Resumo do estoque: totais + os 3 produtos de maior valor e o restante agrupado em "Outros".
export function buildSummary(products: StockBoxResponse[]) {
  const withValue = products
    .map((p) => ({ label: p.name, value: p.price * p.quantity }))
    .filter((p) => p.value > 0)
    .sort((a, b) => b.value - a.value);

  const totalValue = withValue.reduce((acc, p) => acc + p.value, 0);
  const totalItems = products.reduce((acc, p) => acc + p.quantity, 0);

  const top = withValue.slice(0, 3);
  const othersValue = withValue.slice(3).reduce((acc, p) => acc + p.value, 0);
  const grouped = othersValue > 0 ? [...top, { label: "Outros", value: othersValue }] : top;

  const slices: Slice[] = grouped.map((s) => ({
    ...s,
    percent: totalValue > 0 ? (s.value / totalValue) * 100 : 0,
  }));

  return { totalValue, totalItems, totalProducts: products.length, slices };
}

export const chartColors = ["#3d44cd", "#8DA2EB", "#d8ddfc", "#58585f"];
