import React from "react";
import { useSelector } from "react-redux";

import ProductCard from '../../components/ProductCard';
import { Link } from "react-router-dom";

import './Catalog.scss';

const Catalog = ({opacityOn}) => {

	const styleItemsCount = {
		fontWeight: "bold",
		margin: "10px 0 0 0" 
		};

	const products = useSelector(store => store.productList);

	return(
		<div style={ opacityOn ? { opacity: 0.4 } : null} 
			className="product-catalog-container">	

			<p style={styleItemsCount}>{`(${products.length} itens)`}</p>

			<div className="product-catalog" data-testid="product-catalog">
				{products && products.map( (product, index)  => {
					return ( 
						<Link to={`/product/${product.style}`} key={index}> 
							<ProductCard key={index} productInfo={product}/>
						</Link>
					)
				})}
			</div>
		</div>
	);
};

export default Catalog;
