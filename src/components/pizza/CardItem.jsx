import React, { useContext } from 'react';
import { Context } from '../../context/Context';
import { CURRENCY } from '../../context/reducer';
import { ADD_TO_ORDER, REMOVE_FROM_ORDER } from '../../context/types';

import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
} from '@material-ui/core';

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function CardItem(props) {
  const { state, dispatch } = useContext(Context);
  const {currency, order} = state;
  const { id, name, description, image, ingredients, price_RUB, price_USD, price_EUR } = props.pizza;
  
  const currentCurrency = currency === CURRENCY.RUB
    ? price_RUB
    : currency === CURRENCY.USD
      ? price_USD : price_EUR;

  function cardTitle() {
    return (
      <>
        <Typography variant="h6" style={{ fontWeight: 'bold' }} component="span">
          {`${name}, `}
        </Typography>
        <Typography variant="h6" color="primary" component="span">
          {`${currentCurrency}${currency.sign}`}
        </Typography>
      </>
    );
  }

  function cartIcon() {
    const inCart = order.find(el => el.pizza_id === id);
    if (inCart) {
      return (
        <IconButton aria-label="remove from cart" onClick={removeFromOrder}>
          <ShoppingCartIcon color="primary" />
        </IconButton>);
    }
    return (
      <IconButton aria-label="add to cart" onClick={addToOrder}>
        <ShoppingCartOutlinedIcon />
      </IconButton>);
  }

  function addToOrder() {
    dispatch({
      type: ADD_TO_ORDER,
      payload: {
        pizza_id: id,
        price_RUB,
        price_USD,
        price_EUR,
      },
    });
  }

  function removeFromOrder() {
    dispatch({
      type: REMOVE_FROM_ORDER,
      payload: id,
    });
  }

  return (
    <Card>
      <CardHeader
        title={cardTitle()}
        subheader={description}
        action={
          cartIcon()
        }
      />
      <CardMedia
        style={{paddingTop: '50%'}}
        // className={classes.media}
        image={image}
        title={name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {ingredients}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardItem;