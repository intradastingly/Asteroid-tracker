
import React, { CSSProperties } from "react";


interface Props {
    image: string,
    drinkTitle: string,
    drinkRecipe: string,
    ingredients1: string,
    ingredients2: string,
    ingredients3: string,
    ingredients4: string,
    ingredients5: string,
    ingredientsAmount: string,
    ingredientsAmount1: string,
    ingredientsAmount2: string,
    ingredientsAmount3: string,
    ingredientsAmount4: string,
}

function DetailView(props: Props) {

    return (
        <div style={rootStyle}>
            <div>
                <h2 >{props.drinkTitle}</h2>
            </div>
                <img style={imageStyle} src={props.image} alt="" />
            <div style={innerDivStyle}>
                <div>
                    {/* <h4>How to</h4> */}
                    <p style={paraStyle}>{props.drinkRecipe}</p>
                </div>
                <div>
                    {/* <h4>Ingredients</h4> */}
                        <p style={pStyling}>{props.ingredients1} {props.ingredientsAmount}</p>
                        <p style={pStyling}>{props.ingredients2} {props.ingredientsAmount1}</p>
                        <p style={pStyling}>{props.ingredients3} {props.ingredientsAmount2}</p>
                        <p style={pStyling}>{props.ingredients4} {props.ingredientsAmount3}</p>
                        <p style={pStyling}>{props.ingredients5} {props.ingredientsAmount4}</p> 
                </div>
            </div>
        </div>    
    );
}

const rootStyle: CSSProperties = {
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: "12rem",
    textAlign: 'center',
    margin: '1rem',
    backgroundColor: '#6d0000',
    padding: '2rem',
    borderRadius: '2rem',
    color: "white",
    boxShadow: '0 0 23px 4px black',
    
}

const imageStyle: CSSProperties = {
    maxWidth: "8rem",
    borderRadius: "1rem",
    margin: ".5rem 0",
}

const pStyling: CSSProperties = {
    fontSize: '0.7rem',
    textAlign: 'left',
    paddingLeft: '2rem',
    width: '5rem'
}

const innerDivStyle: CSSProperties = {
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
}

const paraStyle: CSSProperties = {
    fontSize: '0.8rem',
    width: '80%',
    textAlign: 'left',
    paddingLeft: '2rem'
}
export default DetailView;