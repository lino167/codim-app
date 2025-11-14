# Arquitetura Codim

Documento gerado para orientar a organização do projeto Next.js + Bootstrap com App Router.

## Estrutura de diretórios proposta

```
src/
  app/
    (marketing)/
      page.tsx            # Landing
      sobre/page.tsx
      portifolio/page.tsx
      certificados/page.tsx
      servicos/page.tsx
      briefing/page.tsx
      contato/page.tsx
    (app)/
      dashboard/page.tsx  # Área do cliente
    admin/
      layout.tsx          # Layout + guard de admin
      page.tsx            # Visão geral
      propostas/page.tsx
      projetos/page.tsx
      precificacao/page.tsx
      contratos/page.tsx
  components/
    common/               # Botões, cards, tipografia
    layout/               # Navbar, footer, sidebars
    marketing/            # Hero, destaques da landing
    forms/                # Inputs reutilizáveis (RHF)
    feedback/             # Alertas, spinners
  features/
    propostas/
      components/
      hooks/
      services/
      types.ts
    projetos/
    precificacao/
    contratos/
    clientes/
  lib/
    supabase/
      database.types.ts
      server-client.ts
    react-query/
      query-client.ts
    auth/
      guards.ts
    utils/
  types/
    index.d.ts
```

> Segmentos opcionais `(marketing)` e `(app)` facilitam aplicar layouts/guards diferentes entre site público e áreas autenticadas.

## Rotas e responsabilidades

- `/` (`app/page.tsx`): landing page a partir de componentes em `components/marketing`.
- `/sobre`, `/portifolio`, `/certificados`, `/servicos`, `/briefing`, `/contato`: páginas institucionais com seções Bootstrap; `briefing` recebe formulário completo (React Hook Form + Zod) salvando lead no Supabase.
- `/dashboard`: painel do cliente; consome hooks em `features/clientes`.
- `/admin` (layout + `page.tsx`): visão geral administrativa (cards, métricas).
- `/admin/propostas`, `/admin/projetos`, `/admin/precificacao`, `/admin/contratos`: telas específicas usando componentes/hook do respectivo módulo em `features/`.

## Providers e integrações

- `src/app/layout.tsx`: importa `bootstrap/dist/css/bootstrap.min.css`, `globals.css`, fontes Geist e envolve o app com `AppProviders`.
- `AppProviders` (em `src/components/providers/`):
  - Instancia o `QueryClient` (TanStack Query) e injeta `QueryClientProvider` + `ReactQueryDevtools`.
  - Envolve tudo com `SupabaseProvider` (client-side) para expor o client e estado de configuração via contexto.
- `Supabase server-side`: função `createSupabaseServerClient` em `src/lib/supabase/server-client.ts` para usar em Server Actions, layouts e loaders (auth guard).

## Convenções adicionais

- Componentes genéricos ficam em `components/common` ou `components/layout`. Componentes ligados a domínio (Ex.: tabela de propostas) ficam dentro do módulo (`features/propostas/components`).
- Hooks de dados (`usePropostas`, `useProjetos`, etc.) usam TanStack Query e ficam em `features/<modulo>/hooks/`.
- Acesso ao Supabase é centralizado em `features/<modulo>/services/` para evitar duplicação de queries.
- Tipos compartilhados ficam em `src/types/`; cada módulo também possui `types.ts` próprios para manter coesão.
- Formulários complexos reutilizam utilitários em `components/forms/` e esquemas Zod em `features/<modulo>/validators.ts`.

## Próximos passos

1. Criar as pastas vazias seguindo a estrutura acima.
2. Implementar o `AppProviders`, `SupabaseProvider` e helpers em `lib/`.
3. Iniciar pelas páginas públicas (landing + institucional) antes de avançar para `/dashboard` e `/admin`.
