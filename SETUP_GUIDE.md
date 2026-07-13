# Poth Foliyo - Complete Setup Guide

## 🚀 Project Structure

```
poth-foliyo/
├── client/              # React frontend
│   ├── src/
│   │   ├── components/  # All React components
│   │   ├── pages/       # Page components
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
├── server/              # Express backend
│   ├── config/
│   │   └── db.js        # MongoDB connection
│   ├── controllers/     # Route handlers
│   ├── models/          # Mongoose schemas
│   ├── routes/          # API routes
│   ├── server.js
│   ├── package.json
│   └── .env             # Environment variables
└── package.json         # Root package.json
```

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or Atlas)
- Git

## ⚙️ Installation & Setup

### Step 1: Install Dependencies

```bash
# Install root dependencies
npm install

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### Step 2: Environment Setup

#### Server (.env file already created)
Located at: `server/.env`

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/portfolio
```

**For MongoDB Atlas (Cloud):**
```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
```

#### Client Configuration
No .env file needed for client. API endpoint is configured in components.

### Step 3: Start MongoDB

#### Option A: Local MongoDB
```bash
# Windows (if MongoDB is installed)
net start MongoDB

# Or if using MongoDB Community
mongod
```

#### Option B: MongoDB Atlas (Cloud)
1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Get connection string
4. Update `server/.env` with your connection string

### Step 4: Run the Application

#### Terminal 1 - Start Server
```bash
cd server
npm run dev
```

Expected output:
```
Server Running On Port 5000
✅ MongoDB Connected
```

#### Terminal 2 - Start Client
```bash
cd client
npm run dev
```

Expected output:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

### Step 5: Access the Application

Open your browser and go to: `http://localhost:5173/`

## 🔧 Build for Production

### Client Build
```bash
cd client
npm run build
```

### Deploy
The built files will be in `client/dist/` - deploy these to your hosting service.

## 📚 API Endpoints

### Health Check
```
GET http://localhost:5000/api/health
```

### Contact Form
```
POST http://localhost:5000/api/contact

Body:
{
  "name": "Your Name",
  "email": "your@email.com",
  "subject": "Subject",
  "message": "Your message"
}
```

## 🐛 Troubleshooting

### Server Error: Port 5000 already in use
```bash
# Kill process on port 5000 (Windows)
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Or change PORT in server/.env
```

### MongoDB Connection Error
- Verify MongoDB is running
- Check connection string in `.env`
- For local: ensure `mongod` service is running
- For Atlas: verify IP whitelist and credentials

### Vite/React Errors
```bash
# Clear node_modules and reinstall
cd client
rm -r node_modules
npm install
```

### CORS Errors
- Server CORS is enabled for localhost
- In production, update server.js CORS settings

## 📦 Dependencies Overview

### Server
- **express**: Web framework
- **mongoose**: MongoDB ODM
- **cors**: Handle cross-origin requests
- **dotenv**: Environment variables
- **nodemon**: Auto-restart on file changes (dev)

### Client
- **react**: UI library
- **react-router-dom**: Routing
- **framer-motion**: Animations
- **three.js**: 3D graphics
- **axios**: HTTP client
- **react-icons**: Icon library
- **tailwindcss**: Utility CSS

## 🌟 Features

✅ Animated hero section with 3D cube
✅ Smooth scroll animations
✅ Contact form with MongoDB backend
✅ Skills showcase with progress bars
✅ Project portfolio with filters
✅ Fully responsive design
✅ Custom cursor
✅ API health checks

## 📝 Development Notes

- Components use Framer Motion for animations
- 3D elements powered by Three.js and React Three Fiber
- Styling with CSS modules and global CSS
- Contact form data saved to MongoDB
- API calls use Axios with localhost:5000 base URL

## 🚀 Performance Tips

1. **Optimize images** - Use compressed formats
2. **Lazy load components** - Use React.lazy()
3. **Code splitting** - Vite handles this automatically
4. **Monitor bundle size** - `npm run build` shows size

## 📄 License

ISC

---

**Need Help?** Check the console for error messages and refer to the troubleshooting section.
