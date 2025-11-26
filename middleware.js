import { NextResponse } from 'next/server';

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
  try {
    const { pathname } = request.nextUrl;

    // Skip Next.js internals and API routes
    if (
      pathname.startsWith('/_next') ||
      pathname.startsWith('/api') ||
      pathname.includes('.')
    ) {
      return NextResponse.next();
    }

    const pathSegments = pathname.split('/').filter(Boolean);

    // Only process paths with at least 2 segments (country/lang/...)
    if (pathSegments.length >= 2) {
      const [country, lang] = pathSegments;
      const countryData = countries[country];

      // If valid country but invalid language, redirect to default language
      if (countryData && !countryData.languages.includes(lang)) {
        const correctLang = countryData.defaultLang;
        const restOfPath = pathSegments.slice(2).join('/');
        const newPath = `/${country}/${correctLang}${restOfPath ? '/' + restOfPath : ''}`;
        
        return NextResponse.redirect(new URL(newPath, request.url));
      }
    }

    return NextResponse.next();
  } catch (error) {
    // Log error and continue without middleware interference
    console.error('Middleware error:', error);
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\..*|api).*)',
  ]
};