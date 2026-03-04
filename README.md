# Building the Digital Future of Saudi Arabia

Landing page for a Saudi technology startup — Vue 3, Vite, Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

1. **Create the repo on GitHub**  
   Go to [github.com/new](https://github.com/new). Create a new repository (e.g. `Building-the-Digital-Future-of-Saudi-Arabia`). Do **not** add a README, .gitignore, or license.

2. **Push your code** (if not already done)
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - In the repo: **Settings** → **Pages**
   - Under **Build and deployment**, set **Source** to **GitHub Actions**

4. **Deploy**
   - Every push to `main` will build and deploy automatically.
   - Or run the workflow manually: **Actions** → **Deploy to GitHub Pages** → **Run workflow**

5. **View the site**  
   After the workflow finishes: **Settings** → **Pages** → see the URL, e.g.  
   `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
