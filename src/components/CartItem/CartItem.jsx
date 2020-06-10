import React from 'react';

import RemoveItemButton from '../RemoveItemButton';
import {LABEL_CART_PRODUCT_SIZE,
        IMAGE_PLACEHOLDER} from "../../constants";
import './CartItem.scss';


const CartItem = ({ productInfo, 
                    size,
                    amount, 
                    onClickPlus, 
                    onClickMinus, 
                    onClickRemove}) => {

    return(
        <div className="cart-item-container">
            <figure className="cart-item-figure">
                {productInfo? 
                    (productInfo.image!=="" ? 
                        <img src={productInfo.image} alt={productInfo.name} />
                        :
                        <img src={IMAGE_PLACEHOLDER} alt={productInfo.name} />)
                    : null
                }
            </figure>

            <div className="cart-item-details">
                {productInfo && 
                    <div className="cart-item-description">
                        <h3 className="product-name"> {productInfo.name}</h3>
                        <p>{`${LABEL_CART_PRODUCT_SIZE} ${size}`}</p>
                        <div className="modify-amount-buttons">
                            <button onClick={onClickMinus}><span>-</span></button>
                            <span>{amount}</span>
                            <button onClick={onClickPlus}><span>+</span></button>
                        </div>
                    </div>
                }

                {productInfo && 
                    <div className="cart-item-price">
                        <h3> {productInfo.actual_price} </h3>
                        <p> {productInfo.installments}</p>
                        <div className="cart-item-remove">
                            <RemoveItemButton onClick={onClickRemove} /> 
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default CartItem;