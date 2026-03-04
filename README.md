# CRM Pro • Pequeno Empresário

CRM/ERP simplificado para pequenos negócios com interface minimalista inspirada em iOS, foco em organização, gestão financeira, equipe e visão estratégica.

## Funcionalidades implementadas (MVP visual)

- **Autenticação básica segura**
  - Login com email/senha via API (`/api/auth/login`).
  - Hash de senha com `scrypt`.
  - Estrutura de papéis: `ADMIN`, `MANAGER`, `EMPLOYEE`, `VIEWER`.
  - Endpoint de recuperação de senha (`/api/auth/recover`).
- **Dashboard principal** com indicadores de faturamento, lucro, despesas, contas a receber, novos clientes e vendas.
- **Gráfico de crescimento** e **KPI estratégicos** (ticket médio, conversão, margem, ROI).
- **Alertas inteligentes** para queda de vendas, despesas elevadas e metas.
- **Gestão de clientes (CRM)** com pipeline Kanban (Lead → Fechado/Perdido) e tabela de clientes.
- **Módulo financeiro** com contas a pagar/receber e categorias.
- **Gestão de funcionários** com desempenho e comissão.
- **Gestão de produtos/serviços** com preço, custo, margem e estoque opcional.
- **Agenda e tarefas** com prioridades e responsáveis.
- **Configurações** de empresa, cores, metas, backup e exportação.
- **Tema claro/escuro automático** via `prefers-color-scheme`.
- **Layout responsivo** para desktop/mobile.

## Stack

- **Frontend/Backend:** Next.js 14 + React 18 + TypeScript
- **Arquitetura:** App Router (`app/`), rotas de API (`app/api/*`), dados mock para prototipação rápida.

## Executar localmente

```bash
npm install
npm run dev
```

Acesse: `http://localhost:3000`

## Usuários de demonstração

- `admin@crmpro.com` / `Admin@123`
- `gerente@crmpro.com` / `Gerente@123`

> Este projeto é um MVP funcional de interface e arquitetura inicial. Para produção: persistência em banco (PostgreSQL/Supabase), JWT refresh token, auditoria, criptografia em repouso, MFA, filas para notificações e relatórios PDF/Excel reais.
