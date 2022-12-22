/**
 * @type {import('next').NextConfig}
 */

// const { i18n } = require("./next-i18next.config");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  reactStrictMode: false,
  // i18n: {
  //   defaultLocale: "en",
  //   locales: ["en", "ml"],
  // },
  images: {
    unoptimized: true,
  },
  env: {
    API_URL: "https://www.realutionz.com/api/v1",
    // API_URL: "http://realutionzservices-staging.realutionz.com/api/v1",
    LOCAL_API_URL: "https://proud-rock-017f7ed10.2.azurestaticapps.net/api",
  },
});
