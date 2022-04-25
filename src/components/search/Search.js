import React from 'react'
import './style.css'
import { BsSearch } from "react-icons/bs";

function Search() {
    return ( <
        div className = "search" >
        <
        div className = 'searchInput' >
        <
        input type = "text"
        placeholder = 'search...' / >
        <
        BsSearch className = 'icon' /
        >
        <
        /div>  

        <
        /div >
    );
}

export default Search;