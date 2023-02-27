import { useTranslation } from 'react-i18next';

import constants from '../../common/constants';

import IndicatorContainer from '../../components/indicator/IndicatorContainer';
import ListContainer from '../../components/list/ListContainer';

const BabysitterContainer = () => {
  const { t } = useTranslation();

  const labels = [
    t('Name'),
    t('Surname'),
    t('Phone'),
    t('Hourly'),
    t('Is available?')
  ];
  const refresh = {
    url: constants.api.babysitters,
    method: constants.api.methods.get
  };

  const fetchData = response => ({
    id: response.id,
    display: [
      response.name,
      response.surname,
      response.phone,
      `${constants.currency} ${response.hourly}`,
      <IndicatorContainer status={response.isAvailable} />
    ]
  });

  return (
    <ListContainer
      route={constants.routes.babysitters}
      labels={labels}
      axios={refresh}
      onFetch={fetchData}
    />
  );
}

export default BabysitterContainer;
