import React from 'react';

import { ReactComponent as TrashIcon } from "../../assets/img/trash_icon.svg";
import {LABEL_CART_REMOVE_PRODUCT} from '../../constants';

const RemoveItemButton = ({onClick}) => {
    return(
        <button onClick={onClick} > 
            <TrashIcon/> 
            <p>{LABEL_CART_REMOVE_PRODUCT}</p>
        </button>
    )
}

export default RemoveItemButton;