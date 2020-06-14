import {useState, useEffect} from 'react'
import {fetchData} from '../service';

const useFetch = (url) => {

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [request] = useState(() => fetchData);

  useEffect(() => {
    let canceled = false;

    if (!isLoading) return;

    request(url)
      .then(({data}) => {
        if (canceled) return;

        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        if (canceled) return;

         setError(error);
         setIsLoading(false);
      });

    return () => canceled = true;
  }, [isLoading, request, url]);

  return [{isLoading, data, error}, setIsLoading];

};


export default useFetch;