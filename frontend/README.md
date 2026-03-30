# TradeFlow AI Frontend

Interface Next.js du projet TRADEFLOW-AI.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Recharts

## Prérequis

- Node.js 20+
- npm

## Configuration

Créer un fichier `frontend/.env.local` :

```bash
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## Développement local

```bash
cd frontend
npm ci
npm run dev
```

App accessible sur `http://localhost:3000`.

## Scripts

- `npm run dev` : mode développement
- `npm run lint` : lint
- `npm run build` : build production
- `npm run start` : lancer build production

## Déploiement

### Vercel

Le fichier racine `vercel.json` configure :
- `rootDirectory: frontend`
- commandes install/build

Variable requise :
- `NEXT_PUBLIC_API_URL=https://<backend-public>`

### Netlify

Le fichier racine `netlify.toml` configure :
- `base = "frontend"`
- plugin Next.js Netlify

Variable requise :
- `NEXT_PUBLIC_API_URL=https://<backend-public>`

## Notes

- Le frontend ne doit jamais contenir de secret privé.
- La variable `NEXT_PUBLIC_*` est exposée côté client, uniquement pour les URL/API publiques.
