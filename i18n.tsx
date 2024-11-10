// Удалите этот код:
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './public/locales/en/translation.json';
import ruTranslation from './public/locales/ru/translation.json';
import kgTranslation from './public/locales/kg/translation.json';

i18n
  .use(initReactI18next)  // Эта строка больше не нужна
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      ru: {
        translation: ruTranslation,
      },
      kg: {
        translation: kgTranslation,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
