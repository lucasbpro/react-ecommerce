import {UPDATE_PRODUCT_LIST, ADD_PRODUCT_TO_CART} from './actionTypes';


export function updateProductList(productList) {
    return {
      type: UPDATE_PRODUCT_LIST,
      payload: productList
    };
  }

export function addProductToCart(product) {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: product
  };
}