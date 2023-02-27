import {
  useEffect,
  useState
} from 'react';
import {
  useNavigate,
  useOutletContext
} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

import constants from '../../../common/constants';

import { 
  useAxios,
  useAxiosAll
} from '../../../hooks/useAxios';

import ChildModal from './ChildModal';

const initItem = {
  name: '',
  surname: '',
  age: 0,
  parentId: '',
  babysitterId: ''
};

const schema = yup.object({
  name: yup.string().required(),
  surname: yup.string().required(),
  age: yup.number().positive().required(),
  parentId: yup.string().required(),
  babysitterId: yup.string().required()
}).required();

const ChildModalContainer = () => {
  const [parents, setParents] = useState(undefined);
  const [babysitters, setBabysitters] = useState(undefined);
  const [item, setItem] = useState(initItem);
  const [options, setOptions] = useState({});
  const [show, setShow] = useState(true);

  const navigate = useNavigate();

  const {
    formState: {
      isSubmitted,
      isValid,
      errors
    },
    handleSubmit,
    reset,
    control
  } = useForm({
    values: item,
    resolver: yupResolver(schema)
  });

  const { t } = useTranslation();

  const {
    loading,
    response,
    error
  } = useAxios(options);
  const { responses } = useAxiosAll({
    endpoints: [
      constants.api.parents,
      constants.api.babysitters
    ]
  });

  const [outlet, onOutlet] = useOutletContext();

  const labels = {
    title: t('Edit a child'),
    name: t('Name'),
    surname: t('Surname'),
    age: t('Age'),
    parent: t('Parent'),
    babysitter: t('Babysitter'),
    save: t('Save'),
    discard: t('Discard')
  };

  useEffect(() => {
    if (response === '') {
      setShow(false);

      onOutlet();
    }

    reset(item);
  }, [response, isSubmitted]);

  useEffect(() => {
    if (responses) {
      setParents(responses[0]);
      setBabysitters(responses[1]);
    }
  }, [responses]);

  useEffect(() => {
    setItem(!outlet?.hasOwnProperty('id') ? initItem : outlet);
  }, [outlet]);

  const onSubmit = data => {
    setItem(data);
    setOptions({
      url: constants.api.children,
      method: data.hasOwnProperty('id') ? constants.api.methods.put : constants.api.methods.post,
      body: data
    });
  }

  const handleOnClose = () => {
    setShow(false);

    navigate(-1);
  }

  return (
    <ChildModal
      labels={labels}
      parents={parents}
      babysitters={babysitters}
      loading={loading}
      error={error}
      validations={errors}
      control={control}
      isValid={isValid}
      show={show}
      handleOnSubmit={handleSubmit(onSubmit)}
      handleOnClose={handleOnClose}
    />
  );
}

export default ChildModalContainer;
