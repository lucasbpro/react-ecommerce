import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

//import { ProductSizes } from "../../components/ProductSizes"
import { LABEL_PAYMENT_OPTIONS, LABEL_ADD_TO_CART_BUTTON } from "../../constants";

//import Loading from '../../components/Loading';

import './ProductDetails.scss';

const ProductDetails = () => {

    const { product_id } = useParams();
    const id = parseInt(product_id, 10);
    const product = useSelector(store => store.productList.find(product => product.id === id) || {});

	return(
		<div data-testid="product-details" className="product-details">
			<section className="product-details">

                <figure className="product-figure">
                    { product.on_sale ?
                    <span>{product.discount_percentage}</span>
                    : null
                    }
                    <img src={product.image} alt={product.name} />
                </figure>

                <h2 className="product-name"> {product.name} </h2>

                <div className="product-price">
                    <span> {product.actual_price} </span>
                    <span> {`${LABEL_PAYMENT_OPTIONS} R$ ${product.actual_price/3}.`}</span>
                </div>

                <button>{LABEL_ADD_TO_CART_BUTTON}</button>
			</section>
		</div>
	);
}

export default ProductDetails;