# Rooster Promo AI

Rooster Promo AI é uma plataforma inteligente desenvolvida para otimizar a criação e gestão de promoções e programas de fidelidade. Utilizando React, TypeScript e modernas tecnologias de frontend, o projeto oferece uma interface intuitiva e ferramentas poderosas como assistentes de IA e calculadoras de ROI.

## 🚀 Funcionalidades Principais

- **Assistente de Promoções com IA:** Configure campanhas promocionais de forma guiada e inteligente.
- **Calculadora de ROI:** Ferramenta interativa para estimar o retorno sobre investimento de suas ações.
- **Gestão de Fidelidade:** Módulos dedicados para programas de fidelização de clientes.
- **Landing Page Moderna:** Interface responsiva construída com componentes Shadcn UI e animações Framer Motion.
- **Integração Backend:** Autenticação e banco de dados gerenciados via Supabase.
- **Dashboard Analítico:** Visualização de dados e métricas de campanhas.

## 🛠️ Tecnologias Utilizadas

O projeto foi construído com uma stack moderna e robusta:

- **Frontend:** [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **Componentes UI:** [Shadcn UI](https://ui.shadcn.com/), [Radix UI](https://www.radix-ui.com/)
- **Gerenciamento de Estado & Data Fetching:** [TanStack Query (React Query)](https://tanstack.com/query/latest)
- **Formulários:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Animações:** [Framer Motion](https://www.framer.com/motion/)
- **Backend & Auth:** [Supabase](https://supabase.com/)
- **Gráficos:** [Recharts](https://recharts.org/)

## 📂 Estrutura do Projeto

```
src/
├── components/      # Componentes reutilizáveis (UI, Seções da Landing Page)
├── hooks/           # Custom React Hooks
├── integrations/    # Configurações de serviços externos (Supabase)
├── lib/             # Utilitários e funções auxiliares
├── pages/           # Páginas da aplicação (Rotas)
└── ...
```

## 🏁 Como Iniciar

Siga os passos abaixo para rodar o projeto localmente:

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/pensadoria/rooster-promo-ai.git
   cd rooster-promo-ai
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

O projeto estará rodando em `http://localhost:8080` (ou outra porta disponível).

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Compila o projeto para produção.
- `npm run preview`: Visualiza a build de produção localmente.
- `npm run lint`: Executa o linter para verificar o código.

## 📄 Licença

Este projeto não possui uma licença definida. Entre em contato com o autor para mais informações.
