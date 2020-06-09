import {UPDATE_PRODUCT_LIST, 
        ADD_PRODUCT_TO_CART,
        TOGGLE_CART_VISIBILITY,
        UPDATE_STYLE_ON_VIEW,
        UPDATE_SIZE_ON_VIEW,
        UPDATE_AMOUNT_CARTITEM,
        TOGGLE_SEARCH_WINDOW_VISIBILITY} from './actionTypes';

const initialState = {
    productList: [

        {"name":"VESTIDO TRANSPASSE BOW",
        "style":"20002605","code_color":"20002605_613",
        "color_slug":"tapecaria",
        "color":"TAPEÇARIA",
        "on_sale":false,
        "regular_price":"R$ 199,90",
        "actual_price":	"R$ 199,90",
        "discount_percentage":"",
        "installments":"3x R$ 66,63",
        "image":"",
        "sizes":[{"available":false,"size":"PP","sku":"5807_343_0_PP"},
                {"available":true,"size":"P","sku":"5807_343_0_P"},
                {"available":true,"size":"M","sku":"5807_343_0_M"},
                {"available":true,"size":"G","sku":"5807_343_0_G"},
                {"available":false,"size":"GG","sku":"5807_343_0_GG"}]
        },
        
        {"name":"REGATA ALCINHA FOLK","style":"20002570",
         "code_color":"20002570_614",
         "color_slug":"preto",
         "color":"PRETO",
         "on_sale":false,
         "regular_price":"R$ 99,90",
         "actual_price":"R$ 99,90",
         "discount_percentage":"",
         "installments":"3x R$ 33,30",
         "image":"",
         "sizes":[{"available":true,"size":"PP","sku":"5723_40130843_0_PP"},
                  {"available":true,"size":"P","sku":"5723_40130843_0_P"},
                  {"available":true,"size":"M","sku":"5723_40130843_0_M"},
                  {"available":true,"size":"G","sku":"5723_40130843_0_G"},
                  {"available":true,"size":"GG","sku":"5723_40130843_0_GG"}]
        },

        {"name":"T-SHIRT LEATHER DULL",
        "style":"20002602",
        "code_color":"20002602_027",
        "color_slug":"marinho",
        "color":"MARINHO",
        "on_sale":true,
        "regular_price":"R$ 139,90",
        "actual_price":"R$ 119,90",
        "discount_percentage":"12%",
        "installments":"3x R$ 39,97",
        "image":"",
        "sizes":[{"available":true,"size":"PP","sku":"5793_1000032_0_PP"},
                 {"available":true,"size":"P","sku":"5793_1000032_0_P"},
                 {"available":true,"size":"M","sku":"5793_1000032_0_M"},
                 {"available":false,"size":"G","sku":"5793_1000032_0_G"},
                 {"available":false,"size":"GG","sku":"5793_1000032_0_GG"}]
       }
    ],
    shoppingCart: [
        {style: "20002605", size: "P", amount: 2},
        {style: "20002570", size: "P", amount: 3}
      ],
    currentStyle: null,
    currentSize: null,
    visibilitySearch: false,
    visibilityCart: false
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
              return {...state,  shoppingCart: newCart};
            }
        }
        return {...state,  shoppingCart: [...currentCart, {...newItem, amount: 1}]};
      }

      case TOGGLE_CART_VISIBILITY: {
        return {
            ...state,
            visibilityCart: !state.visibilityCart,
            visibilitySearch: false
        };
      }

      case TOGGLE_SEARCH_WINDOW_VISIBILITY: {
        return {
            ...state,
            visibilitySearch: !state.visibilitySearch,
            visibilityCart: false
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

        if( newAmount === 0 && currentCart.length===1 ){
            newCart = [];
        }
        else if(newAmount === 0)
            newCart = currentCart.splice(cartItemIndex-1,1);
        else{
            let newCart= currentCart;
            newCart[cartItemIndex].amount = newAmount;
        }
            
        return {
          ...state,
          shoppingCart: newCart
        };
      }

      default:
          return state;
    }
}