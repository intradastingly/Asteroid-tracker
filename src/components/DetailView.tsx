
import React, { CSSProperties } from "react";
// import { Link } from "react-router-dom";
// import Buttons from './Buttons';


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
                <h2 style={h2Style}>{props.drinkTitle}</h2>
            </div>
                <img style={imageStyle} src={props.image} alt="" />
            <div style={innerDivStyle}>
                <div>
                    <p style={paraStyle}>{props.drinkRecipe}</p>
                </div>
                <div>
                        <p style={pStyling}>{props.ingredients1}  {props.ingredientsAmount}</p>
                        <p style={pStyling}>{props.ingredients2}  {props.ingredientsAmount1}</p>
                        <p style={pStyling}>{props.ingredients3}  {props.ingredientsAmount2}</p>
                        <p style={pStyling}>{props.ingredients4}  {props.ingredientsAmount3}</p>
                        <p style={pStyling}>{props.ingredients5}  {props.ingredientsAmount4}</p> 
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
    width: "20rem",
    textAlign: 'center',
    margin: '1rem',
    backgroundColor: '#ffeed1',
    padding: '1rem',
    borderRadius: '2rem',
    color: "#6d0000",
    boxShadow: '0 0 10px 0.03px black', 
}

const imageStyle: CSSProperties = {
    maxWidth: "20rem",
    margin: ".5rem 0",
    borderRadius: '.02rem'
}

const pStyling: CSSProperties = {
    fontSize: '0.7rem',
}

const innerDivStyle: CSSProperties = {
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
}

const paraStyle: CSSProperties = {
    fontSize: '0.9rem',
    fontWeight: 'normal',
    width: '80%',
    paddingLeft: '2rem'
}

const h2Style: CSSProperties = {
    fontSize: '2rem',
    fontFamily: 'Shadows Into Light',
    margin: '0rem 0rem 0rem 0rem'
}


export default DetailView;