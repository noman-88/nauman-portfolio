# Client — React + Vite

This folder contains the frontend for the Poth Foliyo portfolio. It is part of the monorepo with the backend in `../server`.

## Local development

```bash
cd client
npm install
npm run dev
```

Open `http://localhost:5173`.

## Build

```bash
cd client
npm run build
```

## Preview

```bash
cd client
npm run preview
```

## Environment

Create a `client/.env` file with:

```env
VITE_API_URL=http://localhost:5000
```

## Notes

- Frontend API calls use `import.meta.env.VITE_API_URL`
- The root repo command `npm run dev` starts both client and server
- `client/dist/` is ignored in git
