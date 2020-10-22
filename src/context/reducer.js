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
  isLoading: false,
  catalogue: [],
  currency: CURRENCY.USD,
  deliveryCost: undefined,
  user: null,
  order: JSON.parse(localStorage.getItem('order')) || [],
};

export function reducer(state, action) {
  const {type, payload} = action;

  switch (type) {
    case types.SET_LOADING: {
      return {
        ...state,
        isLoading: payload,
      };
    }

    case types.SET_DELIVERY_COST: {
      return {
        ...state,
        deliveryCost: payload,
      };
    }

    case types.SET_CATALOGUE: {
      // localStorage.setItem('catalogue', JSON.stringify(payload));
      return {
        ...state,
        catalogue: payload,
      };
    }

    case types.ADD_TO_ORDER: {
      const order = [...state.order];
      const { pizza_id, price_RUB, price_USD, price_EUR } = payload;
      order.push({
        pizza_id,
        count: 1,
        price_RUB,
        price_USD,
        price_EUR,
      });

      localStorage.setItem('order', JSON.stringify(order));
      return {
        ...state,
        order,
      };
    }

    case types.REMOVE_FROM_ORDER: {
      const order = [...state.order].filter(el => el.pizza_id !== payload);

      localStorage.setItem('order', JSON.stringify(order));
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

    case types.RISE_COUNT: {
      const order = [...state.order];
      let currentOrder = order.find(el => el.pizza_id === payload);
      currentOrder.count++;
      return {
        ...state,
        order,
      };
    }

    case types.DECREASE_COUNT: {
      const order = [...state.order];
      let currentOrder = order.find(el => el.pizza_id === payload);
      if (currentOrder.count > 0) currentOrder.count--;
      return {
        ...state,
        order,
      };
    }

    default:
      return state;
  }
};
