// middleware.js
import { NextResponse } from 'next/server';

const countries = {
  jp: {
    name: 'Japan',
    continent: 'asia',
    defaultLang: 'ja',
    languages: ['ja', 'en'],
    flag: '🇯🇵',
    currency: 'JPY'
  },
  th: {
    name: 'Thailand',
    continent: 'asia',
    defaultLang: 'th',
    languages: ['th', 'en'],
    flag: '🇹🇭',
    currency: 'THB'
  },
  sg: {
    name: 'Singapore',
    continent: 'asia',
    defaultLang: 'en',
    languages: ['en', 'zh'],
    flag: '🇸🇬',
    currency: 'SGD'
  },
  id: {
    name: 'Indonesia',
    continent: 'asia',
    defaultLang: 'id',
    languages: ['id', 'en'],
    flag: '🇮🇩',
    currency: 'IDR'
  },
  my: {
    name: 'Malaysia',
    continent: 'asia',
    defaultLang: 'en',
    languages: ['en', 'ms'],
    flag: '🇲🇾',
    currency: 'MYR'
  },
  ph: {
    name: 'Philippines',
    continent: 'asia',
    defaultLang: 'en',
    languages: ['en', 'tl'],
    flag: '🇵🇭',
    currency: 'PHP'
  },
  vn: {
    name: 'Vietnam',
    continent: 'asia',
    defaultLang: 'vi',
    languages: ['vi', 'en'],
    flag: '🇻🇳',
    currency: 'VND'
  },
  kr: {
    name: 'South Korea',
    continent: 'asia',
    defaultLang: 'ko',
    languages: ['ko', 'en'],
    flag: '🇰🇷',
    currency: 'KRW'
  },
  cn: {
    name: 'China',
    continent: 'asia',
    defaultLang: 'zh',
    languages: ['zh', 'en'],
    flag: '🇨🇳',
    currency: 'CNY'
  },
  in: {
    name: 'India',
    continent: 'asia',
    defaultLang: 'en',
    languages: ['en', 'hi'],
    flag: '🇮🇳',
    currency: 'INR'
  },
  uk: {
    name: 'United Kingdom',
    continent: 'europe',
    defaultLang: 'en',
    languages: ['en'],
    flag: '🇬🇧',
    currency: 'GBP'
  },
  de: {
    name: 'Germany',
    continent: 'europe',
    defaultLang: 'de',
    languages: ['de', 'en'],
    flag: '🇩🇪',
    currency: 'EUR'
  },
  fr: {
    name: 'France',
    continent: 'europe',
    defaultLang: 'fr',
    languages: ['fr', 'en'],
    flag: '🇫🇷',
    currency: 'EUR'
  },
  it: {
    name: 'Italy',
    continent: 'europe',
    defaultLang: 'it',
    languages: ['it', 'en'],
    flag: '🇮🇹',
    currency: 'EUR'
  },
  es: {
    name: 'Spain',
    continent: 'europe',
    defaultLang: 'es',
    languages: ['es', 'en'],
    flag: '🇪🇸',
    currency: 'EUR'
  },
  nl: {
    name: 'Netherlands',
    continent: 'europe',
    defaultLang: 'nl',
    languages: ['nl', 'en'],
    flag: '🇳🇱',
    currency: 'EUR'
  },
  se: {
    name: 'Sweden',
    continent: 'europe',
    defaultLang: 'sv',
    languages: ['sv', 'en'],
    flag: '🇸🇪',
    currency: 'SEK'
  },
  pl: {
    name: 'Poland',
    continent: 'europe',
    defaultLang: 'pl',
    languages: ['pl', 'en'],
    flag: '🇵🇱',
    currency: 'PLN'
  },
  no: {
    name: 'Norway',
    continent: 'europe',
    defaultLang: 'no',
    languages: ['no', 'en'],
    flag: '🇳🇴',
    currency: 'NOK'
  },
  mx: {
    name: 'Mexico',
    continent: 'latin-america',
    defaultLang: 'es',
    languages: ['es', 'en'],
    flag: '🇲🇽',
    currency: 'MXN'
  },
  br: {
    name: 'Brazil',
    continent: 'latin-america',
    defaultLang: 'pt',
    languages: ['pt', 'en'],
    flag: '🇧🇷',
    currency: 'BRL'
  },
  co: {
    name: 'Colombia',
    continent: 'latin-america',
    defaultLang: 'es',
    languages: ['es', 'en'],
    flag: '🇨🇴',
    currency: 'COP'
  },
  ar: {
    name: 'Argentina',
    continent: 'latin-america',
    defaultLang: 'es',
    languages: ['es', 'en'],
    flag: '🇦🇷',
    currency: 'ARS'
  },
  cl: {
    name: 'Chile',
    continent: 'latin-america',
    defaultLang: 'es',
    languages: ['es', 'en'],
    flag: '🇨🇱',
    currency: 'CLP'
  },
  pe: {
    name: 'Peru',
    continent: 'latin-america',
    defaultLang: 'es',
    languages: ['es', 'en'],
    flag: '🇵🇪',
    currency: 'PEN'
  },
  au: {
    name: 'Australia',
    continent: 'oceania',
    defaultLang: 'en',
    languages: ['en'],
    flag: '🇦🇺',
    currency: 'AUD'
  },
  nz: {
    name: 'New Zealand',
    continent: 'oceania',
    defaultLang: 'en',
    languages: ['en'],
    flag: '🇳🇿',
    currency: 'NZD'
  }
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
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)']
};