import React, { useContext } from 'react';

import { Context } from '../../context/Context'

import { Grid, Typography } from '@material-ui/core';

function SumRow() {
  const { state } = useContext(Context);
  const { currency, deliveryCost, order } = state;

  let sum = order.map(el => el.count * el[`price_${currency.name}`]).reduce((acc, sum) => acc + sum);
  sum = (sum + deliveryCost[currency.name]).toFixed(2);

  return (
    <Grid container alignItems="center" m={3}>
      <Grid item xs sm md lg>
        <Typography variant="h6" style={{}}>
          Total SUM
        </Typography>
      </Grid>
      <Grid item xs={2} sm={2} md={2} lg={2} >
        <Typography variant="h6" style={{}}>
          {`${sum} ${currency.sign}`}
        </Typography>
      </Grid>
    </Grid>
  );
}
export default SumRow;