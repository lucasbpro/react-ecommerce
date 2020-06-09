import React from 'react';

import { ReactComponent as TrashIcon } from "../../assets/img/trash_icon.svg";

const RemoveItemButton = ({onClick}) => {
    return(
        <button onClick={onClick} > 
            <TrashIcon/> 
        </button>
    )
}

export default RemoveItemButton;