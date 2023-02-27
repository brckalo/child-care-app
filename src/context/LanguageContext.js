import { createContext } from 'react';

import constants from '../common/constants';

const LanguageContext = createContext({
  language: constants.languages.en,
  setLanguage: () => {}
});

export default LanguageContext;
