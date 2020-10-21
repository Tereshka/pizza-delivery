import * as types from './types.js';

export const CURRENCY = {
  RUB: {
    name: 'RUB',
    sign: '₽',
  },
  USD: {
    name: 'USD',
    sign: '$',
  },
  EUR: {
    name: 'EUR',
    sign: '€',
  },
};

export const initialState = {
  catalogue: [],
  currency: CURRENCY.USD,
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

    case types.ADD_TO_ORDER: {
      const order = [...state.order];
      const {pizza_id, price_RUB, price_USD, price_EUR} = payload;
      order.push({
        pizza_id,
        count: 1,
        price_RUB,
        price_USD,
        price_EUR,
      });
      return {
        ...state,
        order,
      };
    }

    case types.REMOVE_FROM_ORDER: {
      const order = [...state.order].filter(el => el.pizza_id !== payload);
      return {
        ...state,
        order,
      };
    }
    
    case types.UPDATE_CURRENCY: {
      return {
        ...state,
        currency: payload,
      };
    }

    default:
      return state;
  }
};
