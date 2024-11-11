// next-i18next.config.js
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'kg'],
  },
  react: {
    useSuspense: false,  // Используйте это, если вы хотите использовать SSR (Server-Side Rendering)
  },
};
