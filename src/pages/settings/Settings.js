import {
  Form,
  FormSelect,
  Modal
} from 'react-bootstrap';

const Settings = ({
  labels,
  languages,
  show,
  selected,
  handleOnChange,
  handleOnClose
}) => {
  return (
    <Modal
      centered
      show={show}
    >
      <Modal.Header
        closeButton
        onHide={handleOnClose}
      >
        <Modal.Title>
          {labels.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className='mb-3'>
          <Form.Label>
            {labels.langugage}
          </Form.Label>
          <FormSelect
            onChange={handleOnChange}
            value={selected}
          >
            {languages.map(language =>
              <option
                key={language.code}
                value={language.code}
              >
                {language.display}
              </option>
            )}
          </FormSelect>
        </Form.Group>
      </Modal.Body>
    </Modal>
  );
}

export default Settings;
