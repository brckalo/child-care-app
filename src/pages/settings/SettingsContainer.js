import { 
  useContext,
  useState
} from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import constants from '../../common/constants';

import LanguageContext from '../../context/LanguageContext';

import Settings from './Settings';

const SettingsContainer = () => {
  const [show, setShow] = useState(true);

  const navigate = useNavigate();

  const { t, i18n } = useTranslation();

  const { language, setLanguage } = useContext(LanguageContext);

  const labels = {
    title: t('Settings'),
    langugage: t('Language')
  };
  const languages = [
    {
      code: 'en',
      display: 'English'
    },
    {
      code: 'sr',
      display: 'Srpski'
    }
  ];

  const handleOnChange = event => {
    setLanguage(event.target.value);

    i18n.changeLanguage(event.target.value);
  }

  const handleOnClose = () => {
    setShow(false);
    
    navigate(constants.routes.parents);
  }

  return (
    <Settings
      labels={labels}
      languages={languages}
      show={show}
      selected={language}
      handleOnChange={handleOnChange}
      handleOnClose={handleOnClose}
    />
  );
}

export default SettingsContainer;
