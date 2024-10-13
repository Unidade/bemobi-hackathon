# Bemo RAG Chatbot

Este projeto implementa um chatbot com Recuperação Aumentada por Geração (RAG) usando Next.js, OpenAI e Postgres.

- [Next.js](https://nextjs.org) 14 (App Router)
- [Vercel AI SDK](https://sdk.vercel.ai/docs)
- [OpenAI](https://openai.com)
- [Drizzle ORM](https://orm.drizzle.team)
- [Postgres](https://www.postgresql.org/) with [ pgvector ](https://github.com/pgvector/pgvector)
- [shadcn-ui](https://ui.shadcn.com) and [TailwindCSS](https://tailwindcss.com) for styling

## Pré-requisitos

- Node.js
- pnpm
- Postgres
- Conta na Groq Cloud

## Configuração

1. Clone o repositório:
   ```
   git clone https://github.com/vercel/ai-sdk-rag-starter
   cd ai-sdk-rag-starter
   ```

2. Instale as dependências:
   ```
   pnpm install
   ```

3. Configure as variáveis de ambiente:
   ```
   cp .env.example .env
   ```
   Edite o arquivo `.env` e adicione sua string de conexão do Postgres e chave da API OpenAI.

4. Execute as migrações do banco de dados:
   ```
   pnpm db:migrate
   ```

## Executando o projeto

1. Inicie o servidor de desenvolvimento:
   ```
   pnpm run dev
   ```

2. Acesse `http://localhost:3000` no seu navegador.

## Funcionalidades

- Interface de chat em tempo real
- Adição e recuperação de informações da base de conhecimento
- Geração de respostas baseadas em contexto recuperado

## Estrutura do Projeto

- `app/`: Componentes e rotas Next.js
- `lib/`: Lógica de negócios, incluindo ações do servidor e funções de IA
- `lib/db/`: Configuração e esquemas do banco de dados


## Licença

[MIT](https://choosealicense.com/licenses/mit/)