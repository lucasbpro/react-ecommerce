import React , { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import WindowHeader from '../../containers/WindowHeader';
import CartItem from "../../components/CartItem";
import { updateItemAmount, toggleShoppingCart } from '../../actions';
import { LABEL_CART_TITLE } from '../../constants';

import './ShoppingCart.scss';

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
		const itemAmount = shoppingCart[index].amount;
		if(itemAmount === 1)
			return;
		else
			dispatch(updateItemAmount(index, -1));
	}

	const handleClickRemove = (index) => {
		const itemAmount = shoppingCart[index].amount;
		dispatch(updateItemAmount(index, -itemAmount));
	}

	const handleClickReturn = () => {
		dispatch(toggleShoppingCart());
	}

	return(
		<div className="shopping-cart-window">

			<WindowHeader title={LABEL_CART_TITLE} onClickReturn={handleClickReturn} />

			<div className="shopping-cart" data-testid="shopping-cart" >
				{shoppingCart && shoppingCart.map( (cartItem, index)  => {
					const productInfo = productInfoList.find(product => cartItem.style === product.style)
					return (<CartItem key={index} 
									productInfo={productInfo} 
									size={cartItem.size}
									amount={cartItem.amount}
									onClickPlus={()=>handleClickPlus(index)}
									onClickMinus={()=>handleClickMinus(index)}
									onClickRemove={()=>handleClickRemove(index)}/>)
				})}
			</div>
		</div>
	);
};

export default ShoppingCart;