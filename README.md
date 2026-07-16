# Portfólio - Caio Enrique

[![CI](https://github.com/Caio-enriq/Portif-lio/actions/workflows/ci.yml/badge.svg)](https://github.com/Caio-enriq/Portif-lio/actions/workflows/ci.yml)

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
│       ├── layout.tsx          # Locale layout and metadata
│       ├── page.tsx            # Home route
│       ├── sobre/              # About route
│       ├── projetos/           # Projects routes
│       ├── curriculo/          # Resume route
│       ├── timeline/           # Journey route
│       ├── engineering/        # Engineering routes
│       └── contato/            # Contact route
├── components/
│   ├── atoms/                  # Small shared UI primitives
│   ├── molecules/              # Reusable composed components
│   ├── organisms/              # Global layout organisms
│   ├── templates/              # Page/layout shells
│   ├── ui/                     # Base UI system components
│   └── seo/                    # Structured data components
├── features/
│   ├── home/                   # Home page sections
│   ├── about/                  # About page experience
│   ├── projects/               # Project listing and detail UI
│   ├── engineering/            # Engineering pages
│   ├── resume/                 # Resume page
│   ├── timeline/               # Journey timeline
│   └── contact/                # Contact page
├── data/                       # Typed portfolio, project and resume data
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
