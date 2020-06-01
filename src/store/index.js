import { createStore } from "redux";

const initialState = {
    productList: [],
    shoppingCart: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_PRODUCT_LIST": {
        return {
            ...state,
            productList: action.payload.productList
        };
    }
    default:
        return state;
  }
}

const store = createStore(reducer);

export default store;
