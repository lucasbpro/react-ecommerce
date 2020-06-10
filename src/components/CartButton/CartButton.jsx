import React from 'react';

import { ReactComponent as CartIcon } from "../../assets/img/cart.svg";

const CartButton = ({onClickCart, totalItems}) => {

    const totalStyle = {
        color: "black",
        display: "flex",
        fontWeight: "bold",
        backgroundColor: "red",
        width: "auto",
        fontSize: "20px",
        borderRadius: "100%",
        position: "absolute",
        top: "5%",
        right: "3%",
        zIndex: "2"
      };
    
    const buttonStyle = {
        marginLeft: "10px"
      };
    
    return(
        <button id="cart-button" style={buttonStyle} onClick={onClickCart}> 
            <CartIcon className="topbar_icons--cart"/> 
            { totalItems? <span style={totalStyle}>{totalItems}</span> : null }
        </button>
    )
}

export default CartButton;