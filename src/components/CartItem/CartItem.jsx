import React from 'react';

import {LABEL_CART_PAYMENT_OPTIONS, LABEL_CART_PRODUCT_SIZE} from "../../constants";

const CartItem = ({productInfo}) => {

    return(
        <div>
            <figure className="product-figure">
                <img src={productInfo.image} alt={productInfo.name} />
            </figure>

            <h3 className="product-name"> 
                {productInfo.name}
            </h3>

            <div className="product-price">
                <span> {productInfo.actual_price} </span>
                <span> {`${LABEL_CART_PAYMENT_OPTIONS} R$ ${productInfo.actual_price/3}.`}</span>
            </div>

            <span>{`${LABEL_CART_PRODUCT_SIZE} ${productInfo.size}`}</span>

            <div className="modify-amount-buttons">
                <button>{"-"}</button>
                <span>{productInfo.amt}</span>
                <button>{"+"}</button>
            </div>
        </div>
    )
}

export default CartItem;