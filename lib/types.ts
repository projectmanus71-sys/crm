export type UserRole = "ADMIN" | "MANAGER" | "EMPLOYEE" | "VIEWER";

export interface KpiCard {
  label: string;
  value: string;
  delta: string;
}

export interface PipelineItem {
  stage: "Lead" | "Contato" | "Proposta" | "Negociação" | "Fechado" | "Perdido";
  name: string;
  value: string;
}
