/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["fakestoreapi.com"],
  },
  i18n: {
    defaultLocale: "es-ES",
    locales: ["es-ES", "pt-BR", "en-US"],
  },
};

module.exports = nextConfig;
