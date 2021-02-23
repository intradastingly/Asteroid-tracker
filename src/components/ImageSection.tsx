
import React, { CSSProperties } from 'react';

import Section from "./Section"


function ImageSection() {

    const clickText = "Click for info";

    return (
        <div style={imageSectionStyle}>
            <Section text={clickText} image={"./assets/galaxy.jpg"}/>
            <Section text={clickText} image={"./assets/galaxy.jpg"}/>
            <Section text={clickText} image={"./assets/galaxy.jpg"}/>
            <Section text={clickText} image={"./assets/galaxy.jpg"}/>
        </div>
    )
}

const imageSectionStyle: CSSProperties = {

    display: 'flex',
    justifyContent: 'space-evenly', 
    overflow: 'visible',
    whiteSpace: 'nowrap',
    alignItems: "center",
    
}


export default ImageSection;

