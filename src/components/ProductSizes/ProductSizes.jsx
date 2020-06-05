import React, { useState } from 'react';

import {LABEL_PRODUCT_SIZES} from "../../constants";

import './ProductSizes.scss';

const ProductSizes = ({sizes}) => {

    const [selectedSize, setSize] = useState([]);

    return(
        <div className="product-sizes">
            <h3>{LABEL_PRODUCT_SIZES}</h3>

            <div className="product-sizes-buttons">
                {sizes? 
                    sizes.map( (size,index) => size.available? 
                        <button className="product-size-button" key={index}>
                            <span>{size.size}</span>
                        </button> : null)
                    :
                    null
                }
            </div>
        </div>
    );
};

export default ProductSizes;
