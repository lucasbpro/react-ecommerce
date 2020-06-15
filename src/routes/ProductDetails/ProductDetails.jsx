import React, { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import ProductSizes from '../../components/ProductSizes';
import WindowHeader from '../../containers/WindowHeader';

import { addItemToCart, 
         updateStyleOnView,
         toggleSearchWindow } from '../../actions';

import {PRODUCT_DETAILS_TITLE,
        LABEL_ADD_TO_CART_BUTTON, 
        LABEL_PAYMENT_OPTIONS,
        IMAGE_PLACEHOLDER } from "../../constants";


import './ProductDetails.scss';

const ProductDetails = () => {

    const { product_id } = useParams();
    const productId = parseInt(product_id, 10);
    const product = useSelector(store => store.productList.find(
                                product => parseInt(product.style, 10) === productId) || {});
    
    const isSearchOpen = useSelector(store => store.isSearchOpen);
    const selectedSize = useSelector(store => store.currentSize);
    const opacityOn = useSelector(state => state.isSearchOpen || state.isCartOpen);

    const [redirect,setRedirect] = useState(false);

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        const cartItem = {style: product.style, size: selectedSize};
        dispatch(addItemToCart(cartItem))
    };

    const handleClickReturn = () => {
        setRedirect(true);
    };

    useEffect(() => {
        if(isSearchOpen)
            dispatch(toggleSearchWindow());
        dispatch(updateStyleOnView(product.style));
    },[product])

    if (redirect) {
        console.log(redirect)
        return <Redirect to="/"/>
    }
    else return ( 
        <div className="product-details-container">
            <WindowHeader title={PRODUCT_DETAILS_TITLE} onClickReturn={handleClickReturn}/>

            <div style={ opacityOn ? { opacity: 0.4 } : null} 
                className="product-details" data-testid="product-details">

                <figure className="product-details-fig">
                    {product.image!=="" ? 
                        <img src={product.image} alt={product.name} />
                        :
                        <img src={IMAGE_PLACEHOLDER} alt={product.name} />
                    }
                </figure>

                <div className="product-details-content">
                    <div className="product-details-text"> 
                        <h2> {product.name} </h2>

                        <ProductSizes sizes={product.sizes}/>

                        <div className="product-purchase">
                            { product.on_sale && 
                                <span> {product.regular_price} </span>
                            }
                            <h1> {product.actual_price} </h1>
                            <p> {`${LABEL_PAYMENT_OPTIONS} ${product.installments}`} </p>
                            <button onClick={()=>handleAddToCart()}>{LABEL_ADD_TO_CART_BUTTON}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;