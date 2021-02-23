import React, { CSSProperties } from "react";

interface Props {
    image: string
}

function Header(props: Props) {
    return (
        <div style={headerStyle}>
            <h1>ASTEROID TRACKER</h1>
            <img style={imgStyle} src={props.image} />
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
    borderBottom:'0.2rem solid'
}

const imgStyle: CSSProperties = {
    position: 'absolute',
    top: "0",
    left: "0",
    width: "100%",
    height: "inherit",
    objectFit: "cover"
    //width: 'auto',
    // maxHeight: '100%',
    //overflow: 'hidden',
    // objectPosition: 'center'
}

export default Header;    