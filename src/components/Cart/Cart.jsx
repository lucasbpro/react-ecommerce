import React from 'react';

import { ReactComponent as CartIcon} from "../../assets/img/cart.svg";

const Cart = () => (
    <button> <CartIcon className="topbar_icons--cart"/> </button>
);

export default Cart;