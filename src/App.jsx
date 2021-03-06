import React, {useEffect, useState} from 'react'

import {Cards, Chart, CountryPicker} from './components';
import {useFetch} from './hooks';
import styles from './App.module.css';
import coronaImage from './images/image.png';


const App = () => {
  const [url, setUrl] = useState(``);
  const [country, setCountry] = useState(``);
  const [{isLoading, data, error}, setIsLoading] = useFetch(url);

  useEffect(() => setIsLoading(true), [setIsLoading, url]);

  const handleCountyChange = ({target}) => {
    const countryUrl = target.value ? `/countries/${target.value}` : ``;

    setCountry(target.value);
    setUrl(countryUrl);
  };

  return (
    <div className={styles.container}>
      <img className={styles.image} src={coronaImage} alt="COVID-19" />
      <Cards isLoading={isLoading} data={data} error={error} />
      <CountryPicker country={country} handleCountyChange={handleCountyChange} />
      <Chart data={data} country={country} />
    </div>
  );
};

export default App
