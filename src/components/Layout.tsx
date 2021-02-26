import React, {CSSProperties} from 'react';
import Header from './Header';
import Content from "./Content";


function Layout() { 
    return (
        <div style={rootStyle}>
            <Header />
            <Content />
            
        </div>
    )
}


const rootStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    background: '#F5FFC6',
    width: "100%",
    height: "100%"
}

export default Layout;