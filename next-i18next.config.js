export const i18n = {
  debug: process.env.NODE_ENV === "development",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ml"],
  },
  reloadOnPrerender: process.env.NODE_ENV === "development",
};
