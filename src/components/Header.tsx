import React, { CSSProperties } from "react";


function Header() {
    return (
        <div style={headerStyle}>
            <h1>DRINKS</h1>
        </div>
    )
}

const headerStyle: CSSProperties = {
    display: 'flex',
    height: '5rem',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    background: 'black',
    color: 'white',
}


export default Header;    