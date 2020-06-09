import React from "react";
import { useSelector } from "react-redux";

import ProductCard from '../../components/ProductCard';
import { Link } from "react-router-dom";

import './Catalog.scss';

const Catalog = ({opacityOn}) => {

	const products = useSelector(store => store.productList);

	return(
		<div style={ opacityOn ? { opacity: 0.4 } : null} 
			 className="product-catalog" data-testid="product-catalog">

			{products && products.map( (product, index)  => {
				return ( 
					<Link to={`/product/${product.style}`} key={index}> 
						<ProductCard key={index} productInfo={product}/>
					</Link>
				)
			})}
		</div>
	);
};

export default Catalog;
