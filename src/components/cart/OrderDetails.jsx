import React, { useContext, useEffect } from 'react';
import { Context } from '../../context/Context';
import { SET_DELIVERY_COST } from '../../context/types.js';
import api from '../../api/api.js';

import { Container, Box, Divider } from '@material-ui/core';
import List from './List';
import DeliveryRow from './DeliveryRow';
import SumRow from './SumRow';

function OrderDetails() {
  const { state, dispatch } = useContext(Context);
  const { order, catalogue, deliveryCost } = state;

  useEffect(() => {
    const loadDeliveryCost = () => {
      api.get('/delivery_cost').then(data => {
        dispatch({
          type: SET_DELIVERY_COST,
          payload: data,
        });
      });
    }

    if (deliveryCost === undefined) {
      loadDeliveryCost();
    }
  }, [deliveryCost, dispatch]);

  return (
    <Box m={3}>
      {order.length === 0
      ? <div>No order</div>
      : catalogue.length > 0
        ? <Container>
          <List />
          {deliveryCost !== undefined && <DeliveryRow />}
          <Divider />
          {deliveryCost !== undefined && <SumRow />}
        </Container>
        : <div>Loading data...</div>
      }
    </Box>
  );
}

export default OrderDetails;