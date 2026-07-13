# Poth Foliyo 🎨

A clean, full-stack portfolio monorepo with a Vite React frontend and Express/MongoDB backend.

## What’s inside

- `client/` — React + Vite frontend
- `server/` — Express API backend
- `client/src/components/` — reusable UI components
- `server/config/` — MongoDB connection
- `server/routes/` — API endpoints

## Quick start

```bash
# 1. Install all dependencies
npm run setup

# 2. Start both frontend and backend
npm run dev
```

Open `http://localhost:5173`

## Local development

Frontend only
```bash
npm run dev:client
```

Backend only
```bash
npm run dev:server
```

## Environment setup

### Backend `.env` (`server/.env`)

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/portfolio
CLIENT_URL=http://localhost:5173
```

### Frontend `.env` (`client/.env`)

```env
VITE_API_URL=http://localhost:5000
```

> Copy `server/.env.example` and `client/.env.example` into `.env` files.

## API endpoints

- `GET /api/health` — health check
- `POST /api/contact` — submit contact form

## Important project notes

- Client uses `import.meta.env.VITE_API_URL` for backend requests
- Server uses `CLIENT_URL` for CORS origin allowlist
- Root `npm run dev` starts both services together

## Deployment

### Frontend — Vercel

1. Connect your GitHub repo to Vercel.
2. Set the project root to `client/`.
3. Build command: `npm run build`
4. Output directory: `dist`
5. Add env var: `VITE_API_URL=https://your-backend-url`

### Backend — Render

1. Create a new Web Service on Render.
2. Link your GitHub repo.
3. Set Root Directory to `server/`.
4. Build command: `npm install`
5. Start command: `node server.js`
6. Add env vars:
   - `MONGO_URI`
   - `CLIENT_URL=https://your-frontend-url`
   - `PORT=5000`

## GitHub / repo cleanup

- `node_modules/` is ignored
- `client/dist/` and build outputs are ignored
- `.env` files are ignored
- stale root-only React files were removed from the repo root

## Customization

Edit these files to personalize content:

- `client/src/components/Hero.jsx`
- `client/src/components/About.jsx`
- `client/src/components/Skills.jsx`
- `client/src/components/Projects.jsx`
- `client/src/components/Contact.jsx`

## Troubleshooting

- If the frontend cannot reach the backend, make sure `VITE_API_URL` is correct.
- If the server rejects requests, confirm `CLIENT_URL` matches the deployed frontend origin.
- Restart both servers after changing `.env` values.

## License

ISC
