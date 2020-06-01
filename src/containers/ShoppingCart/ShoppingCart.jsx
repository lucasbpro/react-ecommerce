import React from "react";
import { useSelector } from "react-redux";

import {CartItem} from "../../components/CartItem";

const ShoppingCart = () => {

	const shoppingCart = useSelector(store => store.shoppingCart).length;

	return(
		<div data-testid="shopping-cart" className="shopping-cart">
			<section className="shopping-cart">
				{shoppingCart && shoppingCart.map( (product, index)  => {
					return (<CartItem key={index} productInfo={product}/>)
				})}
			</section>
		</div>
	);
};

export default ShoppingCart;