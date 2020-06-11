import {UPDATE_PRODUCT_LIST, 
        ADD_PRODUCT_TO_CART,
        TOGGLE_CART_VISIBILITY,
        UPDATE_STYLE_ON_VIEW,
        UPDATE_SIZE_ON_VIEW,
        UPDATE_AMOUNT_CARTITEM,
        TOGGLE_SEARCH_WINDOW_VISIBILITY} from './actionTypes';

const sum = (a,b) => {return (a + b)};
  
const initialState = {
    productList: [],
    shoppingCart: JSON.parse(localStorage.getItem("shoppingCart")) || [],
    totalItemsInCart: JSON.parse(localStorage.getItem("shoppingCart")).map(item => item.amount).reduce(sum,0),
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

        for(let i=0; i< currentCart.length; i++){
            if ( currentCart[i].style === newItem.style && currentCart[i].size === newItem.size){
              let newCart = currentCart;
              newCart[i].amount = newCart[i].amount+1;
              localStorage.setItem("shoppingCart", JSON.stringify(newCart));
              return {...state,  
                      shoppingCart: newCart,
                      totalItemsInCart: state.totalItemsInCart+1};
            }
        }

        const newCart = [...currentCart, 
                        {...newItem, amount: 1}];
        localStorage.setItem("shoppingCart", JSON.stringify(newCart));

        return {...state,  
                shoppingCart: newCart,
                totalItemsInCart: state.totalItemsInCart+1
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
        let newCart = currentCart;
        let newAmount = currentCart[cartItemIndex].amount + deltaAmount;

        if(newAmount === 0){
            delete(currentCart[cartItemIndex]);
            newCart = currentCart.filter( item => item!== undefined);
        }
        else{
            let newCart= currentCart;
            newCart[cartItemIndex].amount = newAmount;
        }
            
        localStorage.setItem("shoppingCart", JSON.stringify(newCart));
        return {
          ...state,
          shoppingCart: newCart,
          totalItemsInCart: state.totalItemsInCart+deltaAmount
        };
      }

      default:
          return state;
    }
}