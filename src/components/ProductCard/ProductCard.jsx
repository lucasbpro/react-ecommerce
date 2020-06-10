import React from 'react';

import {DISCCOUNT_TEXT, IMAGE_PLACEHOLDER} from '../../constants';
import './ProductCard.scss';

const ProductCard = ({productInfo}) => (
    <div className="product">

      <figure className="product-figure">
        { productInfo.on_sale ?
          <div className="disccount">{`${productInfo.discount_percentage} ${DISCCOUNT_TEXT}`}</div>
          : null
        }

        {productInfo.image!=="" ? 
          <img src={productInfo.image} alt={productInfo.name} />
          :
          <img src={IMAGE_PLACEHOLDER} alt={productInfo.name} />
        }
      </figure>

      <span className="product-name"> {productInfo.name} </span>

      { productInfo.on_sale ?
          <div className="product-price">
            <span className="product-price--from"> {productInfo.regular_price} </span>
            <span> {productInfo.actual_price} </span>
          </div>
        :
        <div className="product-price">
          <span> {productInfo.regular_price} </span>
        </div>
      }
    </div>
);

export default ProductCard;
