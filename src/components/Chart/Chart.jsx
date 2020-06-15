import React, {useEffect} from 'react';
import {Line, Bar} from 'react-chartjs-2';

import {EndPointService} from '../../service';
import {useFetch} from '../../hooks';
import styles from './Chart.module.css';


const Chart = ({data, country}) => {
  const [{isLoading, data: dailyData, error}, setIsLoading] = useFetch(EndPointService.DAILY);

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

  const modifiedData = dailyData && dailyData.map(({confirmed, deaths, reportDate}) => ({
    confirmed: confirmed.total,
    deaths: deaths.total,
    date: reportDate,
  }))

  const lineChart = (
    modifiedData
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
      ) : null
  );

  console.log(data)

  const barChart = (
    data
      ? (
        <Bar
          data={{
            labels: [`Infected`, `Recovered`, `Deaths`],
            datasets: [{
              label: `People`,
              backgroundColor: [`rgba(0, 0, 250, 0.5)`, `rgba(0, 250, 0, 0.5)`, `rgba(250, 0, 0, 0.5)`],
              data: [data.confirmed.value, data.recovered.value, data.deaths.value],
            }]
          }}
          options={{
            legend: {display: false},
            title: {display: true, text: `Current state in ${country}`},
          }} />
      ) : null
  );

  return (
    <div className={styles.container}>
      {country ? barChart : lineChart}
    </div>
  )
}

export default Chart;
