import { useTranslation } from 'react-i18next';

import constants from '../../common/constants';

import ListContainer from '../../components/list/ListContainer';

const ParentContainer = () => {
  const { t } = useTranslation();

  const labels = [
    t('Name'),
    t('Surname'),
    t('Phone')
  ];
  const refresh = {
    url: constants.api.parents,
    method: constants.api.methods.get
  };

  const fetchData = response => ({
    id: response.id,
    display: [
      response.name,
      response.surname,
      response.phone
    ]
  });

  return (
    <ListContainer
      route={constants.routes.parents}
      labels={labels}
      axios={refresh}
      onFetch={fetchData}
    />
  );
}

export default ParentContainer;
