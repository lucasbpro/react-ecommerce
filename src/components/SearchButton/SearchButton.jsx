import React from 'react';

import { ReactComponent as SearchIcon } from "../../assets/img/search_icon.svg";

const SearchButton = ({onClickSearch}) => {

    return(
        <button onClick={onClickSearch} > 
            <SearchIcon/> 
        </button>
    )
}

export default SearchButton;