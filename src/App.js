import { useState } from 'react';

import constants from './common/constants';

import LanguageContext from './context/LanguageContext';

import NavbarContainer from './components/navbar/NavbarContainer';
import PageLayoutContainer from './components/page-layout/PageLayoutContainer';

const App = () => {
  const [language, setLanguage] = useState(constants.languages.en);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <NavbarContainer />
      <PageLayoutContainer />
    </LanguageContext.Provider>
  );
}

export default App;
