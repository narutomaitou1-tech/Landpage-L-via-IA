# Quero Faturar — Landing Page

Página institucional do Quero Faturar — sistema de emissão de notas fiscais
eletrônicas (NF-e, NFS-e e NFC-e) pelo WhatsApp, com a Lívia.

Construído com **React 19**, **Vite 7**, **TypeScript**, **Tailwind CSS v4**,
**shadcn/ui**, **Framer Motion** e **wouter**.

## Pré-requisitos

- Node.js 20 ou superior
- npm, pnpm ou yarn

## Como rodar

```bash
npm install
npm run dev
```

A página fica disponível em http://localhost:5173.

## Build de produção

```bash
npm run build
```

O resultado é gerado em `dist/`. Para testar o build localmente:

```bash
npm run preview
```

## Estrutura

```
quero-faturar/
├── public/                # arquivos estáticos servidos na raiz
│   ├── favicon.svg
│   └── opengraph.jpg
├── src/
│   ├── assets/            # imagens importadas pelos componentes
│   ├── components/        # seções da página + componentes shadcn/ui
│   ├── hooks/             # hooks utilitários
│   ├── lib/               # utilitários (cn, etc.)
│   ├── pages/             # páginas da aplicação (Home, NotFound)
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css          # tema Tailwind + variáveis de cor
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Deploy

O projeto gera arquivos estáticos em `dist/` e pode ser hospedado em qualquer
serviço de hospedagem estática (Vercel, Netlify, Cloudflare Pages, GitHub
Pages, S3, etc.).

### Vercel / Netlify

- **Build command:** `npm run build`
- **Output directory:** `dist`

## Contato

- WhatsApp: (61) 3567-0042
- E-mail: contato@querofaturar.com.br
