import React, { CSSProperties } from "react";



function SearchBar() {

    return (
        <input 
            style={searchBox}
            placeholder="Search"
        />
    );
}

const searchBox: CSSProperties = {
    width: 'auto',
    borderRadius: '3rem',
    background: 'white',
    padding: '.5rem',
    outline: "none",
}

export default SearchBar;