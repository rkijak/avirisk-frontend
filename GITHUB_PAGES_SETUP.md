# Push Frontend Repo to GitHub

## Instructions to Create and Push `avirisk-frontend` Repo

### Step 1: Create Repo on GitHub
1. Go to https://github.com/new
2. Create new repository:
   - **Repository name**: `avirisk-frontend`
   - **Description**: "AviRisk frontend - deployed to GitHub Pages"
   - **Public**: Yes (required for GitHub Pages free tier)
   - **Initialize with**: None (we have local files)
   - Click **Create repository**

### Step 2: Add Remote and Push
Run these commands from `c:\Users\kijak\.docker\avirisk\avirisk-frontend`:

```powershell
cd c:\Users\kijak\.docker\avirisk\avirisk-frontend

# Add GitHub remote
git remote add origin https://github.com/rkijak/avirisk-frontend.git

# Verify remote
git remote -v

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to https://github.com/rkijak/avirisk-frontend
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select `main`
   - **Folder**: Select `/docs`
5. Click **Save**
6. Wait ~1 minute for deployment
7. GitHub will show: "Your site is live at https://rkijak.github.io"

### Step 4: Verify
- Visit: https://rkijak.github.io
- Should see AviRisk frontend loaded ✅

### Step 5: Point Domain to GitHub Pages
Once Pages is live, in **Cloudflare Dashboard**:

1. Go to **DNS**
2. Click **Add Record**
3. Fill in:
   ```
   Type: CNAME
   Name: @ (root)
   Content: rkijak.github.io
   TTL: Auto
   Proxy: DNS only
   ```
4. Click **Save**
5. Wait 5 minutes
6. Visit: https://yourdomain.com (should load frontend)

---

## Future Updates

Every time you make frontend changes:

```powershell
# 1. Make changes to client/src/*
# 2. Build
npm run build

# 3. Commit and push
git add docs/
git commit -m "update: [description]"
git push origin main

# GitHub Pages auto-deploys within 1 minute ✅
```

That's it! No manual deployments needed.
