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
    height: "3rem",
    width: "12rem",
    margin: "2rem",
    backgroundColor: '#6d0000',
    borderRadius: "5px",
    border: 'none',
    fontSize: '2rem',
    color: 'white'
}

export default Buttons;