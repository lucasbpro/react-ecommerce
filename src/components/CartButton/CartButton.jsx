import React from 'react';
import { useSelector } from "react-redux";

import { ReactComponent as CartIcon } from "../../assets/img/cart.svg";

const CartButton = () => {

    const productsInCart = useSelector(store => store.shoppingCart).length;

    return(
        <button> 
            <CartIcon className="topbar_icons--cart"/> 
            <span>{productsInCart}</span>
        </button>
    )
}

export default CartButton;