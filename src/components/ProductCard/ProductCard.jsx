import React from 'react';

import './ProductCard.scss';

const ProductCard = ({productInfo}) => (
    <div className="product">

      <figure className="product-figure">
        { productInfo.on_sale ?
          <span>{productInfo.discount_percentage}</span>
          : null
        }
        <img src={productInfo.image} alt={productInfo.name} />
      </figure>

      <h3 className="product-name"> {productInfo.name} </h3>

      <div className="product-price">
        { productInfo.on_sale ?
            <div className="product-price">
              <span className="product-price--from"> {productInfo.regular_price} </span>
              <span className="product-price--to"> {productInfo.actual_price} </span>
            </div>
         :
          <div className="product-price">
            <span> {productInfo.regular_price} </span>
          </div>
        }
      </div>
    </div>
);

export default ProductCard;
