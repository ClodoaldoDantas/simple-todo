import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import enTranslations from '../locales/en.json'
import ptBrTranslations from '../locales/pt-BR.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'pt-BR',
    resources: {
      'pt-BR': {
        translation: ptBrTranslations,
      },
      en: {
        translation: enTranslations,
      },
    },
    interpolation: {
      escapeValue: false,
    },
  })
