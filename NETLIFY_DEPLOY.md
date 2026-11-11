# Deploying Raji Kumsa's Portfolio to Netlify 🚀

This project is pre-configured and 100% production-ready for seamless deployment to [Netlify](https://www.netlify.com/).

---

## ⚡ Option 1: Git-Based Deployment (Recommended)

1. **Repository**: [https://github.com/rajikumsa/raji-kumsa-portfolio](https://github.com/rajikumsa/raji-kumsa-portfolio)
2. Go to [app.netlify.com](https://app.netlify.com) and click **"Add new site"** > **"Import an existing project"**.
3. Select your repository `rajikumsa/raji-kumsa-portfolio`.
4. Netlify will automatically detect the pre-configured `netlify.toml`:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: 18 or 20 (default)
5. Click **Deploy Site**. Your portfolio will be live with free global CDN and SSL!

---

## ⚡ Option 2: Drag & Drop Deploy (Zero Configuration)

1. Build the production bundle locally:
   ```bash
   npm run build
   ```
2. Open [app.netlify.com/drop](https://app.netlify.com/drop) in your web browser.
3. Drag and drop the generated `dist` folder into the drop zone.
4. Your site will instantly go live with a custom `.netlify.app` URL.

---

## ⚡ Option 3: Netlify CLI

Deploy straight from your terminal:
```bash
# 1. Build the app
npm run build

# 2. Deploy directly to Netlify
npx netlify deploy --prod --dir=dist
```

---

## 🛠 Features Configured for Netlify

1. **SPA Rewrites (`netlify.toml` and `public/_redirects`)**:
   - `/* -> /index.html 200` ensures that reloading any direct route or deep link never returns a 404.

2. **Netlify Forms Integration**:
   - The contact form in `src/components/Contact.tsx` is equipped with `data-netlify="true"`, `netlify-honeypot="bot-field"`, and automatic asynchronous submission.
   - When deployed on Netlify, submissions will automatically be collected in your **Netlify Dashboard -> Forms -> "contact"**.
   - You can also configure email notifications in Netlify under *Form notification settings*.

3. **Performance & Security Headers (`netlify.toml`)**:
   - Automated cache headers for static hashed assets in `/assets/*` (`Cache-Control: public, max-age=31536000, immutable`).
   - Standard security headers: `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`.

4. **Custom Domain**:
   - In your Netlify site settings, click **Domain management** to attach your custom domain (e.g. `rajikumsa.dev`) with automatic Let's Encrypt SSL certificates.
