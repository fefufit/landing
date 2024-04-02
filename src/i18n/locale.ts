import { createI18n } from 'vue-i18n'
import { strings } from './strings'

export const i18n = createI18n({
  locale: navigator.language,
  fallbackLocale: 'en',
  messages: strings
})
