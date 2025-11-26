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
    const pathname = request.nextUrl.pathname;

    // Skip internal Next.js paths and static files
    if (
      pathname.startsWith('/_next') ||
      pathname.startsWith('/api') ||
      pathname === '/favicon.ico'
    ) {
      return NextResponse.next();
    }

    // Parse path segments
    const segments = pathname.split('/').filter(segment => segment.length > 0);

    // Need at least 2 segments: /country/lang
    if (segments.length < 2) {
      return NextResponse.next();
    }

    const [country, lang] = segments;

    // Check if country exists
    const countryData = countries[country];
    if (!countryData) {
      return NextResponse.next();
    }

    // Check if language is valid for this country
    if (!countryData.languages.includes(lang)) {
      // Build redirect URL with correct language
      const correctLang = countryData.defaultLang;
      const remainingPath = segments.slice(2);
      
      let newPathname = `/${country}/${correctLang}`;
      if (remainingPath.length > 0) {
        newPathname += `/${remainingPath.join('/')}`;
      }

      // Preserve query string and hash
      const url = request.nextUrl.clone();
      url.pathname = newPathname;
      
      return NextResponse.redirect(url);
    }

    return NextResponse.next();
  } catch (error) {
    console.error('Middleware error:', error);
    // On error, just pass through
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - api routes
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};