# Portfolio React - Caio Enrique

[![CI](https://github.com/Caioe/portfolio-react/actions/workflows/ci.yml/badge.svg)](https://github.com/Caioe/portfolio-react/actions/workflows/ci.yml)

Portfolio profissional de Caio Enrique — Full-Stack Developer & Enterprise Automation.

## Stack

- **Framework:** Next.js 16 + React 19
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **Animations:** Framer Motion
- **i18n:** next-intl (PT/EN)
- **Analytics:** Vercel Analytics + Speed Insights
- **Testing:** Jest + Playwright
- **Deploy:** Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Run development server
npm run dev

# Open http://localhost:3000
```

## Available Scripts

```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Start production server
npm run lint         # ESLint
npm run lint:fix     # ESLint with auto-fix
npm run format       # Prettier format
npm run format:check # Prettier check
npm run typecheck    # TypeScript check
npm run test         # Jest unit tests
npm run test:e2e     # Playwright E2E tests
```

## Project Structure

```
src/
├── app/
│   └── [locale]/
│       ├── layout.tsx          # Root layout with providers
│       ├── page.tsx            # Home page
│       ├── sobre/page.tsx      # About page
│       ├── projetos/           # Projects pages
│       ├── curriculo/page.tsx  # Resume page
│       └── contato/page.tsx    # Contact page
├── components/
│   ├── atoms/                  # Atomic components
│   ├── molecules/              # Composite components
│   ├── organisms/              # Complex components
│   ├── templates/              # Page layouts
│   ├── ui/                     # shadcn/ui components
│   └── seo/                    # SEO components
├── data/                       # Data files
├── i18n/                       # Internationalization
├── lib/                        # Utilities
├── messages/                   # Translation files
└── types/                      # TypeScript types
```

## Deployment

1. Push to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy!

## License

MIT
