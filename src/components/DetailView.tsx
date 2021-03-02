
import React, { CSSProperties } from "react";


interface Props {
    image: any,
    drinkTitle: any,
    drinkRecipe: any,
}

function DetailView(props: Props) {


return (
        <div style={rootStyle}>
            <img style={imageStyle} src={props.image} alt=""/>
             <h2 style={drinkStyleTitle}>{props.drinkTitle}</h2>
             <p style={drinkStyleRecipe}>{props.drinkRecipe}</p>
        </div>
    );

}

const rootStyle: CSSProperties = {
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    maxWidth: "25rem",
    textAlign: 'center',
    margin: "1rem",
    backgroundColor: '#6d0000',
    padding: '1rem',
    borderRadius: '2rem',
    color: "white"
}

const imageStyle: CSSProperties = {
    maxWidth: "8rem",
    borderRadius: "2rem",
    margin: ".5rem 0",
}

const drinkStyleTitle: CSSProperties = {
    fontSize: "1rem",
}

const  drinkStyleRecipe: CSSProperties = {
    fontSize: ".8rem",
    margin: "0 1rem"
}




export default DetailView;