export const runtime = "nodejs"; 
import { NextResponse } from 'next/server';
import { countries } from './lib/countries';

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
      const newPath = pathname.replace(
        `/${country}/${lang}`,
        `/${country}/${correctLang}`
      );
      return NextResponse.redirect(new URL(newPath, request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
