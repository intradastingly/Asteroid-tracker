import React, { CSSProperties } from "react";



function Header() {
    return (
        <div style={headerStyle}>
            <h1>HANGOVER CURES</h1>
        </div>
    )
}

const headerStyle: CSSProperties = {
    display: 'flex',
    height: '5rem',
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    background: '#6d0000',
    color: 'white',
    fontFamily: 'Shadows Into Light'
}


export default Header;    