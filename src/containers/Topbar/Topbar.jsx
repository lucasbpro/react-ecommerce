import React, { useEffect }from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ReactComponent as LogoSite } from "../../assets/img/logo_fashionista.svg";
import SearchButton from "../../components/SearchButton";
import CartButton from "../../components/CartButton";
import {toggleShoppingCart, toggleSearchWindow} from '../../actions';
import './Topbar.scss';

const Topbar = ()=> {

	const shoppingCart = useSelector(store => store.shoppingCart);
	const isCartOpen = useSelector(store => store.isCartOpen);
	const totalCartItems = useSelector(state => state.totalItemsInCart);

	const dispatch = useDispatch();

	const onClickSearchButton = () => {
		dispatch(toggleSearchWindow());
	};

	const onClickCartButton = () => {
		dispatch(toggleShoppingCart());
	};
	
	useEffect(() => {
        return
	}, [shoppingCart,isCartOpen, totalCartItems]);

	return(
		<header data-testid="topbar" className="topbar">
			<div className="topbar_logo">
				<a href="/"> <LogoSite alt="Logo-Fashionista"/> </a>
			</div>

			<div className="topbar_icons">
				<SearchButton onClickSearch={onClickSearchButton}/>
				<CartButton onClickCart={onClickCartButton} totalItems={totalCartItems}/>
			</div>
  		</header>
	);
}

export default Topbar;
