import React from 'react';

import { ReactComponent as ReturnIcon } from "../../assets/img/return_icon.svg";

const ReturnButton = ({onClick}) => {

    const style = {
        flex: 0.1,
        width: '80%',
        height: '80%'
    }

    return(
        <button style={style} onClick={onClick} > 
            <ReturnIcon/> 
        </button>
    )
}

export default ReturnButton;