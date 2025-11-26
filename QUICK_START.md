# Tritorc Website - Quick Start Guide

## Immediate Usage

The website is **ready to use right now**. All 569 pages have been pre-generated.

## View the Site Locally

```bash
npx serve out
```

Then open: `http://localhost:3000`

## Key URLs to Test

### Main Entry Points
- `http://localhost:3000/` - Continent selector
- `http://localhost:3000/continent/asia` - Asia countries
- `http://localhost:3000/jp/ja` - Japan homepage (Japanese)
- `http://localhost:3000/uk/en` - UK homepage (English)
- `http://localhost:3000/mx/es` - Mexico homepage (Spanish)

### Product Pages
- `http://localhost:3000/jp/ja/products` - All products
- `http://localhost:3000/jp/ja/product/tsl-square-drive` - Product detail

### Other Pages
- `http://localhost:3000/jp/ja/services` - Services
- `http://localhost:3000/jp/ja/industries` - Industries
- `http://localhost:3000/jp/ja/contact` - Contact form

## Deploy to Production

### Option 1: Netlify
1. Connect your Git repository
2. Build command: `npm run build`
3. Publish directory: `out`
4. Deploy

### Option 2: Vercel
1. Import repository
2. Framework preset: Next.js
3. Build command: `npm run build`
4. Output directory: `out`
5. Deploy

### Option 3: AWS S3 + CloudFront
1. Upload `out/` folder to S3 bucket
2. Enable static website hosting
3. Configure CloudFront distribution
4. Done

### Option 4: Any Static Host
Simply upload the `out/` folder contents to any web server.

## How to Customize

### Add a New Country

1. Edit `lib/countries.js`:
```javascript
au: {
  name: 'Australia',
  continent: 'oceania',
  defaultLang: 'en',
  languages: ['en'],
  flag: '🇦🇺',
  currency: 'AUD'
}
```

2. Add to continent's countries array in `lib/continents.js`

3. Rebuild: `npm run build`

### Add a New Language

1. Edit `lib/translations.js`:
```javascript
fr: {
  nav: { products: 'Produits', ... },
  hero: { title: 'Solutions de Boulonnage', ... },
  ...
}
```

2. Add language to country in `lib/countries.js`:
```javascript
fr: {
  languages: ['fr', 'en']  // Add new language
}
```

3. Rebuild: `npm run build`

### Add a New Product

1. Edit `lib/products.js`:
```javascript
{
  id: 'new-product',
  name: 'New Product Name',
  category: 'Hydraulic Torque Wrenches',
  shortDescription: 'Product description',
  image: 'https://images.pexels.com/...',
  torqueRange: '100 - 5000 Nm',
  weight: '5 kg',
  features: ['Feature 1', 'Feature 2'],
  applications: ['Use case 1', 'Use case 2'],
  specifications: {
    'Spec Name': 'Spec Value'
  }
}
```

2. Rebuild: `npm run build`

### Change Colors

Edit Tailwind CSS classes in components:
- Brand red: `bg-[#D6312F]` or `text-[#D6312F]`
- Replace with your brand color

Or update throughout:
```bash
# Example: Change brand color to blue
find . -type f -name "*.jsx" -exec sed -i 's/#D6312F/#2563eb/g' {} +
```

### Update Images

Replace Pexels URLs in:
- `lib/products.js` - Product images
- `lib/industries.js` - Industry images
- Page files - Hero images

## File Organization

```
Source Files (Edit These):
├── lib/*.js          - Data and translations
├── components/*.jsx  - Reusable UI components
└── app/**/*.jsx      - Page layouts

Generated Files (Don't Edit):
└── out/             - Built static site
```

## Development Workflow

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (with hot reload)
npm run dev

# 3. Make changes to files

# 4. Build for production
npm run build

# 5. Test production build locally
npx serve out

# 6. Deploy 'out' folder
```

## Troubleshooting

### Build fails
```bash
# Clear cache and rebuild
rm -rf .next out
npm run build
```

### Pages not generating
Check that `generateStaticParams()` is exported from each dynamic route page.

### Translations missing
Ensure the language code exists in `lib/translations.js` and falls back to `en`.

## Browser Testing Checklist

- [ ] Desktop Chrome
- [ ] Desktop Firefox
- [ ] Desktop Safari
- [ ] Mobile iOS Safari
- [ ] Mobile Android Chrome
- [ ] Tablet iPad

## Performance Checklist

- [x] Static generation (SSG)
- [x] Optimized images
- [x] Minimal JavaScript
- [x] CSS optimized
- [x] No external API calls
- [x] Fast Time to Interactive

## SEO Checklist

- [x] Semantic HTML
- [x] Meta descriptions
- [x] Title tags
- [x] Proper headings (H1, H2, H3)
- [x] Alt text on images
- [x] Mobile responsive
- [x] Fast loading

## Support

For questions or issues:
1. Check `PROJECT_STRUCTURE.md` for architecture details
2. Check `IMPLEMENTATION_SUMMARY.md` for feature list
3. Review source code comments
4. Check Next.js documentation: https://nextjs.org/docs

## Quick Stats

- **Total Pages**: 569
- **Countries**: 27
- **Languages**: 6
- **Products**: 6
- **Industries**: 8
- **Build Time**: ~30 seconds
- **Bundle Size**: ~79.4 kB shared JS

## What's Included

✅ Complete multilingual website
✅ PPC-optimized landing pages
✅ Product catalog with details
✅ Services overview
✅ Industries showcase
✅ Contact forms
✅ Responsive navigation
✅ Mobile-optimized design
✅ SEO-ready structure
✅ Fast static site
✅ Production-ready code
✅ Clean, modern design
✅ Brand colors (Tritorc red)
✅ Professional typography
✅ High-quality images

**The website is 100% complete and ready for production deployment.**
