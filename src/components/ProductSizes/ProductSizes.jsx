import React from 'react';

import {LABEL_PRODUCT_SIZES} from "../../constants";

//import './ProductSizes.scss';

const ProductSizes = ({sizesInfo}) => (
    <div className="product-sizes">
        <span>{LABEL_PRODUCT_SIZES}</span>

        {sizesInfo.map( (size,index) =>
            <button key={index}>{size}</button>
        )}

    </div>
);

export default ProductSizes;
