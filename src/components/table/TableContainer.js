import { Table } from 'react-bootstrap';

const TableContainer = ({
  labels,
  items,
  selected,
  handleOnSelect
}) => {
  return (
    <Table
      bordered
      hover
      responsive
      striped
      style={{
        tableLayout: 'fixed'
      }}
    >
      <thead>
        <tr>
          {labels &&
          labels.map(label =>
            <td key={label}>
              {label}
            </td>
          )}
        </tr>
      </thead>
      <tbody>
        {items &&
        items.map(item =>
          <tr 
            key={item.id}
            className={item.id === selected ? 'bg-warning' : ''}
            onClick={() => handleOnSelect(item.id)}
          >
            {item.display.map((i, idx) =>
              <td key={idx}>
                {i}
              </td>
            )}
          </tr>
        )}
      </tbody>
    </Table>
  );
}

export default TableContainer;
