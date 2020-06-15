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

  const modifiedData = data && data.map(({confirmed, deaths, reportDate}) => ({
    confirmed: confirmed.total,
    deaths: deaths.total,
    date: reportDate,
  }))

  const lineChart = modifiedData
    ? (
        <Line 
          data={{
              labels: modifiedData.map(({date}) => date),
              datasets: [
                {
                  label: `Infected`,
                  data: modifiedData.map(({confirmed}) => confirmed),
                  borderColor: `#3333ff`,
                  fill: true,
                },
                {
                  label: `Deaths`,
                  data: modifiedData.map(({deaths}) => deaths),
                  borderColor: `red`,
                  backgroundColor: `rgba(255, 0, 0, 0.5)`,
                  fill: true,
                },
                ],
            }} />
      )
    : null;

  return (
    <div className={styles.container}>
      {lineChart}
    </div>
  )
}

export default Chart;
