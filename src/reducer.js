import {UPDATE_PRODUCT_LIST, 
        ADD_PRODUCT_TO_CART,
        TOGGLE_CART_VISIBILITY,
        UPDATE_STYLE_ON_VIEW,
        UPDATE_SIZE_ON_VIEW,
        UPDATE_AMOUNT_CARTITEM,
        TOGGLE_SEARCH_WINDOW_VISIBILITY} from './actionTypes';

const initialState = {
    productList: [],
    shoppingCart: JSON.parse(localStorage.getItem("shoppingCart")) || [],
    totalItemsInCart: JSON.parse(localStorage.getItem("totalItemsInCart")) || 0,
    currentStyle: null,
    currentSize: null,
    isSearchOpen: false,
    isCartOpen: false
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
        const newItem = action.payload;
        let currentCart = state.shoppingCart;
        let totalItemsInCart = state.totalItemsInCart;

        for(let i=0; i< currentCart.length; i++){
            if ( currentCart[i].style === newItem.style && currentCart[i].size === newItem.size){
              let newCart = currentCart;
              newCart[i].amount = newCart[i].amount+1;
              totalItemsInCart = totalItemsInCart +1;

              // update local storage
              localStorage.setItem("shoppingCart", JSON.stringify(newCart));
              localStorage.setItem("totalItemsInCart", JSON.stringify(totalItemsInCart));

              return {...state,  
                      shoppingCart: newCart,
                      totalItemsInCart: totalItemsInCart};
            }
        }

        const newCart = [...currentCart, 
                        {...newItem, amount: 1}];
        totalItemsInCart = totalItemsInCart +1;
          
        // update local storage
        localStorage.setItem("shoppingCart", JSON.stringify(newCart));
        localStorage.setItem("totalItemsInCart", JSON.stringify(totalItemsInCart));

        return {...state,  
                shoppingCart: newCart,
                totalItemsInCart: totalItemsInCart
              };
      }

      case TOGGLE_CART_VISIBILITY: {
        return {
            ...state,
            isCartOpen: !state.isCartOpen,
            isSearchOpen: false
        };
      }

      case TOGGLE_SEARCH_WINDOW_VISIBILITY: {
        return {
            ...state,
            isSearchOpen: !state.isSearchOpen,
            isCartOpen: false
        };
      }

      case UPDATE_STYLE_ON_VIEW: {
        return {
            ...state,
            currentStyle: action.payload
        };
      }

      case UPDATE_SIZE_ON_VIEW: {
        return {
            ...state,
            currentSize: action.payload
        };
      }

      case UPDATE_AMOUNT_CARTITEM: {
        const deltaAmount = action.payload.delta;
        const cartItemIndex = action.payload.index;

        let currentCart = state.shoppingCart;
        let totalItemsInCart = state.totalItemsInCart;

        let newCart = currentCart;
        let newAmount = currentCart[cartItemIndex].amount + deltaAmount;
        totalItemsInCart = totalItemsInCart+deltaAmount;

        if(newAmount === 0){
            delete(currentCart[cartItemIndex]);
            newCart = currentCart.filter( item => item!== undefined);
        }
        else{
            let newCart= currentCart;
            newCart[cartItemIndex].amount = newAmount;
        }

        // update local storage
        localStorage.setItem("shoppingCart", JSON.stringify(newCart));
        localStorage.setItem("totalItemsInCart", JSON.stringify(totalItemsInCart));

        return {
          ...state,
          shoppingCart: newCart,
          totalItemsInCart: totalItemsInCart
        };
      }

      default:
          return state;
    }
}