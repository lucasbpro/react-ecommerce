import React from 'react';

import { ReactComponent as CartIcon } from "../../assets/img/cart.svg";

const CartButton = ({onClickCart, totalItems}) => {

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
    
    return(
        <button id="cart-button" style={buttonStyle} onClick={onClickCart}> 
            <CartIcon className="topbar_icons--cart"/> 
            { totalItems? <span style={totalStyle}>{totalItems}</span> : null }
        </button>
    )
}

export default CartButton;