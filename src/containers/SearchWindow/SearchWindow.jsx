import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import WindowHeader from '../../containers/WindowHeader';
import SearchItem from '../../components/SearchItem';
//import { filterByText } from '../../utils';
import { toggleSearchWindow } from '../../actions';

import { SEARCH_WINDOW_TITLE, 
		 SEARCH_INPUT_PLACEHOLDER, 
		 NO_SEARCH_RESULTS } from '../../constants';

import './SearchWindow.scss';

const SearchWindow = () => {

	const productsOnCatalog = useSelector(store => store.productList);
	const [filteredProducts, setFilteredProducts] = useState(productsOnCatalog);
	const dispatch = useDispatch();

	const isStringInText = (string, text) => {
		return (text.toLowerCase().search(string.toLowerCase()) !== -1);
	}
	
	const filterByText = (productList, text) => {
		return productList.filter(product => isStringInText(text, product.name));
	}

	const handleChangeText = (searchText) => {
		setFilteredProducts(filterByText(productsOnCatalog, searchText));
	};

	const handleClickReturn = () => {
		dispatch(toggleSearchWindow());
	}

	return(
		<div  className="search-window" data-testid="search-window">

			<WindowHeader title={SEARCH_WINDOW_TITLE} onClickReturn={handleClickReturn}/>

			<div className="search-input">
				<input  id="searchTextInput"
							type="text" 
							className="search-text-input" 
							placeholder={SEARCH_INPUT_PLACEHOLDER}
							onChange={(event)=>handleChangeText(event.target.value)}/>
			</div>

			<div className="search-results">
				{filteredProducts?
					filteredProducts.map( (product,index) => 
						<SearchItem key={index}
									itemName={product.name} 
									itemPicture={product.image} 
									itemPrice={product.actual_price}
									itemInstallments={product.installments} />
					)
					:
					<h2>{NO_SEARCH_RESULTS}</h2>
				}
			</div>
		</div>
	);
};

export default SearchWindow;
