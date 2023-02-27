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

import { useAxios } from '../../../hooks/useAxios';

import BabysitterModal from './BabysitterModal';

const initItem = {
  name: '',
  surname: '',
  phone: '+387 ',
  hourly: 0,
  isAvailable: false
};

const schema = yup.object({
  name: yup.string().required(),
  surname: yup.string().required(),
  phone: yup.string().required(),
  hourly: yup.number().positive().required(),
  isAvailable: yup.bool().required()
}).required();

const BabysitterModalContainer = () => {
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

  const [outlet, onOutlet] = useOutletContext();

  const labels = {
    title: t('Edit a babysitter'),
    name: t('Name'),
    surname: t('Surname'),
    phone: t('Phone'),
    hourly: t('Hourly'),
    isAvailable: t('Is available?'),
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
    setItem(!outlet?.hasOwnProperty('id') ? initItem : outlet);
  }, [outlet]);

  const onSubmit = data => {
    setItem(data);
    setOptions({
      url: constants.api.babysitters,
      method: data.hasOwnProperty('id') ? constants.api.methods.put : constants.api.methods.post,
      body: data
    });
  }

  const handleOnClose = () => {
    setShow(false);

    navigate(-1);
  }

  return (
    <BabysitterModal
      labels={labels}
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

export default BabysitterModalContainer;
