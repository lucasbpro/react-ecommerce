import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import ProductSizes from "../../components/ProductSizes"
import { addItemToCart, updateStyleOnView } from '../../actions';

import { LABEL_ADD_TO_CART_BUTTON, 
        LABEL_PAYMENT_OPTIONS,
        IMAGE_PLACEHOLDER } from "../../constants";


import './ProductDetails.scss';

const ProductDetails = () => {

    const { product_id } = useParams();
    const productId = parseInt(product_id, 10);
    const product = useSelector(store => store.productList.find(
                                product => parseInt(product.style, 10) === productId) || {});
    
    const selectedSize = useSelector(store => store.currentSize);

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        const cartItem = {style: product.style, size: selectedSize};
        dispatch(addItemToCart(cartItem))
    };

    useEffect(() => {
        dispatch(updateStyleOnView(product.style));
    }, [dispatch, product])

	return(
		<div className="product-details-container" data-testid="product-details">
			<div className="product-details">
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
                            { product.on_sale && <span className="product-price--from"> {product.regular_price} </span>}
                            <h1> {product.actual_price} </h1>
                            <p> {`${LABEL_PAYMENT_OPTIONS} ${product.installments}.`} </p>
                            <button onClick={()=>handleAddToCart()}>{LABEL_ADD_TO_CART_BUTTON}</button>
                        </div>
                    </div>
                </div>
			</div>
		</div>
	);
}

export default ProductDetails;