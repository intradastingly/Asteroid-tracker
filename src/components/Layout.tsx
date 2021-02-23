import React, {CSSProperties} from 'react';
import Header from './Header';
import Footer from "./Footer";
import Content from "./Content";


function Layout() { 
    return (
        <div style={rootStyle}>
            <Header image={'./assets/assbg.png'}/>
            <Content />
            <Footer />
        </div>
    )
}


const rootStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    background: 'grey',
    height: "100%"
}

export default Layout;