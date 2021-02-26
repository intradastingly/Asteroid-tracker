import React, { CSSProperties } from "react";



function Footer(){
    return(
        <p style={rootStyle}>@COPYRIGHT ANTON ASAF GUSTAV CAMILLA</p>
    );
}


const rootStyle: CSSProperties = {
    backgroundColor: "black",
    // position: 'absolute',
    right: '0',
    height: "3rem",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    bottom: "0",
    left: "0",
    margin: "0",
}

export default Footer;