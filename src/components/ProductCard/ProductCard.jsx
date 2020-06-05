import React from 'react';

import './ProductCard.scss';

const ProductCard = ({productInfo}) => (
    <div className="product">

      <figure className="product-figure">
        { productInfo.on_sale ?
          <div>{`-${productInfo.discount_percentage}`}</div>
          : null
        }

        {productInfo.image!=="" ? 
          <img src={productInfo.image} alt={productInfo.name} />
          :
          <img src="https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível" alt={productInfo.name} />
        }
      </figure>

      <span className="product-name"> {productInfo.name} </span>

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
