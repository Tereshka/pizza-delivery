import React, { useContext } from 'react';

import { Context } from '../../context/Context';

import { Divider } from '@material-ui/core';
import CartItem from './CartItem';

function List() {
  const { state } = useContext(Context);
  const { order } = state;

  return (
    <>
      {
        order.map((el, i) => (
          <div key={`order-${i}`}>
            <CartItem order={el} />
            <Divider />
          </div>
        ))
      }
    </>
  );
}

export default List;