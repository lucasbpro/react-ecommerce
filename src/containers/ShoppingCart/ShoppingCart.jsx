import React , { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import WindowHeader from '../../containers/WindowHeader';
import CartItem from "../../components/CartItem";
import { updateItemAmount, toggleShoppingCart} from '../../actions';
import { LABEL_CART_TITLE, 
		 EMPTY_CART, 
		 LABEL_TOTAL_ORDER,
		 LABEL_CLOSE_ORDER_BUTTON} from '../../constants';

import './ShoppingCart.scss';

const ShoppingCart = () => {

	const shoppingCart = useSelector(state => state.shoppingCart);

	const stylesInCart = shoppingCart.map( cartItem => cartItem.style );

	const productInfoList = useSelector(store => store.productList).filter(
							(product) => stylesInCart.includes(product.style)
						);

	const sum = (a,b) => {return (a + b)};

	const totalCartItems = shoppingCart.length===0 ? 
						   0 : shoppingCart.map(item => item.amount).reduce(sum);
	
	const totalOrder = productInfoList.length===0 ? 
							0 : productInfoList.map(item => {
								return parseFloat(item.actual_price.split(',').join('.').split("R$")[1])
								}).map( (itemPrice, index) => {
									return shoppingCart[index]? itemPrice*shoppingCart[index].amount : 0
								}).reduce(sum);
				
	const formatter = new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	  });

	const dispatch = useDispatch();

	const [clickEvent, setClickEvent] = useState(false);

	const handleClickPlus = (index) => {
		dispatch(updateItemAmount(index, 1));
		setClickEvent(true);
	}

	const handleClickMinus = (index) => {
		const itemAmount = shoppingCart[index].amount;
		if(itemAmount === 1)
			return;
		else{
			dispatch(updateItemAmount(index, -1));
			setClickEvent(true);
		}
	}

	const handleClickRemove = (index) => {
		const itemAmount = shoppingCart[index].amount;
		dispatch(updateItemAmount(index, -itemAmount));
		setClickEvent(true);
	}

	const handleClickReturn = () => {
		dispatch(toggleShoppingCart());
	}

	useEffect(()=>{ 
		setClickEvent(false);
	},[shoppingCart, clickEvent])

	return(
		<div className="shopping-cart-window">

			<WindowHeader title={`${LABEL_CART_TITLE} (${totalCartItems} itens)`} onClickReturn={handleClickReturn} />

			<div className="shopping-cart" data-testid="shopping-cart" >

				{totalCartItems===0 && <h2>{EMPTY_CART}</h2>}

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

				{totalCartItems>0 &&
					<div className="close-order">
						<div className="total-order">
							<h2>{LABEL_TOTAL_ORDER}</h2>
							<h1>{formatter.format(totalOrder)}</h1>
						</div>
						<button >{LABEL_CLOSE_ORDER_BUTTON}</button>
					</div>
				}
			</div>
		</div>
	);
};

export default ShoppingCart;