import { NextResponse } from "next/server";

const countries = {
  jp: { defaultLang: "ja", languages: ["ja", "en"] },
  th: { defaultLang: "th", languages: ["th", "en"] },
  sg: { defaultLang: "en", languages: ["en", "zh"] },
  id: { defaultLang: "id", languages: ["id", "en"] },
  my: { defaultLang: "en", languages: ["en", "ms"] },
  ph: { defaultLang: "en", languages: ["en", "tl"] },
  vn: { defaultLang: "vi", languages: ["vi", "en"] },
  kr: { defaultLang: "ko", languages: ["ko", "en"] },
  cn: { defaultLang: "zh", languages: ["zh", "en"] },
  in: { defaultLang: "en", languages: ["en", "hi"] },
  uk: { defaultLang: "en", languages: ["en"] },
  de: { defaultLang: "de", languages: ["de", "en"] },
  fr: { defaultLang: "fr", languages: ["fr", "en"] },
  it: { defaultLang: "it", languages: ["it", "en"] },
  es: { defaultLang: "es", languages: ["es", "en"] },
  nl: { defaultLang: "nl", languages: ["nl", "en"] },
  se: { defaultLang: "sv", languages: ["sv", "en"] },
  pl: { defaultLang: "pl", languages: ["pl", "en"] },
  no: { defaultLang: "no", languages: ["no", "en"] },
  mx: { defaultLang: "es", languages: ["es", "en"] },
  br: { defaultLang: "pt", languages: ["pt", "en"] },
  co: { defaultLang: "es", languages: ["es", "en"] },
  ar: { defaultLang: "es", languages: ["es", "en"] },
  cl: { defaultLang: "es", languages: ["es", "en"] },
  pe: { defaultLang: "es", languages: ["es", "en"] },
  au: { defaultLang: "en", languages: ["en"] },
  nz: { defaultLang: "en", languages: ["en"] }
};

export function middleware(req) {
  const url = req.nextUrl;
  const pathname = url.pathname;

  // Ignore static + API
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split("/").filter(Boolean);

  // If no [country] or no [lang], do nothing
  if (segments.length < 2) {
    return NextResponse.next();
  }

  const [country, lang] = segments;

  const info = countries[country];

  // Country not supported → do nothing
  if (!info) {
    return NextResponse.next();
  }

  // Language is okay
  if (info.languages.includes(lang)) {
    return NextResponse.next();
  }

  // Fix language
  const correct = info.defaultLang;

  // Prevent infinite redirect loops
  if (lang === correct) {
    return NextResponse.next();
  }

  url.pathname = `/${country}/${correct}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};
