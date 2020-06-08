import React from 'react';
import { useDispatch } from 'react-redux';

import { updateItemAmount } from '../../actions';
import {LABEL_CART_PRODUCT_SIZE,
        IMAGE_PLACEHOLDER} from "../../constants";
import './CartItem.scss';


const CartItem = ({productInfo, amount, handleClickPlus, handleClickMinus, handleClickRemove}) => {

    return(
        <div className="cart-item-container">
            <figure className="cart-item-figure">
                {productInfo? productInfo.image!=="" ? 
                        <img src={productInfo.image} alt={productInfo.name} />
                        :
                        <img src={IMAGE_PLACEHOLDER} alt={productInfo.name} />
                    : null
                }
            </figure>

            <div className="cart-item-details">
                <div className="cart-item-description">
                    <h3 className="product-name"> {productInfo.name}</h3>
                    <p>{`${LABEL_CART_PRODUCT_SIZE} ${productInfo.size}`}</p>
                    <div className="modify-amount-buttons">
                        <button onClick={handleClickMinus}><span>-</span></button>
                        <span>{amount}</span>
                        <button onClick={handleClickPlus}><span>+</span></button>
                    </div>
                    <div>
                        <button onClick={handleClickRemove}><span>REMOVER</span></button>
                    </div>
                </div>

                <div className="cart-item-price">
                    <h3> {productInfo.actual_price} </h3>
                    <p> {productInfo.installments}</p>
                </div>
            </div>
        </div>
    )
}

export default CartItem;