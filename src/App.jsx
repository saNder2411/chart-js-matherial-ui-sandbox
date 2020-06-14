import React, {useEffect} from 'react'

import {Cards, Chart, CountryPicker} from './components';
import {useFetch} from './hooks';
import styles from './App.module.css';


const App = () => {
  const [{isLoading, data, error}, doRequest] = useFetch();

  useEffect(() => doRequest(true), [doRequest]);
  

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
