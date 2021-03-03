import React, { CSSProperties } from "react";
import { Link } from 'react-router-dom';


function Header() {
    
    return (
        <div style={headerStyle}>           
            <h1 >
                <Link to='/' style={headerTextStyle}>
                    HANGOVER CURES
                </Link>
            </h1>            
        </div>
    )
}

const headerTextStyle: CSSProperties = {
    color: 'white',
    textDecoration: 'none'
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