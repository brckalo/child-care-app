import {
  useEffect,
  useState
} from 'react';
import { useNavigate } from 'react-router-dom';

import constants from '../../common/constants';

import { useAxios } from '../../hooks/useAxios';

import List from './List';

const ListContainer = ({
  route,
  labels,
  axios,
  onFetch
}) => {
  const [refresh, setRefresh] = useState(axios);
  const [items, setItems] = useState(undefined);
  const [selected, setSelected] = useState(undefined);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);

  const navigate = useNavigate();

  const {
    loading,
    response,
    error
  } = useAxios(refresh);

  useEffect(() => {
    if (response) {
      setTotal(Math.ceil(response.length / constants.pagination.size));

      const start = page * constants.pagination.size;
      const end = start + constants.pagination.size;

      fetchData(start, end);
    }
  }, [response, page]);

  const fetchData = (start, end) => {
    setItems(response.slice(start, end).map(onFetch));
  }

  const handleOnPaginate = page => {
    setPage(page);
  }

  const handleOnSelect = id => {
    setSelected(response.find(r => r.id === id));
  }

  const handleOnCreate = () => {
    setSelected(undefined);
    setRefresh({});

    navigate(`${route}/new`);
  }

  const handleOnEdit = () => {
    setRefresh({});

    navigate(`${route}/${selected.id}`);
  }

  const handleOnDelete = () => {
    //
  }

  const handleOnSubmit = () => {
    setRefresh(axios);
    setSelected(undefined);

    navigate(route);
  }

  return (
    <List
      labels={labels}
      loading={loading}
      items={items}
      error={error}
      selected={selected}
      total={total}
      page={page}
      handleOnPaginate={handleOnPaginate}
      handleOnSelect={handleOnSelect}
      handleOnCreate={handleOnCreate}
      handleOnEdit={handleOnEdit}
      handleOnDelete={handleOnDelete}
      handleOnSubmit={handleOnSubmit}
    />
  );
}

export default ListContainer;
