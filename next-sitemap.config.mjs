import { products } from "./lib/products.js";

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://tritorc.com",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,

  additionalPaths: async () => {
    return products.map((product) => ({
      loc: `/products/${product.slug}`,
      changefreq: "weekly",
      priority: 0.9,
      lastmod: new Date().toISOString(),
    }));
  },
};

export default config;
