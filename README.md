# TRADEFLOW-AI

TradeFlow AI est une plateforme de trading assisté et automatisable conçue pour rester **simple pour débutants** et **puissante pour profils avancés**.  
Le projet combine interface moderne, bots, copy-trading et garde-fous de risque pour viser une exécution propre, mesurable et rentable.

## Objectif produit

- Donner un cadre clair pour choisir entre :
  - court terme vs long terme
  - manuel vs semi-auto vs automatique
  - profil prudent (ETF/risque bas) vs profil dynamique (risque plus élevé)
- Réduire les pertes évitables grâce à des paramètres de risque structurés.
- Offrir un parcours utilisateur compréhensible même sans expérience technique.

## Fonctionnalités actuelles

- Landing page marketing et dashboard de démonstration.
- Gestion de bots (liste, création, démarrage, arrêt).
- Copy trading (leaderboard + activation copie).
- Réglages utilisateur et gestion de risque:
  - max daily loss
  - max position size
  - stop loss %
- API backend Express avec authentification JWT.

## API routes

L’API est disponible via un point d’entrée versionné :

- `GET /api` → index des routes
- `GET /api/v1/auth/*`
- `GET /api/v1/bots/*`
- `GET /api/v1/trades/*`
- `GET /api/v1/copy/*`
- `GET /api/v1/settings/*`

Routes legacy conservées pour compatibilité :
- `/api/auth/*`
- `/api/bots/*`
- `/api/trades/*`
- `/api/copy/*`
- `/api/settings/*`

Santé service :
- `GET /health`

## Architecture

- `frontend/` : Next.js (App Router, TypeScript, Tailwind, Recharts)
- `backend/` : Node.js + Express + JWT + middleware sécurité
- `database/` : schéma SQL initial
- `docker-compose.yml` : stack locale frontend + backend + postgres + redis

## Démarrage local

### Option 1 — Docker (recommandé)

```bash
cp .env.example .env
docker compose up --build
```

Accès :
- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5000`

### Option 2 — Manuel

Backend :
```bash
cd backend
npm ci
npm run dev
```

Frontend :
```bash
cd frontend
npm ci
npm run dev
```

## Déploiement (Vercel / Netlify)

Le dépôt inclut des fichiers racine prêts pour le frontend :

- `vercel.json`
- `netlify.toml`

### Vercel

1. Importer le repository.
2. Le `rootDirectory` est déjà défini sur `frontend`.
3. Ajouter la variable d’environnement :
   - `NEXT_PUBLIC_API_URL=https://<votre-backend-public>`
4. Déployer.

### Netlify

1. Importer le repository.
2. Le `base` est `frontend` (dans `netlify.toml`).
3. Ajouter la variable :
   - `NEXT_PUBLIC_API_URL=https://<votre-backend-public>`
4. Déployer.

> Important: Vercel et Netlify hébergent ici le frontend. Le backend Express doit être exposé séparément (ex: Railway, Render, Fly.io, VPS).

## Variables d’environnement

Racine (`.env`) :
- `JWT_SECRET`
- `POSTGRES_USER`
- `POSTGRES_PASSWORD`
- `POSTGRES_DB`
- `NEXT_PUBLIC_API_URL`

Backend (`backend/.env.example`) :
- `PORT`
- `JWT_SECRET`
- `NODE_ENV`
- `CORS_ORIGIN`

## Sécurité & risque

- Ne jamais utiliser de secrets faibles en production.
- Configurer `CORS_ORIGIN` uniquement vers les domaines autorisés.
- Définir des limites de risque réalistes avant toute automatisation.
- Commencer en mode papier/simulation avant de passer en fonds réels.

## Roadmap recommandée

- Connexion frontend ↔ backend réelle (fetch API + gestion session JWT).
- Validation stricte des inputs backend (schémas).
- Persistance PostgreSQL réelle (au lieu de structures mémoire).
- Journal d’exécution, alertes drawdown, arrêt d’urgence (kill-switch).
- Backtests et mode replay pour prise de décision assistée.

## Avertissement

Ce projet ne constitue pas un conseil financier.  
Le trading comporte des risques significatifs ; la décision d’automatiser, le style (flash/court/long terme), et le niveau de risque restent personnels.
