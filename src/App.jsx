import React, {useEffect, useState} from 'react'

import {Cards, Chart, CountryPicker} from './components';
import {useFetch} from './hooks';
import styles from './App.module.css';


const App = () => {
  const [url, setUrl] = useState(``);
  const [country, setCountry] = useState(``);
  const [{isLoading, data, error}, setIsLoading] = useFetch(url);

  useEffect(() => setIsLoading(true), [setIsLoading, url]);

  const handleCountyChange = ({target}) => {
    if (target.value === `Global`) {
      setCountry(``);
      setUrl(``);
      return;
    }
    setCountry(target.value);
    setUrl(`/countries/${target.value}`);
  };

  return (
    <div className={styles.container}>
      <Cards isLoading={isLoading} data={data} error={error} />
      <CountryPicker country={country} handleCountyChange={handleCountyChange} />
      <Chart data={data} country={country} />
    </div>
  );
};

export default App
