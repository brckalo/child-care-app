import axios from 'axios';

import {
  useEffect,
  useState
} from 'react';

import constants from '../common/constants';

axios.defaults.baseURL = constants.api.baseURL;

export const useAxios = ({
  url,
  method,
  body
}) => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    if (url && method) {
      setLoading(true);
      setResponse(undefined);
      setError(undefined);

      axios[method](url, body)
        .then(response => {
          setResponse(response.data);
        })
        .catch(error => {
          setError(error?.response?.data?.message || error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [url, method, body]);

  return {
    loading,
    response,
    error
  };
}

export const useAxiosAll = ({ endpoints }) => {
  const [responses, setResponses] = useState(undefined);

  useEffect(() => {
    axios
      .all(endpoints.map(endpoint => axios.get(endpoint)))
      .then(response => response.reduce((total, r) => [...total, r.data], []))
      .then(data => {
        setResponses(data);
      });
  }, []);

  return { responses };
}
