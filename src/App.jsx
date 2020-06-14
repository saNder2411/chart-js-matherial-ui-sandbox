import React, {useState, useEffect} from 'react'

import {Cards, Chart, CountryPicker} from './components';
import {fetchData} from './service';
import styles from './App.module.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [request] = useState(() => fetchData);

  useEffect(() => setIsLoading(true), []);

  useEffect(() => {
    let canceled = false;

    if (!isLoading) return;

    request()
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
  }, [isLoading, request]);

  if (isLoading) {
    return <h3>Loading...</h3>
  };

  if (error) {
    console.log(error);
    return (
      <div>
        <h3>Something was wrong!!!</h3>
        <p>{error.message}</p>
      </div>
    );
  }

  console.log(data);


  return (
    <div className={styles.container}>
      <Cards />
      <Chart />
      <CountryPicker />
    </div>
  )
}

export default App
