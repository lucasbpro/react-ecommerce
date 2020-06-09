import React from 'react';

import { IMAGE_PLACEHOLDER } from "../../constants";
import './SearchItem.scss';


const SearchItem = ({itemName, itemPicture, itemPrice, itemInstallments}) => {
    return(
        <div className="search-item-container">
            <figure className="search-item-figure">
                {itemPicture? itemPicture!=="" ? 
                        <img src={itemPicture} alt={itemName} />
                        :
                        <img src={IMAGE_PLACEHOLDER} alt={itemName} />
                    : null
                }
            </figure>

            <div className="search-item-details">
                <div className="search-item-description">
                    <h3 className="product-name">{itemName}</h3>
                </div>

                <div className="search-item-price">
                    <h3>{itemPrice}</h3>
                    <p>{itemInstallments}</p>
                </div>
            </div>
        </div>
    )
}

export default SearchItem;