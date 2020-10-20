import * as types from './types.js';

export const initialState = {
  catalogue: [],
  user: null,
  delivery_cost: {},
  order: [],
};

export function reducer(state, action) {
  const {type, payload} = action;

  switch (type) {
    case types.SET_CATALOGUE: {
      return {
        ...state,
        catalogue: payload,
      };
    }
    default:
      return state;
  }
};
