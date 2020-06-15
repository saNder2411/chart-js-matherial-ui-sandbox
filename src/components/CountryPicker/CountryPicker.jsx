import React, {useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';

import {EndPointService} from '../../service';
import {useFetch} from '../../hooks';
import styles from './CountryPicker.module.css';

const CountryPicker = ({handleCountyChange}) => {

  const [{isLoading, data, error}, setIsLoading] = useFetch(EndPointService.COUNTRIES);

  useEffect(() => setIsLoading(true), [setIsLoading]);

  if (isLoading) {
    return <p>Loading...</p>
  };

  if (error) {
    return (
      <div>
        <h3>Something was wrong!!!</h3>
        <p>{error.message}</p>
      </div>
    );
  }

  const modifiedData = data && data.countries.map(({name}) => name);

  return modifiedData ? (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={handleCountyChange}>
        <option value="">Global</option>
        {modifiedData.map((country) => <option key={country} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  ) : null;
}

export default CountryPicker;
