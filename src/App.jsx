import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header.jsx';
import PizzaList from './components/PizzaList/PizzaList.jsx';

import './App.css';

function App() {
  return (
    <>
    <Header />
    <Switch>
      <Route exact path="/">
        <PizzaList />
      </Route>

      <Route path="/cart">
        {/* <Cart /> */}
      </Route>
    </Switch>
  </>
  );
}

export default App;
