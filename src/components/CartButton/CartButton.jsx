import React, { useState, useEffect} from 'react';
import { useSelector } from "react-redux";

import { ReactComponent as CartIcon } from "../../assets/img/cart.svg";

const CartButton = ({onClickCart}) => {

    const shoppingCart = useSelector(store => store.shoppingCart);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const amountList = shoppingCart.map(item => item.amount);
        setTotal(amountList.reduce((a,b) => {return (a + b)}));
    }, [shoppingCart]);
    
    return(
        <button onClick={onClickCart}> 
            <CartIcon className="topbar_icons--cart"/> 
            <span>{total}</span>
        </button>
    )
}

export default CartButton;