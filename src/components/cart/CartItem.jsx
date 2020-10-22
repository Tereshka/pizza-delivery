import React, { useContext } from 'react';

import { Context } from '../../context/Context';
import { CURRENCY } from '../../context/reducer';
import { RISE_COUNT, DECREASE_COUNT, REMOVE_FROM_ORDER } from '../../context/types';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, ButtonGroup, Button, IconButton } from '@material-ui/core';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

const useStyles = makeStyles((theme) => ({
  image: {
    width: '100%',
    height: '100%',
  },
  buttonCounter: {
    pointerEvents: 'none',
  },
}));

function CartItem(props) {
  const { state, dispatch } = useContext(Context);
  const { catalogue, currency } = state;
  const { pizza_id, count, price_RUB, price_USD, price_EUR} = props.order;

  const currentPizza = catalogue.find(el => el.id === pizza_id);
  const { name, image, description} = currentPizza;

  const currentCurrency = currency === CURRENCY.RUB
    ? price_RUB
    : currency === CURRENCY.USD
      ? price_USD : price_EUR;

  function handlePlusButton() {
    dispatch({
      type: RISE_COUNT,
      payload: pizza_id,
    });
  }

  function handleMinusButton() {
    dispatch({
      type: DECREASE_COUNT,
      payload: pizza_id,
    });
  }

  function removeFromOrder() {
    dispatch({
      type: REMOVE_FROM_ORDER,
      payload: pizza_id,
    });
  }

  const classes = useStyles();
  return (
    <Grid container alignItems="center" m={3}>
      <Grid item xs={2} sm={2} md={2} lg={2}>
        <img alt={name} src={image} className={classes.image} />
      </Grid>
      <Grid item xs sm md lg>
        <Typography variant="h6" style={{}}>
          {name}
        </Typography>
        <Typography variant="body1" style={{}}>
          {description}
        </Typography>
      </Grid>
      <Grid item xs={2} sm={2} md={2} lg={2} >
        <ButtonGroup size="large" color="primary" aria-label="outlined primary button group">
          <Button variant="outlined" onClick={handleMinusButton} >-</Button>
          <Button variant="outlined" className={classes.buttonCounter} >{count}</Button>
          <Button variant="outlined" onClick={handlePlusButton} >+</Button>
        </ButtonGroup>
      </Grid>
      <Grid item xs={1} sm={1} md={1} lg={1} >
        <Typography variant="h6" style={{}}>
          {`${(currentCurrency * count).toFixed(2)} ${currency.sign}`}
        </Typography>
        <Typography variant="body1" style={{}}>
          {`${currentCurrency} ${currency.sign}`}
        </Typography>
      </Grid>
      <Grid item xs={1} sm={1} md={1} lg={1} >
        <IconButton aria-label="remove from cart" onClick={removeFromOrder}>
          <DeleteForeverOutlinedIcon color="primary" />
        </IconButton>
      </Grid>
    </Grid>
  );
}
export default CartItem;