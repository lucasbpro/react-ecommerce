import {UPDATE_PRODUCT_LIST, 
        ADD_PRODUCT_TO_CART, 
        TOGGLE_CART_VISIBILITY,
        TOGGLE_SEARCH_WINDOW_VISIBILITY,
        UPDATE_STYLE_ON_VIEW, 
        UPDATE_SIZE_ON_VIEW,
        UPDATE_AMOUNT_CARTITEM } from './actionTypes';

export function updateProductList(productList) {
    return {
      type: UPDATE_PRODUCT_LIST,
      payload: productList
    };
  }

export function addItemToCart(cartItem) {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: cartItem
  };
}

export function toggleShoppingCart() {
  return {
    type: TOGGLE_CART_VISIBILITY
  };
}

export function toggleSearchWindow() {
  return {
    type: TOGGLE_SEARCH_WINDOW_VISIBILITY
  };
}

export function updateStyleOnView(style) {
  return {
    type: UPDATE_STYLE_ON_VIEW,
    payload: style
  };
}

export function updateSizeOnView(size) {
  return {
    type: UPDATE_SIZE_ON_VIEW,
    payload: size
  };
}

export function updateItemAmount(index,delta){
  return {
    type: UPDATE_AMOUNT_CARTITEM,
    payload: {index, delta}
  }
}