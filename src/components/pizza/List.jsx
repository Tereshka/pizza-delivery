import React, { useContext } from 'react';
import { Context } from '../../context/Context';

import {Grid, Box} from '@material-ui/core';
import {default as PizzaCard} from './CardItem.jsx';

function List() {
  const { state } = useContext(Context);
  const { catalogue } = state;

  return (
    <Box m={3}>
      <Grid container spacing={3}>
        {
          catalogue.map(el => (
            <Grid  key={`pizza-${el.id}`} item xs={12} sm={6} md={4} lg={3} >
              <PizzaCard pizza={el} />
            </Grid>
          ))
        }
      </Grid>
    </Box>
  );
};

export default List;