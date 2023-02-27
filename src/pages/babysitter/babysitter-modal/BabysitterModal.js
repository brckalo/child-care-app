import { Controller } from 'react-hook-form';
import {
  Button,
  Form,
  FormControl,
  InputGroup,
  Modal
} from 'react-bootstrap';

import NotificationContainer from '../../../components/notification/NotificationContainer';

const BabysitterModal = ({
  labels,
  loading,
  error,
  validations,
  control,
  isValid,
  show,
  handleOnSubmit,
  handleOnClose
}) => {
  return (
    <>
      {error && <NotificationContainer message={error} />}
      <Modal
        centered
        show={show}
      >
        <Modal.Header>
          <Modal.Title>
            {labels.title}
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleOnSubmit}>
          <Modal.Body>
            <Form.Group className='mb-3'>
              <Form.Label>
                {labels.name}
              </Form.Label>
              <Controller
                name='name'
                control={control}
                render={({ field }) =>
                  <FormControl
                    isInvalid={validations?.name}
                    {...field}
                  />
                }
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>
                {labels.surname}
              </Form.Label>
              <Controller
                name='surname'
                control={control}
                render={({ field }) =>
                  <FormControl
                    isInvalid={validations?.surname}
                    {...field}
                  />
                }
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>
                {labels.phone}
              </Form.Label>
              <Controller
                name='phone'
                control={control}
                render={({ field }) =>
                  <FormControl
                    isInvalid={validations?.phone}
                    {...field}
                  />
                }
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>
                {labels.hourly}
              </Form.Label>
              <Controller
                name='hourly'
                control={control}
                render={({ field }) =>
                  <InputGroup>
                    <FormControl
                      isInvalid={validations?.hourly}
                      type='number'
                      {...field}
                    />
                    <InputGroup.Text>
                      EUR
                    </InputGroup.Text>
                  </InputGroup>
                }
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Controller
                name='isAvailable'
                control={control}
                render={({ field }) =>
                  <Form.Check
                    label={labels.isAvailable}
                    type='switch'
                    checked={field.value}
                    {...field}
                  />
                }
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              disabled={!isValid || loading}
              type='submit'
              variant='primary'
            >
              {labels.save}
            </Button>
            <Button
              variant='secondary'
              onClick={handleOnClose}
            >
              {labels.discard}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default BabysitterModal;
