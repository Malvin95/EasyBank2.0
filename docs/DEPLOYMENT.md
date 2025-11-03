# Deployment Guide

Complete guide for building and deploying the EasyBank 2.0 application.

## Table of Contents

- [Pre-Deployment Checklist](#pre-deployment-checklist)
- [Build Process](#build-process)
- [Vercel Deployment](#vercel-deployment)
- [Environment Variables](#environment-variables)
- [Build Configuration](#build-configuration)
- [Troubleshooting](#troubleshooting)
- [Production Optimizations](#production-optimizations)

---

## Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All tests pass (`npm run lint`)
- [ ] Production build succeeds (`npm run build`)
- [ ] No console errors
- [ ] Images optimized
- [ ] Environment variables configured
- [ ] Storybook builds successfully (if deploying)
- [ ] Performance tested

---

## Build Process

### Local Production Build

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Test production build locally**
   ```bash
   npm run start
   ```

3. **Verify build output**
   - Check `.next` directory for build artifacts
   - Verify no build errors
   - Test application functionality

### Build Output

The build creates:
- `.next/` - Optimized production build
- Static assets optimized
- Code splitting applied
- Images optimized

### Build Configuration

Build settings in `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {},
}

module.exports = nextConfig
```

---

## Vercel Deployment

### Automated Deployment

The project is configured for Vercel deployment:

1. **Connect Repository**
   - Push code to GitHub
   - Import project in Vercel
   - Connect GitHub repository

2. **Configure Build Settings**
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`

3. **Deploy**
   - Vercel automatically deploys on push
   - Preview deployments for PRs
   - Production deployment on main branch

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Vercel Configuration

Create `vercel.json` if needed:

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "outputDirectory": ".next"
}
```

---

## Environment Variables

### Required Variables

Currently, no environment variables are required for basic deployment.

### Optional Variables

If adding features later:

```bash
# .env.local (for local development)
NEXT_PUBLIC_API_URL=https://api.example.com

# .env.production (for production)
NEXT_PUBLIC_API_URL=https://api.production.com
```

### Vercel Environment Variables

1. Go to project settings
2. Navigate to "Environment Variables"
3. Add variables for:
   - Production
   - Preview
   - Development

---

## Build Configuration

### Next.js Configuration

`next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {},
  // Add custom configurations here
}

module.exports = nextConfig
```

### PostCSS Configuration

`postcss.config.mjs`:

```javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

### TypeScript Configuration

`tsconfig.json` includes path aliases:

```json
{
  "paths": {
    "@components/*": ["src/app/components/*"],
    "@images/*": ["public/images/*"]
  }
}
```

---

## Production Optimizations

### Image Optimization

Next.js automatically optimizes images:

```tsx
<Image
  src={imageUrl}
  alt={alt}
  width={288}
  height={192}
  // Next.js handles optimization
/>
```

### Code Splitting

Next.js automatically:
- Splits code by route
- Splits large components
- Lazy loads when possible

### CSS Optimization

- Tailwind CSS purges unused styles
- PostCSS optimizes output
- CSS Modules scope styles

### Font Optimization

Using `next/font`:

```tsx
const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '700']
});
```

---

## Storybook Deployment

### Build Storybook

```bash
npm run build-storybook
```

Output: `storybook-static/` directory

### Deploy Storybook

Options:
1. **Netlify**: Drag and drop `storybook-static`
2. **Vercel**: Deploy `storybook-static` directory
3. **GitHub Pages**: Push `storybook-static` to gh-pages branch

### Chromatic Deployment

```bash
# Set Chromatic token
export CHROMATIC_PROJECT_TOKEN=your-token

# Deploy
npm run chromatic
```

---

## Troubleshooting

### Build Errors

#### Native Binding Errors

If you see `Cannot find native binding`:

1. Check `package.json` dependencies
2. Ensure `lightningcss` is in dependencies
3. Verify `sharp` is installed for image optimization

#### TypeScript Errors

1. Check `tsconfig.json` configuration
2. Verify all imports are correct
3. Ensure path aliases are configured

#### CSS Not Loading

1. Verify `postcss.config.mjs` is at root
2. Check `globals.css` imports
3. Ensure Tailwind CSS is properly configured

### Deployment Errors

#### Build Fails on Vercel

1. Check build logs in Vercel dashboard
2. Verify Node.js version (18+)
3. Check for missing dependencies
4. Review error messages

#### Environment Variables

1. Verify variables are set in Vercel
2. Check variable names match code
3. Ensure variables are prefixed with `NEXT_PUBLIC_` if needed client-side

---

## Performance Checklist

Before deploying:

- [ ] Images optimized
- [ ] Bundle size checked
- [ ] Lazy loading implemented
- [ ] Fonts optimized
- [ ] CSS purged
- [ ] Code split properly
- [ ] Production build tested locally

### Checking Bundle Size

```bash
npm run build
# Check .next/analyze for bundle analysis
```

---

## Monitoring

### Vercel Analytics

Enable in Vercel dashboard:
1. Go to project settings
2. Enable Analytics
3. View performance metrics

### Error Monitoring

Consider adding:
- Sentry for error tracking
- LogRocket for session replay
- Custom analytics

---

## Rollback

### Vercel Rollback

1. Go to Vercel dashboard
2. Navigate to "Deployments"
3. Select previous deployment
4. Click "Promote to Production"

### Git Rollback

```bash
# Revert to previous commit
git revert HEAD

# Force push (if needed, careful!)
git push --force
```

---

## CI/CD Pipeline

### GitHub Actions (Optional)

Example workflow:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - run: npm run lint
```

---

## Production URLs

After deployment:

- **Production**: https://easy-bank2-0.vercel.app
- **Preview**: Automatic per PR
- **Storybook**: (if deployed separately)

---

## Maintenance

### Regular Updates

1. **Dependencies**: Update regularly
   ```bash
   npm outdated
   npm update
   ```

2. **Security**: Check for vulnerabilities
   ```bash
   npm audit
   npm audit fix
   ```

3. **Performance**: Monitor and optimize

---

## Resources

- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Storybook Deployment](https://storybook.js.org/docs/react/sharing/publish-storybook)

---

For more information:
- [Development Guide](./DEVELOPMENT.md)
- [Architecture](./ARCHITECTURE.md)

