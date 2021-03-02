
import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";
import Buttons from './buttons';


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

    function somethingHappens() {
        //route back to master view
    }
  
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
                <Link to="/">
                    <Buttons text="Back" handleClick={somethingHappens} />
                </Link>
            </div>
        );
}


const rootStyle: CSSProperties = {
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flex: "1",
}

const imageStyle: CSSProperties = {
                    maxWidth: "10rem",
    borderRadius: "2rem",
    margin: "2rem 0",
}




export default DetailView;