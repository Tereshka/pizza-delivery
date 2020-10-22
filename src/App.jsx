import React, { useContext, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Context } from './context/Context';
import { SET_LOADING, SET_CATALOGUE } from './context/types';
import api from './api/api.js';

import { Box, LinearProgress } from '@material-ui/core';
import Header from './components/header/Header.jsx';
import {default as PizzaList} from './components/pizza/List.jsx';
import Cart from './components/cart/Cart.jsx';

import './App.css';

function App() {
  const { state, dispatch } = useContext(Context);
  const { catalogue, isLoading } = state;

  

  useEffect(() => {
    const loadCatalogue = () => {
      dispatch({
        type: SET_LOADING,
        payload: true,
      });
      api.get('/pizza_list').then(data => {
        dispatch({
          type: SET_CATALOGUE,
          payload: data,
        });
        dispatch({
          type: SET_LOADING,
          payload: false,
        });
      });
    };

    if (catalogue.length === 0) {
      loadCatalogue();
    }
  }, [catalogue, dispatch]);

  return (
    <Box>
      <Header />
      { isLoading && <LinearProgress color="secondary" /> }
      <Switch>
        <Route exact path="/">
          <PizzaList />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </Box>
  );
}

export default App;
