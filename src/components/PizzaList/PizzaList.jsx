import React, { useContext, useEffect } from 'react';
import { Context } from '../../context/Context';
import { SET_CATALOGUE } from '../../context/types';
import api from '../../api/api';

import Grid from '@material-ui/core/Grid';
import PizzaCard from './PizzaCard.jsx';

function PizzaList() {
  const { state, dispatch } = useContext(Context);
  const { catalogue } = state;

  const loadCatalogue = () => {
    api.get('/pizza_list').then(data => {
      dispatch({
        type: SET_CATALOGUE,
        payload: data,
      });
    });
  };

  useEffect(() => {
    if (catalogue.length === 0) {
      loadCatalogue();
    }
  }, []);

  return (
    <Grid container spacing={3}>
      {
        catalogue.map(el => (
          <Grid  key={`pizza-${el.id}`} item xs={12} sm={6} md={4} lg={3} >
            <PizzaCard pizza={el} />
          </Grid>
        ))
      }
    </Grid>
  );
};

export default PizzaList;