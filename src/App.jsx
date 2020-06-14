import React, {useEffect} from 'react'

import {Cards, Chart, CountryPicker} from './components';
import {useFetch} from './hooks';
import styles from './App.module.css';


const App = () => {
  const [{isLoading, data, error}, setIsLoading] = useFetch();

  useEffect(() => setIsLoading(true), [setIsLoading]);
  

  if (isLoading) {
    return <h3>Loading...</h3>
  };

  if (error) {
    return (
      <div>
        <h3>Something was wrong!!!</h3>
        <p>{error.message}</p>
      </div>
    );
  }


  return data ? (
    <div className={styles.container}>
      <Cards data={data} />
      <Chart />
      <CountryPicker />
    </div>
  ) : null;
};

export default App
