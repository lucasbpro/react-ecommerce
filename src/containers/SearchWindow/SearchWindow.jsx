import React from "react";
import { useSelector } from "react-redux";

import './SearchWindow.scss';

const SearchWindow = () => {

	const products = useSelector(store => store.productList);

	console.log(products)


	return(
		<div data-testid="search-results" className="search-results">
			<section className="search-results">

			</section>
		</div>
	);
};

export default SearchWindow;
