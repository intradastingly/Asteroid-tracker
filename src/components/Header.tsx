import React, { CSSProperties } from "react";


function Header() {
    return (
        <div style={headerStyle}>
            <h1>DRINK HELPER</h1>
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
    background: '#AB87FF',
    color: 'white',
}


export default Header;    