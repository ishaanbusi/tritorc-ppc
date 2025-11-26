import { countries } from './countries';
import { translations } from './translations';

export function generatePageMetadata(country, lang, page = 'home') {
  const countryData = countries[country];
  const t = translations[lang] || translations.en;

  const baseTitle = 'Tritorc';
  const countryName = countryData?.name || '';

  const titles = {
    home: `${baseTitle} ${countryName} - ${t.hero.title}`,
    products: `${t.products.title} - ${baseTitle} ${countryName}`,
    services: `${t.nav.services} - ${baseTitle} ${countryName}`,
    industries: `${t.industries.title} - ${baseTitle} ${countryName}`,
    contact: `${t.nav.contact} - ${baseTitle} ${countryName}`
  };

  const descriptions = {
    home: t.hero.subtitle,
    products: t.products.subtitle,
    services: 'Complete support throughout your project lifecycle',
    industries: t.industries.subtitle,
    contact: 'Get in touch with our engineering specialists'
  };

  return {
    title: titles[page] || titles.home,
    description: descriptions[page] || descriptions.home
  };
}
