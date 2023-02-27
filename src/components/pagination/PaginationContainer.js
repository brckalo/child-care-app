import { Pagination } from 'react-bootstrap';

const PaginationContainer = ({
  total,
  page,
  handleOnPaginate
}) => {
  return (
    <Pagination style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
      <Pagination.Prev
        disabled={page === 0} 
        onClick={() => handleOnPaginate(page - 1)}
      />
      <Pagination.Item active>
        {page + 1}
      </Pagination.Item>
      <Pagination.Ellipsis />
      <Pagination.Item>
        {total}
      </Pagination.Item>
      <Pagination.Next
        disabled={page === total - 1}
        onClick={() => handleOnPaginate(page + 1)} 
      />
    </Pagination>
  );
}

export default PaginationContainer;
