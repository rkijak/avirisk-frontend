# AviRisk Frontend

Frontend application for AviRisk, deployed to GitHub Pages.

## Quick Start

### Development
```bash
npm install
npm run dev
# Opens: http://localhost:5173
```

### Production Build
```bash
npm run build
# Outputs to: /docs (ready for GitHub Pages)
```

### Deploy to GitHub Pages
```bash
npm run build
git add docs/
git commit -m "chore: build frontend"
git push origin main
# Auto-deployed to GitHub Pages within 1 minute
```

## Architecture

- **Frontend Framework**: React 19 + TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 3 + PostCSS
- **UI Components**: Radix UI
- **API Calls**: Relative paths `/api/*` (routed through Cloudflare)

## Environment

Frontend is deployed to GitHub Pages at:
- **Development**: `http://localhost:5173`
- **Production**: `https://yourdomain.com`

API calls are made to `https://yourdomain.com/api/*` which routes through Cloudflare Workers.

## Build Output

The `/docs` folder contains the production build and is committed to git. GitHub Pages automatically serves this folder.

## Related

- **API**: https://github.com/rkijak/AviRisk-Inc (Cloudflare Workers + Express backend)
- **Deployment Guide**: See `DEPLOYMENT.md` in main AviRisk-Inc repo
