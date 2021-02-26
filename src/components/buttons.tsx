import React, { CSSProperties } from "react";

interface Props {
    text: string;
    handleClick: () => void;
}


function Buttons(props: Props){
    return(
        <button onClick={props.handleClick} style={buttonStyle}>
            {props.text}
        </button>
    )

}

const buttonStyle: CSSProperties = {
    height: "2rem",
    width: "5rem",
    margin: "2rem",
    backgroundColor: "#b4e1ff",
    borderRadius: "5px",
    border: 'none',
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
}

export default Buttons;