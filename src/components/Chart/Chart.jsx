import React, {useEffect} from 'react';
import {Line, Bar} from 'react-chartjs-2';

import {EndPointService} from '../../service';
import {useFetch} from '../../hooks';
import styles from './Chart.module.css';


const Chart = () => {
  const [{isLoading, data, error}, setIsLoading] = useFetch(EndPointService.DAILY);

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
  console.log(data);

  return (
    <div>
      Chart
    </div>
  )
}

export default Chart;
