import React, { useContext } from 'react';

import { Context } from '../../context/Context';
import { CURRENCY } from '../../context/reducer'

import { Grid, Typography } from '@material-ui/core';

function DeliveryRow() {
  const { state } = useContext(Context);
  const { currency, deliveryCost } = state;

  const currentCurrency = currency === CURRENCY.RUB
    ? deliveryCost.RUB
    : currency === CURRENCY.USD
      ? deliveryCost.USD : deliveryCost.EUR;

  return (
    <Grid container alignItems="center" m={3}>
      <Grid item xs sm md lg>
        <Typography variant="h6" style={{}}>
          Delivery cost
        </Typography>
      </Grid>
      <Grid item xs={2} sm={2} md={2} lg={2} >
        <Typography variant="h6" style={{}}>
          {`${currentCurrency} ${currency.sign}`}
        </Typography>
      </Grid>
    </Grid>
  );
}
export default DeliveryRow;