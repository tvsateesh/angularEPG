# Railway Deployment Guide for angularEPG

This guide walks you through deploying your Angular EPG app to Railway.

## Prerequisites

1. **GitHub Account** – Required to connect your repo to Railway
2. **Railway Account** – Free signup at [railway.app](https://railway.app)
3. **Git** – Your repo should be pushed to GitHub

## Step-by-Step Deployment

### 1. Prepare Your Repository

Ensure all your changes are committed and pushed to GitHub:

```bash
git add .
git commit -m "Prepare for Railway deployment"
git push origin master
```

### 2. Sign Up / Login to Railway

1. Go to [railway.app](https://railway.app)
2. Click **"Start a New Project"**
3. Sign in with GitHub (authorize Railway to access your repos)

### 3. Create a New Project on Railway

1. On the Railway dashboard, click **"New Project"**
2. Select **"Deploy from GitHub repo"**
3. Search for and select your **`angularEPG`** repository
4. Click **"Deploy Now"**

Railway will auto-detect your Node.js app and start building.

### 4. Configure Environment Variables (if needed)

1. Go to your project dashboard in Railway
2. Click the **"Variables"** tab
3. Add any environment variables (e.g., `NODE_ENV=production`)
4. For this app, the default settings should work

### 5. Monitor Deployment

1. Click the **"Deployments"** tab to watch your build and deployment
2. Logs will show build progress
3. Once complete, you'll see a green checkmark

### 6. Access Your App

1. In the Railway dashboard, look for your service card
2. Click the URL (or look for "Domain" section)
3. Your app is now live! 🎉

Example URL: `https://angularepg-production.up.railway.app`

## What Railway Does Automatically

- ✅ Reads `package.json` to install dependencies
- ✅ Reads `Procfile` to know how to start your app
- ✅ Uses `engines.node` to select Node.js version (>=18.0.0)
- ✅ Assigns a public URL
- ✅ Keeps your app running 24/7
- ✅ Auto-restarts on crashes
- ✅ Provides logs via dashboard

## Environment Variables

The app uses `PORT` from environment. Railway sets this automatically.

If you need custom env vars:
1. Go to **Settings** → **Variables**
2. Add `PORT=3000` or any other variable
3. Redeploy

## Continuous Deployment (Auto-Deploy)

Railway auto-deploys when you push to your main branch:

```bash
git push origin master  # Triggers auto-deployment
```

Check **Deployments** tab to see the status.

## Troubleshooting

### App crashes on startup
- Check logs in Railway dashboard
- Verify `PORT` environment variable is set
- Ensure `Procfile` is correct: `web: node server.js`

### 404 on routes
- Make sure all static assets (css/, js/, xml/, media/) are included
- Verify `server.js` serves static files correctly

### Logs show "Cannot find module"
- Check `package.json` dependencies
- Run `npm install` locally to verify
- Redeploy after committing `package-lock.json`

### Free tier limits exceeded
- Railway offers $5 free credits/month
- Monitor usage in **Settings** → **Usage**
- Upgrade to paid if needed

## Pricing

- **Free Tier:** $5/month usage allowance (usually sufficient for small apps)
- **Pay-as-you-go:** $0.000463/GB-hour after free tier
- **No credit card required** to start (free tier)

## Next Steps

After deployment:
1. Test your app at the provided URL
2. Share with others
3. Set up custom domain (optional, paid feature)
4. Monitor logs and performance in Railway dashboard

## Questions?

- Railway Docs: [docs.railway.app](https://docs.railway.app)
- Railway Support: [support.railway.app](https://support.railway.app)

---

**Happy deploying! 🚀**
