import React, { createContext, useReducer } from 'react';
import {initialState, reducer} from './reducer';

const Context = createContext();

function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{state, dispatch}}>
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };