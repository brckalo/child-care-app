import { useTranslation } from 'react-i18next';
import { Badge } from 'react-bootstrap';

import constants from '../../common/constants';

import ListContainer from '../../components/list/ListContainer';

const ChildContainer = () => {
  const { t } = useTranslation();

  const labels = [
    t('Name'),
    t('Surname'),
    t('Age'),
    t('Parent'),
    t('Babysitter')
  ];
  const refresh = {
    url: constants.api.children,
    method: constants.api.methods.get
  };

  const fetchData = response => ({
    id: response.id,
    display: [
      response.name,
      response.surname,
      response.age,
      <Badge
        bg='dark'
        pill
      >
        {response.parentFullName}
      </Badge>,
      <Badge
        bg='dark'
        pill
      >
        {response.babysitterFullName}
      </Badge>,
    ]
  });

  return (
    <ListContainer
      route={constants.routes.children}
      labels={labels}
      axios={refresh}
      onFetch={fetchData}
    />
  );
}

export default ChildContainer;
