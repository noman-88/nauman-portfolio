# Poth Foliyo - Quick Start 🚀

## ⚡ 30 Seconds Setup (Windows)

1. **Double-click** `setup.bat` to install everything
2. **Wait** for installation to complete
3. **Read** the instructions at the end

## ⚡ 30 Seconds Setup (Mac/Linux)

```bash
chmod +x setup.sh
./setup.sh
```

## 🎯 Manual Setup

### Prerequisites
- Node.js (v16+) installed
- MongoDB running locally or MongoDB Atlas account

### Step-by-Step

```bash
# 1. Install all dependencies
npm install
cd server && npm install
cd ../client && npm install
cd ..

# 2. Start MongoDB (if local)
# Windows: Open Services and start MongoDB
# Mac: brew services start mongodb-community
# Linux: sudo systemctl start mongod

# 3. Terminal 1 - Start Server
cd server
npm run dev

# 4. Terminal 2 - Start Client
cd client
npm run dev
```

## 🌐 Access Application

Open: **http://localhost:5173**

## ✅ Verify Everything Works

1. ✔️ Page loads without errors
2. ✔️ Hero section shows animated cube
3. ✔️ Smooth animations on scroll
4. ✔️ Contact form accepts input
5. ✔️ No console errors

## 🔧 Troubleshooting

| Issue | Solution |
|-------|----------|
| **MongoDB connection failed** | Ensure MongoDB is running: `mongod` |
| **Port 5000 in use** | Kill process or change PORT in `server/.env` |
| **Port 5173 in use** | Vite will use next available port automatically |
| **Module not found** | Run `npm install` in the affected directory |
| **Animations not working** | Clear browser cache and hard refresh (Ctrl+Shift+R) |

## 📝 Environment Setup

### Server (.env in `server/` folder)
```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/portfolio
```

**For MongoDB Atlas:**
```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
```

## 🎨 Customization

### Update Your Info
- `client/src/components/Hero.jsx` - Hero section
- `client/src/components/About.jsx` - About section
- `client/src/components/Skills.jsx` - Skills list
- `client/src/components/Projects.jsx` - Projects

### Update Styling
- Global: `client/src/index.css`
- Per component: `client/src/components/*.css`

## 📦 Tech Stack

- **Frontend**: React 19, Vite, Framer Motion, Three.js
- **Backend**: Express, MongoDB, Mongoose
- **Styling**: CSS, Tailwind CSS
- **Animations**: Framer Motion, React Three Fiber

## 🚀 Production Deploy

```bash
# Build for production
npm run build

# Deploy client (dist folder) to Vercel/Netlify
# Deploy server to Heroku/Railway/Render
```

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Three.js Documentation](https://threejs.org/docs)
- [Express Documentation](https://expressjs.com)
- [MongoDB Documentation](https://docs.mongodb.com)

---

**Questions?** Check `SETUP_GUIDE.md` for detailed information.

**Need Help?** 
- Check browser console for errors (F12)
- Check server terminal for API errors
- Review error messages in SETUP_GUIDE.md troubleshooting section
