import { KpiCard, PipelineItem } from "./types";

export const kpis: KpiCard[] = [
  { label: "Faturamento do mês", value: "R$ 98.420", delta: "+12,4%" },
  { label: "Lucro líquido", value: "R$ 31.210", delta: "+8,1%" },
  { label: "Despesas", value: "R$ 23.900", delta: "-4,2%" },
  { label: "Contas a receber", value: "R$ 15.740", delta: "+2,6%" },
  { label: "Novos clientes", value: "26", delta: "+18%" },
  { label: "Vendas do dia", value: "R$ 4.920", delta: "+6,3%" }
];

export const strategicMetrics = [
  { label: "Ticket médio", value: "R$ 580" },
  { label: "Conversão", value: "29%" },
  { label: "Margem de lucro", value: "31,7%" },
  { label: "ROI", value: "2,4x" }
];

export const monthlyGrowth = [52, 59, 65, 61, 72, 78, 84, 91, 95, 108, 113, 120];

export const pipeline: PipelineItem[] = [
  { stage: "Lead", name: "Loja Atlas", value: "R$ 3.500" },
  { stage: "Contato", name: "Núcleo Bela", value: "R$ 1.800" },
  { stage: "Proposta", name: "Mercado Sul", value: "R$ 4.200" },
  { stage: "Negociação", name: "Studio Forma", value: "R$ 2.700" },
  { stage: "Fechado", name: "Clínica Vita", value: "R$ 5.400" },
  { stage: "Perdido", name: "Casa Nobre", value: "R$ 1.200" }
];

export const alerts = [
  "Queda de 11% nas vendas da última semana.",
  "Despesa de marketing acima da meta mensal.",
  "Meta do time comercial em 82% do previsto.",
  "3 clientes inativos há mais de 45 dias."
];
