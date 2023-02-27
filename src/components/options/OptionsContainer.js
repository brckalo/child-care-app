import {
  Button,
  ButtonGroup,
  Col,
  Row
} from 'react-bootstrap';
import { 
  FaPen,
  FaPlus,
  FaTrash
} from 'react-icons/fa';

const OptionsContainer = ({ 
  selected,
  handleOnCreate,
  handleOnEdit,
  handleOnDelete
}) => {
  return (
    <Row className='text-center'>
      <Col>
        <ButtonGroup>
          <Button
            variant='dark'
            onClick={handleOnCreate}
          >
            <FaPlus />
          </Button>
          <Button
            disabled={selected === undefined}
            variant='dark'
            onClick={handleOnEdit}
          >
            <FaPen />
          </Button>
          <Button
            disabled={selected === undefined}
            variant='danger'
            onClick={handleOnDelete}
          >
            <FaTrash />
          </Button>
        </ButtonGroup>
      </Col>
    </Row>
  );
}

export default OptionsContainer;
