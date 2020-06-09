import React, { useState, useEffect} from 'react';
import { useSelector } from "react-redux";

import { ReactComponent as CartIcon } from "../../assets/img/cart.svg";

const CartButton = ({onClickCart}) => {

    const shoppingCart = useSelector(store => store.shoppingCart);
    const [total, setTotal] = useState(0);

    const totalStyle = {
        color: "white",
        display: "flex",
        alignItems: "center",
        paddingLeft: "2pt",
        fontWeight: "bold",
        fontSize: "15px",
        backgroundColor: "red",
        height: "15px",
        width: "15px",
        borderRadius: "100%",
        position: "absolute",
        top: 0,
        right: 0
      };
    
    const buttonStyle = {
        width: "50px"
      };

    useEffect(() => {
        if( shoppingCart.length === 0)
            setTotal(0);
        else{
            const amountList = shoppingCart.map(item => item.amount);
            setTotal(amountList.reduce((a,b) => {return (a + b)}));
        }
    }, [shoppingCart]);
    
    return(
        <button style={buttonStyle} onClick={onClickCart}> 
            <CartIcon className="topbar_icons--cart"/> 
            { total? <span style={totalStyle}>{total}</span> : null }
        </button>
    )
}

export default CartButton;