# Codim App

Base opinativa para o produto da Codim combinando Next.js 16 (App Router) com Bootstrap 5, React-Bootstrap, Supabase, React Hook Form + Zod, TanStack Query e Framer Motion.

## Stack instalada

- **Next.js 16 + App Router** com TypeScript, fontes Geist e estrutura `src`.
- **Bootstrap 5 + React-Bootstrap** como design system (Tailwind removido).
- **TanStack Query** configurado globalmente com DevTools.
- **Supabase** (auth/banco/storage) com helpers para browser e server.
- **React Hook Form + Zod** para formulários tipados.
- **Framer Motion** já importado em componentes de marketing e no formulário.

## Como rodar

1. Copie o arquivo `.env.example` para `.env.local` e preencha:

   ```bash
   NEXT_PUBLIC_SUPABASE_URL=...
   NEXT_PUBLIC_SUPABASE_ANON_KEY=...
   ```

   > Configure um projeto no Supabase com a tabela `leads` contendo os campos `full_name`, `email`, `company_size`, `pain_point` e `created_at`.

2. Instale as dependências e suba o servidor:

   ```bash
   npm install
   npm run dev
   ```

3. Acesse [http://localhost:3000](http://localhost:3000) para ver:

   - Hero animado com Framer Motion;
   - Highlight cards carregados via TanStack Query;
   - Formulário de lista de espera validado via React Hook Form + Zod salvando no Supabase.

## Estrutura

- `src/app/layout.tsx`: importa Bootstrap, aplica fontes e injeta os providers globais.
- `src/components/providers`: SupabaseProvider + React Query Provider já prontos.
- `src/components/marketing`: Hero + FeatureHighlights usando React-Bootstrap e Motion.
- `src/components/waitlist/WaitlistForm.tsx`: fluxo completo de formulário com validação + mutation para `supabase.from("leads").insert(...)`.
- `src/lib/supabase`: tipagem da tabela `leads` e helpers para client/server.
- `src/app/page.tsx`: composição das seções principais do landing.

## Próximos passos sugeridos

- Adicionar rotas autenticadas usando `createSupabaseServerClient` com cookies.
- Criar storage buckets e exemplos de upload usando os providers existentes.
- Publicar na Vercel configurando as variáveis de ambiente do Supabase no projeto.
