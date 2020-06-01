import React from "react";
import { useSelector } from "react-redux";

const SearchWindow = () => {

	const products = useSelector(store => store.allProducts).length;

	return(
		<div data-testid="search-results" className="search-results">
			<section className="search-results">

			</section>
		</div>
	);
};

export default SearchWindow;
