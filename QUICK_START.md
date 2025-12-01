# Cloud TV EPG - Quick Setup & Deployment

## Local Development

### Install & Run Locally

```bash
npm install
npm start
```

Server runs on `http://localhost:8080` (or port from `$PORT` env var).

### Dev Mode (Auto-Reload)

```bash
npm run dev
```

Uses `nodemon` to auto-restart on file changes.

---

## Cloud Deployment

### Deploy to Railway

**Easiest free option** – Deploy from GitHub in 5 minutes.

1. Push your code to GitHub
2. Go to [railway.app](https://railway.app)
3. Click "New Project" → "Deploy from GitHub"
4. Select `angularEPG` repo
5. Done! Railway handles the rest.

**See `DEPLOYMENT_GUIDE.md` for detailed steps.**

### Other Free Options

- **Render.com** – Similar to Railway
- **Fly.io** – Good performance, free tier
- **Vercel/Netlify** – If you only serve static files
- **Google Cloud Run** – Free tier with generous limits

---

## Tech Stack

- **Backend:** Node.js + Express 5.x
- **Frontend:** Angular 1.0.5 (legacy)
- **Styling:** Bootstrap 2.3.1 + custom CSS
- **Data Format:** XML (loaded dynamically)

---

## Project Structure

```
angularEPG/
├── index.html              # Main entry point
├── server.js               # Express server
├── package.json            # Dependencies & scripts
├── Procfile                # Railway deployment config
├── DEPLOYMENT_GUIDE.md     # Deployment instructions
│
├── js/                     # Angular controllers & services
│   ├── app.js
│   ├── filters.js
│   ├── keyHandler.js
│   ├── xmlService.js
│   └── mainMenu/
│       ├── MainMenuController.js
│       ├── MenuList.js
│       └── menuService.js
│
├── css/                    # Styling
│   ├── style.css           # Main styles (CSS variables, breadcrumbs)
│   └── animations.css      # Animations & layout
│
├── partials/               # Angular templates
│   ├── mainMenu.htm
│   ├── subMenu.htm
│   └── subMenuLevel1.htm
│
├── xml/                    # XML data files (menus, channels, etc)
├── media/                  # Images, icons
└── lib/                    # Third-party libraries (xml2json.js)
```

---

## Features

✅ **Responsive Grid Layout** – Flex-based menu tiles  
✅ **Breadcrumb Navigation** – Shows user's current path  
✅ **Dynamic Menu System** – Loads menus from XML  
✅ **Icon Support** – Images from media/icons/  
✅ **Modern CSS** – Variables, gradients, hover effects  
✅ **Keyboard Support** – Event handlers for key presses  

---

## Recent Updates

- ✅ Upgraded all npm packages to latest versions
- ✅ Added responsive grid layout for menus
- ✅ Improved color scheme (CSS variables)
- ✅ Added breadcrumb navigation with dynamic labels
- ✅ Removed duplicate Home button & title
- ✅ Enhanced UI/UX with hover effects and animations

---

## Deployment Files Added

| File | Purpose |
|------|---------|
| `Procfile` | Tells Railway how to start the app |
| `.railwayignore` | Excludes unnecessary files from deployment |
| `DEPLOYMENT_GUIDE.md` | Step-by-step Railway deployment guide |
| `README.md` | Project overview & running instructions |

---

## Quick Commands

```bash
npm install          # Install dependencies
npm start            # Run server (port 8080 or $PORT)
npm run dev          # Run with auto-reload (nodemon)
npm audit fix        # Fix security vulnerabilities
npm audit            # Check for vulnerabilities
```

---

## Environment Variables

- `PORT` – Server port (default: 5000 if not set)
- `NODE_ENV` – Set to `production` for deployment

---

## Support & Resources

- **Local Issues:** Check `npm audit` and `npm start` logs
- **Deployment Issues:** See `DEPLOYMENT_GUIDE.md`
- **Railway Docs:** [docs.railway.app](https://docs.railway.app)

---

**Ready to deploy? Start with `DEPLOYMENT_GUIDE.md`! 🚀**
