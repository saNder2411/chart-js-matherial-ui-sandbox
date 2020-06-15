import React from 'react'
import {Grid} from '@material-ui/core';

import CardsItem from '../CardsItem/CardsItem';
import styles from './Cards.module.css';

const Cards = ({data, error}) => {

  if (error) {
    return (
      <div>
        <h3>Something was wrong!!!</h3>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <CardsItem
          data={data}
          keyData="confirmed"
          stylesCommon={styles.card}
          stylesDetail={styles.infected}
          label="Infected"
          text="Number of recoveries from COVID-19" />

        <CardsItem
          data={data}
          keyData="recovered"
          stylesCommon={styles.card}
          stylesDetail={styles.recovered}
          label="Recovered"
          text="Number of active of COVID-19" />

        <CardsItem
          data={data}
          keyData="deaths"
          stylesCommon={styles.card}
          stylesDetail={styles.deaths}
          label="Deaths"
          text="Number of deaths caused by COVID-19" />
      </Grid>
    </div>
  );
}

export default Cards;
