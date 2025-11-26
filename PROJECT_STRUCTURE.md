# Tritorc - Multilingual PPC Website

Complete production-ready multilingual PPC website built with Next.js 13 App Router, JavaScript, and Tailwind CSS.

## Project Structure

```
project/
├── app/
│   ├── page.jsx                              (Main continent selector)
│   ├── layout.jsx                            (Root layout)
│   ├── continent/
│   │   └── [continent]/page.jsx              (Country selector by continent)
│   └── [country]/
│       └── [lang]/
│           ├── page.jsx                      (Country homepage)
│           ├── products/page.jsx             (All products)
│           ├── services/page.jsx             (Services overview)
│           ├── industries/page.jsx           (Industries served)
│           ├── contact/page.jsx              (Contact form)
│           └── product/
│               └── [slug]/page.jsx           (Individual product pages)
├── components/
│   ├── Navigation.jsx                        (Multilingual navigation)
│   ├── Footer.jsx                            (Footer component)
│   ├── ProductCard.jsx                       (Product display card)
│   ├── IndustryCard.jsx                      (Industry display card)
│   ├── CTASection.jsx                        (Call-to-action section)
│   └── ContactForm.jsx                       (Contact form with state)
├── lib/
│   ├── continents.js                         (Continent data)
│   ├── countries.js                          (Country configurations)
│   ├── translations.js                       (Multi-language translations)
│   ├── products.js                           (Product catalog)
│   ├── industries.js                         (Industry data)
│   └── metadata.js                           (SEO metadata utilities)
└── middleware.js                              (Route validation)
```

## Features

### 1. Multi-Continent Architecture
- Main landing page with continent selector
- 4 continents: Asia, Europe, Latin America, Oceania
- Clean, Apple-grade design

### 2. Country-Specific Pages
- 27 countries supported
- Automatic language detection
- Country-specific flags and currencies

### 3. Multilingual System
- 6 languages: English, Japanese, Spanish, Portuguese, German, Thai, Indonesian
- Easy JSON-based translation system
- Language switcher in navigation

### 4. PPC-Optimized Pages
- High-conversion landing pages
- Engineering-focused design
- Clear CTAs throughout
- Technical specifications displayed prominently

### 5. Product Catalog
- 6 featured products
- Category-based organization
- Individual product pages with full specs
- High-quality placeholder images from Pexels

### 6. Industries Section
- 8 major industries covered
- Visual industry cards
- Industry-specific messaging

### 7. Services Pages
- Equipment rental
- Technical training
- 24/7 support
- Calibration services

### 8. Contact System
- Multi-field contact form
- Country-specific contact info
- Form validation
- Client-side form handling

## Technical Stack

- **Framework**: Next.js 13 App Router
- **Language**: JavaScript (ES6+)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Static Export**: Fully static site generation
- **Pages Generated**: 569 static pages
- **Routing**: Dynamic routes with generateStaticParams

## Supported Countries

### Asia (10)
- Japan, Thailand, Singapore, Indonesia, Malaysia, Philippines, Vietnam, South Korea, China, India

### Europe (9)
- UK, Germany, France, Italy, Spain, Netherlands, Sweden, Poland, Norway

### Latin America (6)
- Mexico, Brazil, Colombia, Argentina, Chile, Peru

### Oceania (2)
- Australia, New Zealand

## Color Palette

- **Brand Red**: #D6312F
- **Text Primary**: Gray 900
- **Text Secondary**: Gray 600
- **Background**: White / Gray 50
- **Borders**: Gray 200

## Key URLs

### Main Pages
- `/` - Continent selector
- `/continent/asia` - Country selector for Asia
- `/jp/ja` - Japan homepage (Japanese)
- `/jp/en` - Japan homepage (English)
- `/uk/en` - UK homepage

### Product Pages
- `/{country}/{lang}/products` - All products
- `/{country}/{lang}/product/tsl-square-drive` - Individual product

### Other Pages
- `/{country}/{lang}/services` - Services overview
- `/{country}/{lang}/industries` - Industries served
- `/{country}/{lang}/contact` - Contact form

## Build & Deploy

```bash
npm install
npm run build
```

Generated output in `out/` folder ready for static hosting.

## SEO Features

- Dynamic metadata per page
- Proper semantic HTML
- Mobile-responsive design
- Fast loading times
- Static generation for optimal performance

## Conversion Optimization

- Clear value propositions
- Multiple CTAs per page
- Trust indicators (ISO certification, Fortune 500)
- Technical specifications prominently displayed
- Easy contact methods
- Country-specific localization

## Development Notes

- All pages use SSG (Static Site Generation)
- Middleware validates country/language combinations
- Navigation includes language and country switchers
- Forms use client components for interactivity
- Product images use Pexels stock photos
