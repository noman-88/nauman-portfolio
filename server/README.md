# Poth Foliyo Server

This folder contains the backend API for the Poth Foliyo portfolio.

## Structure
- `config/` - MongoDB connection setup
- `controllers/` - request handlers
- `models/` - Mongoose schemas
- `routes/` - API endpoints
- `server.js` - entrypoint

## Local development

```bash
cd server
npm install
npm run dev
```

## Environment

Create `server/.env` from `server/.env.example` with:

```env
PORT=5000
CLIENT_URL=http://localhost:5173
MONGO_URI=mongodb://127.0.0.1:27017/portfolio
```

## Deployment

- Render or any Node.js host works
- Set `MONGO_URI` and `CLIENT_URL` in production
- Keep `.env` out of git
