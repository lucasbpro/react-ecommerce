import React, { useState, useEffect }from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ReactComponent as LogoSite } from "../../assets/img/logo_fashionista.svg";
import SearchButton from "../../components/SearchButton";
import CartButton from "../../components/CartButton";
import {toggleShoppingCart, toggleSearchWindow} from '../../actions';
import './Topbar.scss';

const Topbar = ()=> {

	const shoppingCart = useSelector(store => store.shoppingCart);
	const isCartOpen = useSelector(store => store.isCartOpen);
	const [totalItems, setTotal] = useState(0);

	const dispatch = useDispatch();

	const onClickSearchButton = () => {
		dispatch(toggleSearchWindow());
	};

	const onClickCartButton = () => {
		dispatch(toggleShoppingCart());
	};
	

	useEffect(() => {
        if( shoppingCart.length === 0)
            setTotal(0);
        else{
            const amountList = shoppingCart.map(item => item.amount);
            setTotal(amountList.reduce((a,b) => {return (a + b)}));
        }
	}, [shoppingCart,isCartOpen]);


	return(
		<header data-testid="topbar" className="topbar">
			<div className="topbar_logo">
				<a href="/"> <LogoSite alt="Logo-Fashionista"/> </a>
			</div>

			<div className="topbar_icons">
				<SearchButton onClickSearch={onClickSearchButton}/>
				<CartButton onClickCart={onClickCartButton} totalItems={totalItems}/>
			</div>
  		</header>
	);
}

export default Topbar;
