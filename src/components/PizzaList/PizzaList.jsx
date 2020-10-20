import React, {useContext, useEffect} from 'react';
import { Context } from '../../context/Context';
import { SET_CATALOGUE } from '../../context/types';
import api from '../../api/api';

import Container from '@material-ui/core/Container';
import PizzaCard from './PizzaCard.jsx';

function PizzaList() {
  const { state, dispatch } = useContext(Context);

  const loadCatalogue = () => {
    console.log('load');
  
    api.get('/pizza_list').then(data => {
      console.log(data);
      
      dispatch({
        type: SET_CATALOGUE,
        payload: data,
      });
    });
  };

  useEffect(() => {
    if (state.catalogue.length === 0) {
      console.log('loading')
      loadCatalogue();
    }
  }, []);

  return (
    <Container>
      {
        state.catalogue.map(el => (
          <PizzaCard pizza={el} key={`pizza-${el.id}`} />
        ))
      }
    </Container>
  );
};

export default PizzaList;