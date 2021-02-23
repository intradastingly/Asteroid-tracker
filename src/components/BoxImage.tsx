import React, { CSSProperties } from "react";

function BoxImage() {
    return(
        <div>
            <img style={imgStyle} src={"./assets/galaxy.jpg"}/>
        </div>
    )
}

const imgStyle: CSSProperties = {
    paddingLeft: '18%',
    height: '80%',
    width: '80%'
}

export default BoxImage;