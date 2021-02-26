import React,{ CSSProperties } from "react";

interface Props {
    image: any,
    text: String
    clickHandler: () => void;
}



function Section(props: Props) {
    return (
    <div style={rootStyle}>
        <p style={textStyle}>{props.text}</p>
        <img style={imageStyle}src={props.image} onClick={props.clickHandler} alt="Asteroid"/>
    </div>
    )
}

const rootStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    margin: ".5rem",
}

const imageStyle: CSSProperties = {
    objectFit: "cover",
    width: "100%",
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.75)",
    borderRadius: "1rem",
}

const textStyle: CSSProperties = {
    position: "absolute",
    textAlign: "center"
}
export default Section;