import React from "react";
import { useSelector } from "react-redux";

import ProductCard from '../../components/ProductCard';
import { Link } from "react-router-dom";

import './Catalog.scss';

const Catalog = () => {

	const products = useSelector(store => store.productList);

	return(
		<div data-testid="product-catalog" className="product-catalog">
			<section className="product-catalog">
				{products && products.map( (product, index)  => {
					return ( 
						<Link to={`/product/${product.style}`} key={index}> 
							<ProductCard key={index} productInfo={product}/>
						</Link>
					)
				})}
			</section>
		</div>
	);
};

export default Catalog;
