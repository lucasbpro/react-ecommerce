import React from 'react';
import { useDispatch } from 'react-redux';
import Link from 'react-dom';

import { ReactComponent as LogoSvg } from "../../assets/img/logo.svg";
import SearchButton from "../../components/SearchButton";
import CartButton from "../../components/CartButton";
import {toggleCartVisibility} from '../../actions';
import './Topbar.scss';

const Topbar = ()=> {

	const dispatch = useDispatch();

	const onClickSearchButton = () => {
		console.log("clicou Search Button");
	};

	const onClickCartButton = () => {
		console.log("clicou Cart Button");
		dispatch(toggleCartVisibility());
	};

	return(
		<header data-testid="topbar" className="topbar">
			<div className="container">

				<div className="topbar_logo">
					<LogoSvg alt="Logo-Fashionista"/>
				</div>

				<div className="topbar_icons">
					<SearchButton onClickSearch={onClickSearchButton}/>
					<CartButton onClickCart={onClickCartButton}/>
				</div>
			</div>
  		</header>
	);
}

export default Topbar;
