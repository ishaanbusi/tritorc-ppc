import { NextResponse } from 'next/server';

// Inline countries data
const countries = {
  jp: { defaultLang: 'ja', languages: ['ja', 'en'] },
  th: { defaultLang: 'th', languages: ['th', 'en'] },
  sg: { defaultLang: 'en', languages: ['en', 'zh'] },
  id: { defaultLang: 'id', languages: ['id', 'en'] },
  my: { defaultLang: 'en', languages: ['en', 'ms'] },
  ph: { defaultLang: 'en', languages: ['en', 'tl'] },
  vn: { defaultLang: 'vi', languages: ['vi', 'en'] },
  kr: { defaultLang: 'ko', languages: ['ko', 'en'] },
  cn: { defaultLang: 'zh', languages: ['zh', 'en'] },
  in: { defaultLang: 'en', languages: ['en', 'hi'] },
  uk: { defaultLang: 'en', languages: ['en'] },
  de: { defaultLang: 'de', languages: ['de', 'en'] },
  fr: { defaultLang: 'fr', languages: ['fr', 'en'] },
  it: { defaultLang: 'it', languages: ['it', 'en'] },
  es: { defaultLang: 'es', languages: ['es', 'en'] },
  nl: { defaultLang: 'nl', languages: ['nl', 'en'] },
  se: { defaultLang: 'sv', languages: ['sv', 'en'] },
  pl: { defaultLang: 'pl', languages: ['pl', 'en'] },
  no: { defaultLang: 'no', languages: ['no', 'en'] },
  mx: { defaultLang: 'es', languages: ['es', 'en'] },
  br: { defaultLang: 'pt', languages: ['pt', 'en'] },
  co: { defaultLang: 'es', languages: ['es', 'en'] },
  ar: { defaultLang: 'es', languages: ['es', 'en'] },
  cl: { defaultLang: 'es', languages: ['es', 'en'] },
  pe: { defaultLang: 'es', languages: ['es', 'en'] },
  au: { defaultLang: 'en', languages: ['en'] },
  nz: { defaultLang: 'en', languages: ['en'] }
};

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/_next') || pathname.startsWith('/api')) {
    return NextResponse.next();
  }

  const pathSegments = pathname.split('/').filter(Boolean);

  if (pathSegments.length >= 2) {
    const [country, lang] = pathSegments;
    const countryData = countries[country];

    if (countryData && !countryData.languages.includes(lang)) {
      const correctLang = countryData.defaultLang;
      const newPath = pathname.replace(`/${country}/${lang}`, `/${country}/${correctLang}`);
      return NextResponse.redirect(new URL(newPath, request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
  runtime: 'edge' // Explicitly set runtime
};