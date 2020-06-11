import React from 'react';

import { ReactComponent as CartIcon } from "../../assets/img/cart.svg";

const CartButton = ({onClickCart, totalItems}) => {

    const totalStyle = {
        overflow: "hidden",
        position: "absolute",
        right: "-5%",
        top: "-10%",
        height: "1.7rem",
        borderRadius: "50%",
        width: "1.7rem",
        background: "#cf3838",
        color: "#fff",
        lineHeight: "1.7rem",
        textAlign: "center",
        padding: "0",
        fontSize: "1.1rem",
        fontWeight: "700",
      };
    
    const buttonStyle = {
        marginLeft: "10px"
      };
    
    return(
        <button id="cart-button" style={buttonStyle} onClick={onClickCart}> 
            <CartIcon className="topbar_icons--cart"/> 
            { totalItems? <div style={totalStyle}>{totalItems}</div> : null }
        </button>
    )
}

export default CartButton;