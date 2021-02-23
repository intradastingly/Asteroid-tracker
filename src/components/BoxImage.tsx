import React, { CSSProperties } from "react";

function BoxImage() {
    return(
        <div>
            <img style={imgStyle} src={"./assets/galaxy.jpg"}/>
        </div>
    )
}

const imgStyle: CSSProperties = {
    height: '16rem',
    width: '25rem'
}

export default BoxImage;