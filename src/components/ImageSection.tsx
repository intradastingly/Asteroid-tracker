
import React, { CSSProperties } from 'react';

import Section from "./Section"


function ImageSection() {

    const clickText = "Click for info";

    function clickHandler(){
       console.log("Asteroid was clicked!")
        
    }
        return (
        <div style={imageSectionStyle}>
            <Section clickHandler={clickHandler} text={clickText} image={"./assets/galaxy.jpg"}/>
            <Section clickHandler={clickHandler} text={clickText} image={"./assets/galaxy.jpg"}/>
            <Section clickHandler={clickHandler} text={clickText} image={"./assets/galaxy.jpg"}/>
            <Section clickHandler={clickHandler} text={clickText} image={"./assets/galaxy.jpg"}/>
           
        </div>
    )
}

const imageSectionStyle: CSSProperties = {

    display: 'flex',
    justifyContent: 'space-evenly', 
    overflow: 'visible',
    whiteSpace: 'nowrap',
    alignItems: "center",
    flex: "1",
    
}


export default ImageSection;

