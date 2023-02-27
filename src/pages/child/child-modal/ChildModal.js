import { Controller } from 'react-hook-form';
import {
  Button,
  Form,
  FormControl,
  FormSelect,
  Modal
} from 'react-bootstrap';

import NotificationContainer from '../../../components/notification/NotificationContainer';

const ChildModal = ({
  labels,
  parents,
  babysitters,
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
                {labels.age}
              </Form.Label>
              <Controller
                name='age'
                control={control}
                render={({ field }) =>
                  <FormControl
                    isInvalid={validations?.age}
                    type='number'
                    {...field}
                  />
                }
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>
                {labels.parent}
              </Form.Label>
              <Controller
                name='parentId'
                control={control}
                render={({ field }) =>
                  <FormSelect
                    isInvalid={validations?.parentId}
                    {...field}
                  >
                    {parents && parents.map(parent =>
                      <option
                        key={parent.id}
                        value={parent.id}
                      >
                        {parent.name} {parent.surname}
                      </option>
                    )}
                  </FormSelect>
                }
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>
                {labels.babysitter}
              </Form.Label>
              <Controller
                name='babysitterId'
                control={control}
                render={({ field }) =>
                  <FormSelect
                    isInvalid={validations?.babysitterId}
                    {...field}
                  >
                    {babysitters && babysitters.map(babysitter =>
                      <option
                        key={babysitter.id}
                        value={babysitter.id} 
                      >
                        {babysitter.name} {babysitter.surname}
                      </option>
                    )}
                  </FormSelect>
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

export default ChildModal;
