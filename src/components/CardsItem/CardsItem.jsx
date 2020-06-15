import React from 'react'
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

const CardsItem = ({data, keyData, stylesCommon, stylesDetail, label, text}) => {

  if (!data) {
    return <p>Loading...</p>
  }

  return (
    <Grid item component={Card} xs={12} md={3} className={cx(stylesCommon, stylesDetail)}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>{label}</Typography>
        <Typography variant="h5">
          <CountUp start={0} end={data[keyData].value} duration={3} separator=" " />
        </Typography>
        <Typography color="textSecondary">{new Date(data.lastUpdate).toDateString()}</Typography>
        <Typography variant="body2">{text}</Typography>
      </CardContent>
    </Grid>
  )
}

export default CardsItem;
