import React, { useContext } from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { Context } from '../../context/Context';
import { CURRENCY } from '../../context/reducer';
import { ADD_TO_ORDER, REMOVE_FROM_ORDER } from '../../context/types';

function PizzaCard(props) {
  const { state, dispatch } = useContext(Context);
  const {currency, order} = state;
  const { id, name, description, image, ingredients, price_RUB, price_USD, price_EUR } = props.pizza;
  
  const currentCurrency = currency === CURRENCY.RUB
    ? price_RUB
    : currency === CURRENCY.USD
      ? price_USD : price_EUR;

  function cartIcon() {
    const inCart = order.find(el => el.pizza_id === id);
    if (inCart) {
      return (
        <IconButton aria-label="remove from cart" onClick={removeFromOrder}>
          <ShoppingCartIcon />
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
        title={name}
        subheader={description}
        action={
          cartIcon()
        }
      />
      <CardMedia
        // className={classes.media}
        image={image}
        title={name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {ingredients}
        </Typography>
        <Typography variant="body1" color="textPrimary" component="p">
          {`${currentCurrency}${currency}`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PizzaCard;