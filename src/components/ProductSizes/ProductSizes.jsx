import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {LABEL_PRODUCT_SIZES} from "../../constants";

import './ProductSizes.scss';
import { updateSizeOnView } from '../../actions';

const ProductSizes = ({sizes}) => {

    const [selectedSize, setSize] = useState( sizes.filter( (size) => size.available===true)[0].size);
    const dispatch = useDispatch();

    const handleSelectSize = (size) => {
        setSize(size);
        dispatch(updateSizeOnView(size))
    };

    useEffect(() => {
            dispatch(updateSizeOnView(selectedSize))
        }, [dispatch, selectedSize])

    return(
        <div className="product-sizes">
            <h3>{LABEL_PRODUCT_SIZES}</h3>

            <div className="product-sizes-buttons">
                {sizes? 
                    sizes.map( (size,index) => {
                        if(size.available)
                            if(size.size === selectedSize)
                                return (
                                    <button key={index}
                                            className="product-size-button--selected" 
                                            onClick={() => handleSelectSize(size.size)}>
                                        <span>{size.size}</span>
                                    </button>
                                )
                            else
                                return (
                                    <button key={index}
                                            className="product-size-button" 
                                            onClick={() => handleSelectSize(size.size)}>
                                        <span>{size.size}</span>
                                    </button>
                                )
                        else
                            return null
                    })
                    :
                    null
                }
            </div>
        </div>
    );
};

export default ProductSizes;
