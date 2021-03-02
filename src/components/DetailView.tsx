
import React, { CSSProperties } from "react";


interface Props {
    image: string,
    drinkTitle: string,
    drinkRecipe: string,
    ingredients1: string,
    ingredients2: string,
    ingredients3: string,
    ingredients4: string,
    ingredients5: string

}

function DetailView(props: Props) {

        return (
            <div style={rootStyle}>
                <img style={imageStyle} src={props.image} alt="" />
                <h2 >{props.drinkTitle}</h2>
                <p>{props.drinkRecipe}</p>
                <h3>Ingredients</h3>
                    <p>{props.ingredients1}</p>
                    <p>{props.ingredients2}</p>
                    <p>{props.ingredients3}</p>
                    <p>{props.ingredients4}</p>
                    <p>{props.ingredients5}</p> 
            </div>
        );
}


const rootStyle: CSSProperties = {
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: "25rem",
    textAlign: 'center',
    margin: "1rem",
    backgroundColor: '#6d0000',
    padding: '1rem',
    borderRadius: '2rem',
    color: "white",
    boxShadow: '0 0 23px 4px black',
    
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