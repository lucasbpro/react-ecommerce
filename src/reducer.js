import {UPDATE_PRODUCT_LIST, ADD_PRODUCT_TO_CART} from './actionTypes';

const initialState = {
    productList: [],
    shoppingCart: []
};

export function reducer(state = initialState, action) {
    switch (action.type) {
      case UPDATE_PRODUCT_LIST: {
          return {
              ...state,
              productList: action.payload
          };
      }

      case ADD_PRODUCT_TO_CART: {
        const oldCart = state.shoppingCart;
        return {
            ...state,
            shoppingCart: [oldCart, action.payload]
        };
    }

      default:
          return state;
    }
}