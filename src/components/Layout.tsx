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
    background: 'grey',
    margin: "0",
    minWidth: '100%',
}

export default Layout;