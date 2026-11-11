# 🌐 100% Free Deployment Options (Without Netlify)

Your portfolio is pre-configured and ready to deploy on any of these leading free platforms directly from your GitHub repository: [**github.com/rajikumsa/raji-kumsa-portfolio**](https://github.com/rajikumsa/raji-kumsa-portfolio).

---

## 🏆 Option 1: Vercel (Fastest & Most Popular — 1 Minute)
Vercel is the premier free cloud hosting platform for React & Vite projects.

1. Go to: [**vercel.com/new**](https://vercel.com/new)
2. Click **"Continue with GitHub"** and log in.
3. Find your repository: `raji-kumsa-portfolio` and click **"Import"**.
4. Leave all build settings as default (Framework Preset: **Vite**, Build Command: `npm run build`, Output Directory: `dist`).
5. Click **"Deploy"**.
6. **Result**: Your site goes live instantly with a free, high-speed global SSL domain (e.g. `raji-kumsa-portfolio.vercel.app`), and automatically redeploys every time you push to GitHub!

---

## 🐙 Option 2: GitHub Pages (100% Free — No Extra Accounts Needed)
You can host your portfolio directly on GitHub using the automated workflow file (`.github/workflows/deploy.yml`):

1. Open your repository on GitHub: [**github.com/rajikumsa/raji-kumsa-portfolio**](https://github.com/rajikumsa/raji-kumsa-portfolio).
2. Click the **"Settings"** tab at the top.
3. In the left sidebar, click **"Pages"**.
4. Under **"Build and deployment"** > **"Source"**, select:
   👉 **"GitHub Actions"**
5. That's it! GitHub will automatically run the build and publish your portfolio at:
   🌐 **`https://rajikumsa.github.io/raji-kumsa-portfolio/`**

---

## ⚡ Option 3: Cloudflare Pages (Unlimited Free Bandwidth)
Cloudflare provides ultra-fast global edge hosting with zero bandwidth limits.

1. Go to: [**pages.cloudflare.com**](https://pages.cloudflare.com)
2. Sign up or log in (free).
3. Click **"Create an application"** > **"Pages"** > **"Connect to Git"**.
4. Select `rajikumsa/raji-kumsa-portfolio`.
5. Select **Vite** framework preset:
   - Build command: `npm run build`
   - Output directory: `dist`
6. Click **"Save and Deploy"**.

---

## 🚀 Option 4: Render (Static Site)
Render provides free static hosting with custom domains and SSL.

1. Go to: [**dashboard.render.com**](https://dashboard.render.com)
2. Click **"New +"** > **"Static Site"**.
3. Connect your GitHub account and choose `raji-kumsa-portfolio`.
4. Settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
5. Click **"Create Static Site"**.
