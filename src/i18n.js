import i18n from 'i18next';

import { initReactI18next } from 'react-i18next';

import constants from './common/constants';

import * as en from './translations/en.json';
import * as sr from './translations/sr.json';

const resources = {
  en: {
    translation: en
  },
  sr: {
    translation: sr
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: constants.languages.en,
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
