import React , { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { updateItemAmount } from '../../actions';
import CartItem from "../../components/CartItem";

const ShoppingCart = () => {

	const shoppingCart = useSelector(state => state.shoppingCart);
	const stylesInCart = shoppingCart.map( cartItem => cartItem.style );
	const productInfoList = useSelector(store => store.productList).filter(
							(product) => stylesInCart.includes(product.style)
						);

	const dispatch = useDispatch();

	const handleClickPlus = (index) => {
		dispatch(updateItemAmount(index, 1));
	}

	const handleClickMinus = (index) => {
		dispatch(updateItemAmount(index, -1));
	}

	useEffect(() => {
	}, [shoppingCart])

	return(
		<div className="shopping-cart-container">
			<div className="shopping-cart" data-testid="shopping-cart" >
				{shoppingCart && shoppingCart.map( (cartItem, index)  => {
					const productInfo = productInfoList.find(product => cartItem.style === product.style)
					return (<CartItem key={index} 
									productInfo={productInfo} 
									amount={cartItem.amount}
									handleClickPlus={()=>handleClickPlus(index)}
									handleClickMinus={()=>handleClickMinus(index)}/>)
				})}
			</div>
		</div>
	);
};

export default ShoppingCart;