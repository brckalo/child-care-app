import { Outlet } from 'react-router-dom';
import { Stack } from 'react-bootstrap';

import LoadingContainer from '../loading/LoadingContainer';
import NotificationContainer from '../notification/NotificationContainer';
import OptionsContainer from '../options/OptionsContainer';
import PaginationContainer from '../pagination/PaginationContainer';
import TableContainer from '../table/TableContainer';

const List = ({
  labels,
  loading,
  items,
  error,
  selected,
  total,
  page,
  handleOnPaginate,
  handleOnSelect,
  handleOnCreate,
  handleOnEdit,
  handleOnDelete,
  handleOnSubmit
}) => {
  return (
    <Stack
      gap={3}
      className='my-3'
    >
      {error && <NotificationContainer message={error} />}
      <OptionsContainer
        selected={selected?.id}
        handleOnCreate={handleOnCreate}
        handleOnEdit={handleOnEdit}
        handleOnDelete={handleOnDelete}
      />
      {(!loading && error === undefined) ? 
      <TableContainer
        labels={labels}
        items={items}
        selected={selected?.id}
        handleOnSelect={handleOnSelect}
      /> : 
      <LoadingContainer />}
      {total > 1 &&
      <PaginationContainer
        total={total}
        page={page}
        handleOnPaginate={handleOnPaginate}
      />}
      <Outlet context={[selected, handleOnSubmit]} />
    </Stack>
  );
}

export default List;
